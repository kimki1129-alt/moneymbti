from pathlib import Path
import re

ROOT = Path(".")
SITE = "https://moneymbti.com"


def make_root_article(src):
    slug = src.stem
    html = src.read_text(encoding="utf-8")
    html = html.replace("../styles.css", "./styles.css")
    html = html.replace("../images/", "./images/")
    html = html.replace("../index.html", "./index.html")
    html = html.replace("../money-column.html", "./money-column.html")
    html = html.replace("../investment-test.html", "./investment-test.html")
    html = html.replace("../stock-mbti.html", "./stock-mbti.html")
    html = html.replace("../about.html", "./about.html")
    html = html.replace("../privacy.html", "./privacy.html")
    html = html.replace("../terms.html", "./terms.html")
    html = html.replace("../contact.html", "./contact.html")
    html = html.replace(f"{SITE}/articles/{slug}.html", f"{SITE}/{slug}.html")
    html = re.sub(r'href="\./articles/([^"]+\.html)"', r'href="./\1"', html)
    (ROOT / f"{slug}.html").write_text(html, encoding="utf-8")


def update_links(path):
    html = path.read_text(encoding="utf-8")
    html = re.sub(r'href="\./articles/([^"]+\.html)"', r'href="./\1"', html)
    html = re.sub(r'href="\.\./articles/([^"]+\.html)"', r'href="../\1"', html)
    path.write_text(html, encoding="utf-8")


def update_sitemap():
    path = ROOT / "sitemap.xml"
    if not path.exists():
        return
    xml = path.read_text(encoding="utf-8")
    urls = []
    for article in sorted((ROOT / "articles").glob("*.html")):
        urls.append(f"  <url><loc>{SITE}/{article.name}</loc></url>")
    block = "\n".join(urls)
    xml = re.sub(r"\s*<url><loc>https://moneymbti\.com/articles/[^<]+</loc></url>", "", xml)
    xml = xml.replace("</urlset>", block + "\n</urlset>")
    path.write_text(xml, encoding="utf-8")


def update_redirects():
    path = ROOT / "_redirects"
    text = ""
    if path.exists():
        text = path.read_text(encoding="utf-8").strip() + "\n"
    rule = "/articles/:slug.html /:slug.html 301\n"
    if rule not in text:
        text += rule
    path.write_text(text, encoding="utf-8")


def main():
    for src in sorted((ROOT / "articles").glob("*.html")):
        make_root_article(src)
    for page in list(ROOT.glob("*.html")) + list((ROOT / "articles").glob("*.html")):
        update_links(page)
    update_sitemap()
    update_redirects()
    print("flattened article routes")


if __name__ == "__main__":
    main()
