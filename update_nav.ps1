$target = '            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="directory.html">Directory</a>
                <a href="news.html">News & Media</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
                <a href="tenders.html">Tenders</a>
                <a href="documents.html">Documents</a>
                <a href="support.html">Support</a>
                <a href="admin.html" class="btn btn-outline" style="padding: 0.4rem 1rem; border-radius: var(--radius-sm); margin-left: 1rem;">Portal Login</a>
            </div>'

Get-ChildItem -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace '(?s)            <div class="nav-links">.*?</div>', $target
    Set-Content -Path $_.FullName -Value $newContent -Encoding Ascii
}
