$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$visualDir = Join-Path $root "public\visuals"
New-Item -ItemType Directory -Force -Path $visualDir | Out-Null

$palette = @{
  Paper = [System.Drawing.ColorTranslator]::FromHtml("#D9D0C7")
  Taupe = [System.Drawing.ColorTranslator]::FromHtml("#B7A99C")
  Rose = [System.Drawing.ColorTranslator]::FromHtml("#A78B7D")
  Clay = [System.Drawing.ColorTranslator]::FromHtml("#A05B3C")
  Umber = [System.Drawing.ColorTranslator]::FromHtml("#7A4B3B")
  Plum = [System.Drawing.ColorTranslator]::FromHtml("#5A3A3D")
  Wine = [System.Drawing.ColorTranslator]::FromHtml("#3E2529")
  Dark = [System.Drawing.ColorTranslator]::FromHtml("#2C1C1D")
  Ink = [System.Drawing.ColorTranslator]::FromHtml("#1A1A1A")
  Cyan = [System.Drawing.ColorTranslator]::FromHtml("#68D8D6")
  Magenta = [System.Drawing.ColorTranslator]::FromHtml("#D85C8A")
  Yellow = [System.Drawing.ColorTranslator]::FromHtml("#F2C94C")
}

function New-Brush($color) {
  return [System.Drawing.SolidBrush]::new($color)
}

