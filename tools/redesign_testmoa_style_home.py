from pathlib import Path

AD = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8880460426840382" crossorigin="anonymous"></script>'


def head(title, desc, canonical):
    return f'''  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content="{desc}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="{canonical}" />
    <meta property="og:url" content="{canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{desc}" />
    <meta property="og:image" content="https://moneymbti.com/images/og/default.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://moneymbti.com/images/og/default.png" />
    <meta name="naver-site-verification" content="NAVER_SITE_VERIFICATION_CODE" />
    {AD}
    <link rel="stylesheet" href="./styles.css" />
  </head>'''


HEADER = '''    <header class="site-header">
      <a class="brand" href="./index.html" aria-label="MoneyMBTI 홈">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>MoneyMBTI</span>
      </a>
      <nav class="main-nav" aria-label="주요 메뉴">
        <a href="./investment-test.html?start=1">테스트 시작</a>
        <a href="./tests.html">테스트 모음</a>
        <a href="./money-column.html">머니칼럼</a>
        <a href="./stock-mbti.html">16유형</a>
      </nav>
    </header>'''


FOOTER = '''    <footer class="site-footer">
      <div>
        <strong>MoneyMBTI</strong>
        <p>돈을 대하는 습관을 테스트와 읽을거리로 가볍게 점검하는 콘텐츠 사이트입니다.</p>
        <p>contact@moneymbti.com</p>
      </div>
      <nav aria-label="하단 메뉴">
        <a href="./privacy.html">개인정보처리방침</a>
        <a href="./terms.html">이용약관</a>
        <a href="./disclaimer.html">면책고지</a>
        <a href="./contact.html">문의</a>
      </nav>
    </footer>'''


TEST_CARDS = [
    ("chart", "투자", "투자 성향 MBTI", "내 계좌 속 캐릭터는?", "12문항 · 약 2분", "주식, ETF, 배당, 현금 방어 성향을 16가지 MoneyMBTI 캐릭터로 확인합니다.", "./investment-test.html?start=1", "바로 시작"),
    ("cart", "소비", "소비 심리 테스트", "나는 왜 또 샀을까?", "10문항 · 약 2분", "충동구매형, 절약강박형, 보복소비형, 죄책감소비형 중 나의 소비 패턴을 봅니다.", "./consume-test.html?start=1", "바로 시작"),
    ("mind", "불안", "돈 불안 테스트", "나는 돈 걱정을 얼마나 할까?", "8문항 · 약 1분", "통장 잔액 공포, 비교 불안, 돈 회피형 중 나의 돈 걱정 유형을 확인합니다.", "./money-anxiety-test.html?start=1", "바로 시작"),
    ("types", "해설", "주식 MBTI 16유형", "친구 결과도 비교해보기", "읽기형 콘텐츠", "분석 마비왕, 전재산 올인러, ETF 수면왕 등 16개 결과 유형을 한눈에 봅니다.", "./stock-mbti.html", "유형 보기"),
    ("note", "습관", "돈 습관 첫 점검", "어디서부터 봐야 할까?", "가이드 · 3분", "소비와 저축을 바꾸기 전에 먼저 확인해야 할 반복 행동과 기준을 정리했습니다.", "./money-habit-start.html", "글 읽기"),
    ("calendar", "월급", "월급날 7일 루틴", "돈이 빨리 사라진다면", "가이드 · 3분", "월급 직후 일주일 동안 결제일과 고정비를 먼저 정리하는 방법입니다.", "./payday-seven-day-routine.html", "글 읽기"),
]


def cards_html(limit=None):
    items = TEST_CARDS if limit is None else TEST_CARDS[:limit]
    return "\n".join(
        f'''          <a class="tm-test-card" href="{href}">
            <span class="tm-icon tm-icon-{icon}" aria-hidden="true"></span>
            <span class="tm-badge">{badge}</span>
            <strong>{title}</strong>
            <em>{subtitle}</em>
            <small>{meta}</small>
            <p>{desc}</p>
            <b>{cta}</b>
          </a>'''
        for icon, badge, title, subtitle, meta, desc, href, cta in items
    )


