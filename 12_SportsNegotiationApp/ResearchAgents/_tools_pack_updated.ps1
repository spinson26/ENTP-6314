param(
  [string]$Src = "C:\Users\steph\AppData\Local\Temp\claude\C--Users-steph-ENTP-6314\aba2999a-a11f-487d-8747-f0b226a75e8e\scratchpad\pkg",
  [string]$Out = "C:\Users\steph\ENTP 6314\12_SportsNegotiationApp\ResearchAgents\SportsNegotiationApp_Research-UPDATED.docx"
)

Add-Type -AssemblyName System.IO.Compression.FileSystem
if (Test-Path -LiteralPath $Out) { Remove-Item -LiteralPath $Out -Force }

$parts = @(
  @{ rel = '[Content_Types].xml';          entry = '[Content_Types].xml' },
  @{ rel = '_rels\.rels';                  entry = '_rels/.rels' },
  @{ rel = 'word\document.xml';            entry = 'word/document.xml' },
  @{ rel = 'word\styles.xml';              entry = 'word/styles.xml' },
  @{ rel = 'word\numbering.xml';           entry = 'word/numbering.xml' },
  @{ rel = 'word\_rels\document.xml.rels'; entry = 'word/_rels/document.xml.rels' }
)

$zip = [System.IO.Compression.ZipFile]::Open($Out, 'Create')
foreach ($p in $parts) {
  $entry = $zip.CreateEntry($p.entry, [System.IO.Compression.CompressionLevel]::Optimal)
  $stream = $entry.Open()
  $bytes = [System.IO.File]::ReadAllBytes((Join-Path $Src $p.rel))
  $stream.Write($bytes, 0, $bytes.Length)
  $stream.Dispose()
}
$zip.Dispose()

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$d = $word.Documents.Open($Out, $false, $true)
"pages     : " + $d.ComputeStatistics(2)
"words     : " + $d.ComputeStatistics(0)
"tables    : " + $d.Tables.Count
"hyperlinks: " + $d.Hyperlinks.Count
"title     : " + $d.Paragraphs.Item(1).Range.Text.Trim()
$d.Close([ref]$false)
$word.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
