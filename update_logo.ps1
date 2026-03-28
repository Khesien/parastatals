# Create assets directory if it doesn't exist
$assetsDir = "c:\Users\DIT\OneDrive\Desktop\psl\bw-parastatal\assets"
if (!(Test-Path -Path $assetsDir)) {
    New-Item -ItemType Directory -Force -Path $assetsDir
}

# Copy logo image to assets
$sourceImage = "C:\Users\DIT\.gemini\antigravity\brain\f4d293a8-4826-4440-b987-33e8216e0c18\media__1774524323717.jpg"
$destImage = Join-Path $assetsDir "logo.jpg"
Copy-Item $sourceImage $destImage -Force

# Define replacements
$navLogoRegex = '(?s)<a href="index\.html" class="logo">\s*<span class="blue">BW</span><span class="black">Parastatal</span>\s*</a>'
$navLogoReplacement = '<a href="index.html" class="logo"><img src="assets/logo.jpg" alt="BW Parastatal" style="height: 40px; width: auto; border-radius: 4px;"></a>'

$footerLogoRegex = '(?s)<a href="index\.html" class="logo mb-3" style="color: white;">\s*<span class="blue">BW</span><span style="color: white;">Parastatal</span>\s*</a>'
$footerLogoReplacement = '<a href="index.html" class="logo mb-3"><img src="assets/logo.jpg" alt="BW Parastatal" style="height: 45px; width: auto; border-radius: 4px;"></a>'

# Apply replacements to all HTML files
Get-ChildItem -Path "c:\Users\DIT\OneDrive\Desktop\psl\bw-parastatal" -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace $navLogoRegex, $navLogoReplacement
    $newContent = $newContent -replace $footerLogoRegex, $footerLogoReplacement
    Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
}
