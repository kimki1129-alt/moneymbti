from pathlib import Path
import re


def replace_in_file(path):
    html = path.read_text(encoding="utf-8")
    html = re.sub(
        r'<figure class="article-hero-image">\s*<img[^>]*alt="([^"]*)"[^>]*>\s*</figure>',
        lambda m: (
            '<figure class="article-hero-visual" role="img" aria-label="'
            + m.group(1)
            + '"><span>MoneyMBTI Guide</span><strong>돈 습관 점검 노트</strong><em>읽고 바로 적용할 수 있는 생활형 가이드</em></figure>'
        ),
        html,
        flags=re.I | re.S,
    )
    path.write_text(html, encoding="utf-8")


def main():
    for path in list(Path(".").glob("*.html")) + list(Path("articles").glob("*.html")):
        replace_in_file(path)
    print("article image tags replaced with CSS visual cards")


if __name__ == "__main__":
    main()
