import os
import re

directory = r"C:\Users\DIT\OneDrive\Desktop\psl\bw-parastatal"
target_html = """            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="directory.html">Directory</a>
                <a href="news.html">News & Media</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
                <a href="tenders.html">Tenders</a>
                <a href="documents.html">Documents</a>
                <a href="support.html">Support</a>
                <a href="admin.html" class="btn btn-outline" style="padding: 0.4rem 1rem; border-radius: var(--radius-sm); margin-left: 1rem;">Portal</a>
            </div>"""

nav_regex = re.compile(r'<div class="nav-links">.*?</div>', re.DOTALL)

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace only the first occurrence (navbar)
        new_content = nav_regex.sub(target_html, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated {filename}")
