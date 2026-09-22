param(
  [string]$Src = "C:\Users\steph\AppData\Local\Temp\claude\C--Users-steph-ENTP-6314\aba2999a-a11f-487d-8747-f0b226a75e8e\scratchpad\pkg",
  [string]$Out = "C:\Users\steph\ENTP 6314\07_DietGroceryApp\ResearchAgents\DietGroceryApp_Research.docx"
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

if (Test-Path -LiteralPath $Out) { Remove-Item -LiteralPath $Out -Force }

# OOXML requires forward-slash entry names; [Content_Types].xml must come first.
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
  $full = Join-Path $Src $p.rel
  $entry = $zip.CreateEntry($p.entry, [System.IO.Compression.CompressionLevel]::Optimal)
  $stream = $entry.Open()
  $bytes = [System.IO.File]::ReadAllBytes($full)
  $stream.Write($bytes, 0, $bytes.Length)
  $stream.Dispose()
}
$zip.Dispose()

$z = [System.IO.Compression.ZipFile]::OpenRead($Out)
$z.Entries | Select-Object FullName, Length | Format-Table -AutoSize
$z.Dispose()