def home():
    return f'''<!doctype html>
<html lang="ko">
{head("나와 돈의 관계 심리테스트 | MoneyMBTI", "MoneyMBTI는 소비 습관, 투자 성향, 돈 불안처럼 일상에서 반복되는 돈 선택을 가볍게 점검하는 무료 심리테스트 모음입니다.", "https://moneymbti.com/")}
  <body>
{HEADER}
    <main id="main-content" class="tm-home">
      <section class="tm-hero">
        <div>
          <p class="eyebrow">Money Personality Test</p>
          <h1>돈 쓰는 습관부터 투자 성향까지, 테스트로 가볍게 확인해요</h1>
          <p>주식에 관심 없어도 괜찮습니다. 소비, 저축, 돈 걱정, 투자 반응처럼 누구나 한 번쯤 겪는 돈 선택을 짧은 테스트와 읽을거리로 정리했습니다.</p>
          <div class="tm-hero-actions">
            <a class="primary-link" href="./investment-test.html?start=1">대표 테스트 시작</a>
            <a class="secondary-link" href="./tests.html">전체 테스트 보기</a>
          </div>
        </div>
        <aside class="tm-hero-panel" aria-label="MoneyMBTI 이용 안내">
          <b>로그인 없이 바로 시작</b>
          <span>결과는 재미와 자기점검을 위한 참고 콘텐츠입니다.</span>
          <ul>
            <li>1분~3분 테스트</li>
            <li>공유하기 쉬운 결과</li>
            <li>결과별 관련 글 연결</li>
          </ul>
        </aside>
      </section>

      <section class="tm-category-strip" aria-label="콘텐츠 카테고리">
        <a href="./investment-test.html?start=1"><span class="tm-icon tm-icon-chart"></span><b>투자성향</b></a>
        <a href="./consume-test.html?start=1"><span class="tm-icon tm-icon-cart"></span><b>소비심리</b></a>
        <a href="./money-anxiety-test.html?start=1"><span class="tm-icon tm-icon-mind"></span><b>돈불안</b></a>
        <a href="./money-column.html"><span class="tm-icon tm-icon-note"></span><b>머니칼럼</b></a>
        <a href="./stock-mbti.html"><span class="tm-icon tm-icon-types"></span><b>16유형</b></a>
      </section>

      <section class="section tm-section">
        <div class="tm-section-head">
          <div>
            <p class="eyebrow">Popular Tests</p>
            <h2>지금 바로 해볼 수 있는 테스트</h2>
          </div>
          <a href="./tests.html">전체 보기</a>
        </div>
        <div class="tm-test-grid">
{cards_html()}
        </div>
      </section>

      <section class="section tm-section">
        <div class="tm-section-head">
          <div>
            <p class="eyebrow">Money Column</p>
            <h2>테스트 후 이어서 읽기 좋은 글</h2>
          </div>
          <a href="./money-column.html">머니칼럼 보기</a>
        </div>
        <div class="tm-link-list">
          <a href="./three-line-spending-record.html"><b>가계부를 오래 못 쓰는 사람을 위한 3줄 소비 기록법</b><span>복잡한 가계부 대신 날짜, 지출 이유, 다음 선택만 남기는 방식입니다.</span></a>
          <a href="./subscription-cleanup-checklist.html"><b>구독료 정리 체크리스트</b><span>작게 새는 돈을 찾기 위해 자동결제와 구독 서비스를 점검합니다.</span></a>
          <a href="./money-personality-test-use.html"><b>돈 성향 테스트 결과를 생활에 활용하는 법</b><span>테스트 결과를 재미에서 끝내지 않고 생활 루틴으로 연결합니다.</span></a>
        </div>
      </section>

      <section class="section tm-trust">
        <p class="eyebrow">About MoneyMBTI</p>
        <h2>가볍게 시작하지만, 읽고 나면 기준이 남도록</h2>
        <p>MoneyMBTI는 특정 종목, 금융상품, 카드 상품을 추천하지 않습니다. 대신 돈을 대하는 습관과 선택 패턴을 스스로 돌아볼 수 있도록 테스트와 생활형 글을 함께 제공합니다.</p>
      </section>
    </main>
{FOOTER}
  </body>
</html>
'''


