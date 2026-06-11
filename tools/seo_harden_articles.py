from pathlib import Path
import json
import re

ROOT = Path(".")
SITE = "https://moneymbti.com"


def first(pattern, text, default=""):
    m = re.search(pattern, text, re.I | re.S)
    return m.group(1).strip() if m else default


def strip_tags(value):
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def upsert_meta_description(html, description):
    tag = f'    <meta name="description" content="{description}" />'
    if re.search(r'<meta\s+name=["\']description["\']', html, re.I):
        return re.sub(
            r'\s*<meta\s+name=["\']description["\']\s+content=["\'][^"\']*["\']\s*/?>',
            "\n" + tag,
            html,
            count=1,
            flags=re.I,
        )
    return html.replace("</title>", "</title>\n" + tag, 1)


def remove_adsense_script(html):
    return re.sub(
        r'\s*<script\b[^>]*googlesyndication\.com/pagead/js/adsbygoogle\.js[^>]*>\s*</script>',
        "",
        html,
        flags=re.I,
    )


def add_json_ld(html, path):
    if "application/ld+json" in html:
        return html

    title = strip_tags(first(r"<h1[^>]*>(.*?)</h1>", html)) or strip_tags(first(r"<title>(.*?)</title>", html))
    description = first(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']', html)
    if not description:
        description = f"{title}에 대해 초보자도 이해하기 쉽게 정리한 MoneyMBTI 생활 돈 습관 가이드입니다."
        html = upsert_meta_description(html, description)

    canonical = first(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', html) or f"{SITE}/{path.as_posix()}"
    image = first(r'<meta\s+property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', html) or f"{SITE}/images/og/default.png"

    article = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "author": {"@type": "Organization", "name": "MoneyMBTI"},
        "publisher": {
            "@type": "Organization",
            "name": "MoneyMBTI",
            "logo": {"@type": "ImageObject", "url": f"{SITE}/images/og/default.png"},
        },
        "mainEntityOfPage": canonical,
        "datePublished": "2026-06-01",
        "dateModified": "2026-06-11",
    }
    breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "홈", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "머니칼럼", "item": SITE + "/money-column.html"},
            {"@type": "ListItem", "position": 3, "name": title, "item": canonical},
        ],
    }
    block = (
        '\n    <script type="application/ld+json">'
        + json.dumps(article, ensure_ascii=False)
        + "</script>\n"
        + '    <script type="application/ld+json">'
        + json.dumps(breadcrumb, ensure_ascii=False)
        + "</script>\n"
    )
    return html.replace("</head>", block + "  </head>", 1)


def harden_article(path):
    html = path.read_text(encoding="utf-8")
    html = remove_adsense_script(html)
    html = add_json_ld(html, path)
    path.write_text(html, encoding="utf-8")


def main():
    for path in sorted((ROOT / "articles").glob("*.html")):
        harden_article(path)
    print("SEO hardening complete")


if __name__ == "__main__":
    main()
