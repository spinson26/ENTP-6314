// md2docx.js — minimal Markdown -> .docx (WordprocessingML) generator, no dependencies.
// Usage: node md2docx.js <out-dir-for-unzipped-docx> <input1.md> [input2.md ...]
// Supports: # ## ### headings, paragraphs, - bullets, | tables |, > quotes, ---,
// inline [text](url), **bold**, `code`.

const fs = require('fs');
const path = require('path');

const outDir = process.argv[2];
const inputs = process.argv.slice(3);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rels = []; // {id, url}
function relFor(url) {
  let found = rels.find((r) => r.url === url);
  if (!found) {
    found = { id: 'rHl' + (rels.length + 1), url };
    rels.push(found);
  }
  return found.id;
}

// ---- inline parsing ----
function runs(text, { bold = false, size = null, color = null } = {}) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let last = 0, m;
  const plain = (t, extraBold) => {
    if (!t) return;
    out.push(run(t, { bold: bold || extraBold, size, color }));
  };
  while ((m = re.exec(text)) !== null) {
    plain(text.slice(last, m.index));
    if (m[1]) {
      const id = relFor(m[2]);
      out.push(`<w:hyperlink r:id="${id}"><w:r><w:rPr><w:rStyle w:val="Hyperlink"/>${size ? `<w:sz w:val="${size}"/>` : ''}</w:rPr><w:t xml:space="preserve">${esc(m[1])}</w:t></w:r></w:hyperlink>`);
    } else if (m[3]) {
      plain(m[3], true);
    } else if (m[4]) {
      out.push(`<w:r><w:rPr><w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/>${size ? `<w:sz w:val="${size}"/>` : ''}</w:rPr><w:t xml:space="preserve">${esc(m[4])}</w:t></w:r>`);
    }
    last = re.lastIndex;
  }
  plain(text.slice(last));
  return out.join('');
}

function run(t, { bold, size, color } = {}) {
  const rPr = `${bold ? '<w:b/>' : ''}${size ? `<w:sz w:val="${size}"/>` : ''}${color ? `<w:color w:val="${color}"/>` : ''}`;
  return `<w:r>${rPr ? `<w:rPr>${rPr}</w:rPr>` : ''}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
}

function para(text, { style, bullet, quote, size } = {}) {
  const pPr = [];
  if (style) pPr.push(`<w:pStyle w:val="${style}"/>`);
  if (bullet) pPr.push('<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>');
  if (quote) pPr.push('<w:ind w:left="360"/><w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="9AA0A6"/></w:pBdr>');
  return `<w:p>${pPr.length ? `<w:pPr>${pPr.join('')}</w:pPr>` : ''}${runs(text, { size })}</w:p>`;
}

const PAGE_W = 12240, MARGIN = 1080; // US Letter, 0.75" margins
const CONTENT_W = PAGE_W - MARGIN * 2;

function table(rows) {
  const cols = Math.max(...rows.map((r) => r.length));
  const widths = [];
  // first column a bit wider when there are many columns
  for (let i = 0; i < cols; i++) widths.push(Math.floor(CONTENT_W / cols));
  widths[0] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const border = (side) => `<w:${side} w:val="single" w:sz="4" w:space="0" w:color="C9CCD1"/>`;
  const borders = `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(border).join('')}</w:tblBorders>`;
  const body = rows.map((cells, ri) => {
    const tr = cells.map((c, ci) => {
      const shade = ri === 0 ? '<w:shd w:val="clear" w:color="auto" w:fill="EFF1F3"/>' : '';
      const p = `<w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr>${runs(c, { bold: ri === 0, size: 18 })}</w:p>`;
      return `<w:tc><w:tcPr><w:tcW w:w="${widths[ci] || widths[0]}" w:type="dxa"/>${shade}</w:tcPr>${p}</w:tc>`;
    }).join('');
    return `<w:tr>${ri === 0 ? '<w:trPr><w:tblHeader/></w:trPr>' : ''}${tr}</w:tr>`;
  }).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="${CONTENT_W}" w:type="dxa"/>${borders}<w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${body}</w:tbl><w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>`;
}

function splitRow(line) {
  return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());
}

function convert(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (/^\s*$/.test(line)) continue;
    if (/^---+$/.test(line.trim())) {
      out.push('<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="6" w:color="C9CCD1"/></w:pBdr></w:pPr></w:p>');
      continue;
    }
    if (line.trim().startsWith('|')) { // table
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = splitRow(lines[i]);
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      i--;
      out.push(table(rows));
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const lvl = h[1].length;
      out.push(para(h[2], { style: lvl === 1 ? 'Title' : 'Heading' + (lvl - 1) }));
      continue;
    }
    if (/^\s*>\s?/.test(line)) {
      out.push(para(line.replace(/^\s*>\s?/, ''), { quote: true }));
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      out.push(para(line.replace(/^\s*[-*]\s+/, ''), { bullet: true }));
      continue;
    }
    out.push(para(line.trim()));
  }
  return out.join('');
}

// ---- assemble ----
const body = inputs.map((f) => convert(fs.readFileSync(f, 'utf8'))).join('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');

const sectPr = `<w:sectPr><w:pgSz w:w="${PAGE_W}" w:h="15840"/><w:pgMar w:top="${MARGIN}" w:right="${MARGIN}" w:bottom="${MARGIN}" w:left="${MARGIN}" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>`;

const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}${sectPr}</w:body></w:document>`;

const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="22"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="140" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="240"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="52"/><w:color w:val="1A1A1A"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="360" w:after="140"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="34"/><w:color w:val="1F3864"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="120"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/><w:color w:val="2E5A88"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="220" w:after="100"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:sz w:val="23"/><w:color w:val="3C3C3C"/></w:rPr></w:style>
<w:style w:type="character" w:styleId="Hyperlink"><w:name w:val="Hyperlink"/><w:rPr><w:color w:val="1155CC"/><w:u w:val="single"/></w:rPr></w:style>
</w:styles>`;

const numberingXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/>
<w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="&#8226;"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/></w:rPr></w:lvl>
</w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>`;

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
</Types>`;

const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
${rels.map((r) => `<Relationship Id="${r.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${esc(r.url)}" TargetMode="External"/>`).join('\n')}
</Relationships>`;

const write = (p, c) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, c, 'utf8'); };
write(path.join(outDir, '[Content_Types].xml'), contentTypes);
write(path.join(outDir, '_rels', '.rels'), rootRels);
write(path.join(outDir, 'word', 'document.xml'), documentXml);
write(path.join(outDir, 'word', 'styles.xml'), stylesXml);
write(path.join(outDir, 'word', 'numbering.xml'), numberingXml);
write(path.join(outDir, 'word', '_rels', 'document.xml.rels'), docRels);
console.log('parts written:', outDir, '| hyperlinks:', rels.length);