def tests():
    return f'''<!doctype html>
<html lang="ko">
{head("무료 돈 성향 테스트 모음 | MoneyMBTI", "투자 성향, 소비 심리, 돈 불안, 돈 습관을 로그인 없이 바로 확인할 수 있는 MoneyMBTI 테스트 모음입니다.", "https://moneymbti.com/tests.html")}
  <body>
{HEADER}
    <main class="tm-home">
      <section class="tm-hero tm-hero-compact">
        <div>
          <p class="eyebrow">Test Collection</p>
          <h1>무료 돈 성향 테스트 모음</h1>
          <p>테스트는 짧게, 결과는 기억에 남게. 내가 돈을 쓰고 모으고 불안해하는 방식을 가볍게 확인해보세요.</p>
        </div>
      </section>

      <section class="tm-category-strip" aria-label="테스트 카테고리">
        <a href="#available"><span class="tm-icon tm-icon-chart"></span><b>바로 가능</b></a>
        <a href="#guide"><span class="tm-icon tm-icon-note"></span><b>읽기형</b></a>
        <a href="./money-column.html"><span class="tm-icon tm-icon-calendar"></span><b>칼럼</b></a>
      </section>

      <section class="section tm-section" id="available">
        <div class="tm-section-head">
          <div>
            <p class="eyebrow">Available</p>
            <h2>바로 시작할 수 있는 테스트</h2>
          </div>
        </div>
        <div class="tm-test-grid">
{cards_html(4)}
        </div>
      </section>

      <section class="section tm-section" id="guide">
        <div class="tm-section-head">
          <div>
            <p class="eyebrow">Guide</p>
            <h2>테스트와 함께 읽을 글</h2>
          </div>
        </div>
        <div class="tm-link-list">
          <a href="./money-habit-start.html"><b>돈 습관은 어디서부터 점검해야 할까?</b><span>돈을 잘 모으는 방법보다 먼저 봐야 할 반복 행동을 정리합니다.</span></a>
          <a href="./saving-burnout-signs.html"><b>절약하다 지치는 사람에게 필요한 소비 허용선</b><span>아끼는 것만으로 오래가기 어려울 때 필요한 기준입니다.</span></a>
          <a href="./monthly-money-self-check.html"><b>한 달에 한 번 하는 돈 성향 셀프체크</b><span>수입과 지출뿐 아니라 감정과 선택 패턴까지 함께 돌아봅니다.</span></a>
        </div>
      </section>
    </main>
{FOOTER}
  </body>
</html>
'''


