$target = '            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="directory.html">Directory</a>
                <a href="services.html">Services</a>
                
                <div class="dropdown">
                    <a href="#" class="dropdown-toggle" onclick="event.preventDefault()">Resources <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></a>
                    <div class="dropdown-content">
                        <a href="news.html">News & Media</a>
                        <a href="tenders.html">Tenders</a>
                        <a href="documents.html">Documents</a>
                    </div>
                </div>

                <div class="dropdown">
                    <a href="#" class="dropdown-toggle" onclick="event.preventDefault()">Connect <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></a>
                    <div class="dropdown-content">
                        <a href="about.html">About Us</a>
                        <a href="contact.html">Contact</a>
                        <a href="support.html">Support</a>
                    </div>
                </div>

                <a href="admin.html" class="btn btn-outline" style="padding: 0.4rem 1rem; border-radius: var(--radius-sm); margin-left: 1rem;">Portal Login</a>
            </div>'

Get-ChildItem -Path "c:\Users\DIT\OneDrive\Desktop\psl\bw-parastatal" -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace '(?s)            <div class="nav-links">.*?</div>', $target
    Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
}