function Draw-TextBlock($graphics, [string] $text, [int] $x, [int] $y, [int] $size, $color, [int] $width) {
  $font = [System.Drawing.Font]::new("Arial", $size, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = New-Brush $color
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Near
  $graphics.DrawString($text, $font, $brush, [System.Drawing.RectangleF]::new($x, $y, $width, 260), $format)
  $font.Dispose()
  $brush.Dispose()
  $format.Dispose()
}

function Draw-Lines($graphics, [int] $x, [int] $y, [int] $width, [int] $count, $color) {
  $pen = [System.Drawing.Pen]::new($color, 6)
  for ($i = 0; $i -lt $count; $i++) {
    $yy = $y + ($i * 28)
    $graphics.DrawLine($pen, $x, $yy, $x + $width - ($i % 3) * 54, $yy)
  }
  $pen.Dispose()
}

function Save-Hero {
  $bitmap = [System.Drawing.Bitmap]::new(1200, 900)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.Clear([System.Drawing.Color]::Transparent)

  for ($i = 0; $i -lt 4; $i++) {
    $rect = [System.Drawing.Rectangle]::new(250 + ($i * 58), 116 + ($i * 54), 560, 680)
    $brush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, $palette.Paper, $palette.Clay, 35 + ($i * 12))
    $graphics.FillRectangle($brush, $rect)
    $graphics.DrawRectangle([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(90, $palette.Dark), 2), $rect)
    $brush.Dispose()
  }

  $cover = [System.Drawing.Rectangle]::new(420, 118, 600, 690)
  $coverBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($cover, $palette.Rose, $palette.Dark, 135)
  $graphics.FillRectangle($coverBrush, $cover)
  $coverBrush.Dispose()
  $graphics.DrawRectangle([System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(120, $palette.Paper), 3), $cover)

  $clayBrush = New-Brush $palette.Clay
  $paperBrush = New-Brush $palette.Paper
  $darkBrush = New-Brush $palette.Dark
  $graphics.FillRectangle($paperBrush, 468, 170, 210, 38)
  $graphics.FillRectangle($clayBrush, 468, 242, 420, 180)
  $graphics.FillRectangle($darkBrush, 732, 470, 228, 228)
  Draw-TextBlock $graphics "TACTILE`nCAMPAIGN`nPRINT" 470 468 60 $palette.Paper 470
  Draw-Lines $graphics 470 706 290 5 ([System.Drawing.Color]::FromArgb(145, $palette.Paper))

  $cyanBrush = New-Brush $palette.Cyan
  $magentaBrush = New-Brush $palette.Magenta
  $yellowBrush = New-Brush $palette.Yellow
  $graphics.FillEllipse($cyanBrush, 846, 188, 34, 34)
  $graphics.FillEllipse($magentaBrush, 892, 188, 34, 34)
  $graphics.FillEllipse($yellowBrush, 938, 188, 34, 34)

  $graphics.Dispose()
  $bitmap.Save((Join-Path $visualDir "hero-press-sheet.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $bitmap.Dispose()
  $clayBrush.Dispose()
  $paperBrush.Dispose()
  $darkBrush.Dispose()
  $cyanBrush.Dispose()
  $magentaBrush.Dispose()
  $yellowBrush.Dispose()
}

function Save-Portfolio($file, $title, $accent, $base, $dark, [int] $variant) {
  $bitmap = [System.Drawing.Bitmap]::new(1000, 1300)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0, 0, 1000, 1300), $base, $dark, 130)
  $graphics.FillRectangle($background, 0, 0, 1000, 1300)
  $background.Dispose()

  $paperBrush = New-Brush ([System.Drawing.Color]::FromArgb(232, $palette.Paper))
  $accentBrush = New-Brush $accent
  $darkBrush = New-Brush ([System.Drawing.Color]::FromArgb(210, $palette.Ink))
  $linePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(120, $palette.Paper), 4)

  if ($variant % 2 -eq 0) {
    $graphics.FillRectangle($paperBrush, 150, 150, 700, 960)
    $graphics.FillRectangle($accentBrush, 150, 150, 700, 270)
    $graphics.FillRectangle($darkBrush, 205, 486, 265, 265)
    $graphics.FillRectangle($accentBrush, 526, 486, 270, 265)
    Draw-TextBlock $graphics $title 205 810 58 $palette.Dark 580
    Draw-Lines $graphics 205 1010 520 6 ([System.Drawing.Color]::FromArgb(150, $palette.Dark))
  }
  else {
    $graphics.FillRectangle($paperBrush, 185, 120, 630, 1040)
    $graphics.FillRectangle($accentBrush, 250, 200, 500, 500)
    $graphics.DrawEllipse($linePen, 300, 250, 400, 400)
    Draw-TextBlock $graphics $title 250 780 62 $palette.Dark 500
    Draw-Lines $graphics 250 995 440 5 ([System.Drawing.Color]::FromArgb(150, $palette.Dark))
  }

  for ($i = 0; $i -lt 3; $i++) {
    $graphics.DrawLine($linePen, 80 + ($i * 100), 70, 420 + ($i * 160), 1230)
  }

  $graphics.Dispose()
  $bitmap.Save((Join-Path $visualDir $file), [System.Drawing.Imaging.ImageFormat]::Png)
  $bitmap.Dispose()
  $paperBrush.Dispose()
  $accentBrush.Dispose()
  $darkBrush.Dispose()
  $linePen.Dispose()
}

Save-Hero
Save-Portfolio "portfolio-estate.png" "Estate`nLaunch" $palette.Clay $palette.Paper $palette.Wine 1
Save-Portfolio "portfolio-clinic.png" "Clinic`nServices" $palette.Cyan $palette.Taupe $palette.Dark 2
Save-Portfolio "portfolio-gallery.png" "Gallery`nMap" $palette.Magenta $palette.Rose $palette.Wine 3
Save-Portfolio "portfolio-hotel.png" "Hotel`nCompendium" $palette.Yellow $palette.Umber $palette.Dark 4
Save-Portfolio "portfolio-startup.png" "Investor`nFoldout" $palette.Clay $palette.Paper $palette.Plum 5
Save-Portfolio "portfolio-menu.png" "Seasonal`nMenu" $palette.Rose $palette.Paper $palette.Umber 6
Save-Portfolio "portfolio-civic.png" "Civic`nWelcome" $palette.Taupe $palette.Paper $palette.Dark 7
Save-Portfolio "portfolio-wellness.png" "Wellness`nGuide" $palette.Cyan $palette.Paper $palette.Plum 8
Save-Portfolio "portfolio-retail.png" "Retail`nMailer" $palette.Magenta $palette.Taupe $palette.Wine 9