CSS = r'''

/* Testmoa-inspired readable portal refresh */
.tm-home {
  max-width: 1080px;
}

.tm-hero {
  margin: 16px 0 22px;
  padding: 34px 30px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 24px;
  align-items: end;
  border: 1px solid var(--line);
  border-radius: 16px;
  background:
    radial-gradient(circle at 88% 12%, rgba(249, 203, 66, 0.36), transparent 26%),
    linear-gradient(135deg, #ffffff 0%, #f8fbff 58%, #fff8df 100%);
}

.tm-hero-compact {
  grid-template-columns: 1fr;
}

.tm-hero h1 {
  max-width: 760px;
  margin: 8px 0 12px;
  color: var(--ink);
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.14;
  letter-spacing: 0;
  word-break: keep-all;
}

.tm-hero p:not(.eyebrow) {
  max-width: 760px;
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
}

.tm-hero-actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tm-hero-panel {
  padding: 18px;
  border: 1px solid #dfe6ef;
  border-radius: 14px;
  background: rgba(255,255,255,0.82);
}

.tm-hero-panel b {
  display: block;
  margin-bottom: 6px;
  color: var(--ink);
  font-size: 16px;
}

.tm-hero-panel span,
.tm-hero-panel li {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.tm-hero-panel ul {
  margin: 12px 0 0;
  padding-left: 18px;
}

.tm-category-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 34px;
}

.tm-category-strip a {
  min-height: 92px;
  padding: 14px 8px;
  display: grid;
  place-items: center;
  gap: 8px;
  text-align: center;
  text-decoration: none;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
}

.tm-category-strip b {
  font-size: 13px;
}

.tm-icon {
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f1fb;
  color: var(--color-primary);
  font-weight: 900;
}

.tm-icon::before {
  font-size: 22px;
  line-height: 1;
}

.tm-icon-chart::before { content: "↗"; }
.tm-icon-cart::before { content: "₩"; }
.tm-icon-mind::before { content: "?"; }
.tm-icon-types::before { content: "16"; font-size: 15px; }
.tm-icon-note::before { content: "✓"; }
.tm-icon-calendar::before { content: "D"; font-size: 17px; }

.tm-section {
  margin-top: 36px;
}

.tm-section-head {
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
}

.tm-section-head h2 {
  margin: 6px 0 0;
  color: var(--ink);
  font-size: clamp(26px, 3.2vw, 40px);
  line-height: 1.18;
}

.tm-section-head > a {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
}

.tm-test-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.tm-test-card {
  min-height: 238px;
  padding: 18px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  grid-template-rows: auto auto auto auto 1fr auto;
  gap: 7px 12px;
  align-items: start;
  color: inherit;
  text-decoration: none;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
  transition: transform .15s ease, border-color .15s ease, background .15s ease;
}

.tm-test-card:hover {
  transform: translateY(-2px);
  border-color: rgba(29, 95, 165, 0.45);
  background: #f8fbff;
}

.tm-test-card .tm-icon {
  grid-row: 1 / 4;
}

.tm-badge {
  width: fit-content;
  padding: 3px 9px;
  border-radius: 999px;
  background: #eef4fb;
  color: var(--color-primary);
  font-size: 11px;
  font-weight: 900;
}

.tm-test-card strong {
  color: var(--ink);
  font-size: 19px;
  line-height: 1.25;
}

.tm-test-card em {
  color: #334155;
  font-style: normal;
  font-size: 13px;
  font-weight: 800;
}

.tm-test-card small,
.tm-test-card p {
  grid-column: 1 / -1;
  color: var(--muted);
}

.tm-test-card small {
  margin-top: 8px;
  font-weight: 800;
}

.tm-test-card p {
  margin: 0;
  line-height: 1.65;
}

.tm-test-card b {
  grid-column: 1 / -1;
  width: fit-content;
  color: var(--color-primary);
  font-size: 14px;
  border-bottom: 2px solid currentColor;
}

.tm-link-list {
  display: grid;
  border-top: 1px solid var(--line);
}

.tm-link-list a {
  min-height: 92px;
  padding: 20px 0;
  display: grid;
  grid-template-columns: minmax(240px, .46fr) minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid var(--line);
}

.tm-link-list b {
  color: var(--ink);
  font-size: clamp(20px, 2.6vw, 28px);
  line-height: 1.28;
}

.tm-link-list span {
  color: var(--muted);
  line-height: 1.7;
}

.tm-link-list a::after {
  content: "글 읽기 →";
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 900;
}

.tm-trust {
  max-width: 820px;
}

.tm-trust h2 {
  margin: 8px 0 12px;
  color: var(--ink);
  font-size: clamp(28px, 3.4vw, 42px);
}

.tm-trust p:not(.eyebrow) {
  color: var(--muted);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .tm-hero {
    grid-template-columns: 1fr;
  }
  .tm-test-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .tm-hero {
    padding: 28px 20px;
    border-radius: 14px;
  }
  .tm-hero h1 {
    font-size: 31px;
  }
  .tm-category-strip {
    grid-template-columns: repeat(5, minmax(74px, 1fr));
    overflow-x: auto;
    padding-bottom: 4px;
  }
  .tm-test-grid {
    grid-template-columns: 1fr;
  }
  .tm-test-card {
    min-height: auto;
  }
  .tm-section-head {
    align-items: start;
    flex-direction: column;
  }
  .tm-link-list a {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
'''


def append_css_once():
    path = Path("styles.css")
    css = path.read_text(encoding="utf-8")
    marker = "/* Testmoa-inspired readable portal refresh */"
    if marker not in css:
        path.write_text(css.rstrip() + "\n" + CSS + "\n", encoding="utf-8")


def main():
    Path("index.html").write_text(home(), encoding="utf-8")
    Path("tests.html").write_text(tests(), encoding="utf-8")
    append_css_once()
    print("home and tests redesigned")


if __name__ == "__main__":
    main()
