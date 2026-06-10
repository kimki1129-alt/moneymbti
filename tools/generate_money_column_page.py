from pathlib import Path

POSTS = [
    ("money-habit-start", "돈 습관은 어디서부터 점검해야 할까?", "돈을 잘 모으는 방법보다 먼저 봐야 할 것은 내 반복 행동입니다."),
    ("three-line-spending-record", "가계부를 오래 못 쓰는 사람을 위한 3줄 소비 기록법", "복잡한 가계부 대신 날짜, 지출 이유, 다음 선택만 남기는 방식입니다."),
    ("impulse-buying-24-hour-rule", "충동구매를 줄이는 24시간 장바구니 규칙", "바로 사지 않고 하루 뒤 다시 보는 것만으로도 소비 판단이 달라집니다."),
    ("payday-seven-day-routine", "월급날 돈이 빨리 사라지는 사람을 위한 7일 루틴", "월급 직후 일주일 동안 결제일과 고정비를 먼저 정리하는 방법입니다."),
    ("subscription-cleanup-checklist", "구독료 정리 체크리스트", "작게 새는 돈을 찾기 위해 구독 서비스와 자동결제를 점검합니다."),
    ("money-anxiety-night-routine", "밤에 돈 걱정이 많아질 때 해볼 수 있는 정리 루틴", "막연한 불안을 숫자와 행동으로 나누어 보는 방법입니다."),
    ("comparison-spending-sns", "SNS를 본 뒤 소비가 늘어나는 이유와 비교 소비 줄이는 법", "타인의 소비가 내 기준이 되지 않도록 소비 트리거를 분리합니다."),
    ("emergency-fund-first-step", "비상금은 얼마부터 시작해야 할까?", "큰 목표보다 작은 안전 기준선을 먼저 만드는 입문형 비상금 가이드입니다."),
    ("saving-burnout-signs", "절약하다 지치는 사람에게 필요한 소비 허용선", "아끼는 것만으로는 오래가기 어렵기 때문에 지속 가능한 기준을 세웁니다."),
    ("simple-budget-categories", "예산을 복잡하게 나누지 않아도 되는 4칸 생활비 분류법", "생활비를 고정비, 변동비, 미래비, 회복비로 단순하게 나눕니다."),
    ("card-statement-reading", "카드 명세서에서 먼저 봐야 할 5가지 항목", "이번 달 카드 사용 흐름을 읽기 위한 기본 점검 순서입니다."),
    ("cash-flow-calendar", "돈 흐름 달력 만들기", "월급일과 결제일을 한눈에 보며 돈이 빠지는 시점을 이해합니다."),
    ("family-money-conversation", "가족과 돈 이야기할 때 감정싸움을 줄이는 질문법", "판단보다 기준을 맞추는 대화 방식으로 돈 이야기를 시작합니다."),
    ("beginner-household-ledger", "초보자를 위한 가계부 시작법", "앱을 고르기 전에 기록 목적과 확인 주기를 먼저 정합니다."),
    ("small-expense-leak", "소액 지출이 커지는 패턴을 찾는 방법", "작은 소비가 반복될 때 생기는 돈 흐름의 빈틈을 확인합니다."),
    ("mindful-shopping-list", "후회 없는 구매를 위한 사기 전 질문 리스트", "구매 직전 필요한 질문을 정해 불필요한 소비를 줄입니다."),
    ("realistic-no-spend-day", "무지출 데이를 현실적으로 하는 법", "참기 대회가 아니라 소비 의도를 확인하는 날로 설계합니다."),
    ("monthly-money-self-check", "한 달에 한 번 하는 돈 성향 셀프체크 방법", "수입과 지출뿐 아니라 감정과 선택 패턴까지 함께 돌아봅니다."),
    ("money-personality-test-use", "돈 성향 테스트 결과를 생활에 활용하는 법", "테스트 결과를 재미에서 끝내지 않고 생활 루틴으로 연결합니다."),
    ("beginner-saving-routine", "저축을 처음 시작하는 사람을 위한 작고 오래가는 루틴", "큰 결심보다 반복 가능한 작은 금액과 날짜를 먼저 정합니다."),
]

featured = "\n".join(
    f'''          <a class="content-card" href="./articles/{slug}.html">
            <p class="card-meta">돈 습관 가이드</p>
            <h3>{title}</h3>
            <p>{desc}</p>
          </a>'''
    for slug, title, desc in POSTS[:6]
)

compact = "\n".join(
    f'''          <a href="./articles/{slug}.html">
            <b>{title}</b>
            <span>{desc}</span>
          </a>'''
    for slug, title, desc in POSTS[6:]
)

html = f'''<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>머니칼럼 - 돈 습관과 소비 성향 가이드 | MoneyMBTI</title>
    <meta name="description" content="MoneyMBTI 머니칼럼은 소비 습관, 돈 불안, 월급 관리, 저축 루틴처럼 일상에서 바로 점검할 수 있는 돈 성향 콘텐츠를 정리합니다." />
    <link rel="canonical" href="https://moneymbti.com/money-column.html" />
    <meta property="og:url" content="https://moneymbti.com/money-column.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="머니칼럼 - 돈 습관과 소비 성향 가이드 | MoneyMBTI" />
    <meta property="og:description" content="소비 습관, 돈 불안, 월급 관리, 저축 루틴을 초보자도 읽기 쉽게 정리한 MoneyMBTI 머니칼럼입니다." />
    <meta property="og:image" content="https://moneymbti.com/images/og/default.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://moneymbti.com/images/og/default.png" />
    <meta name="naver-site-verification" content="NAVER_SITE_VERIFICATION_CODE" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="./index.html">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>MoneyMBTI</span>
      </a>
      <nav class="main-nav" aria-label="주요 메뉴">
        <a href="./investment-test.html?start=1">테스트 시작</a>
        <a href="./money-column.html">머니칼럼</a>
        <a href="./stock-mbti.html">16유형</a>
        <a href="./about.html">소개</a>
      </nav>
    </header>

    <main>
      <section class="page-hero">
        <p class="eyebrow">Money Column</p>
        <h1>돈 습관을 이해하는 머니칼럼</h1>
        <p>MoneyMBTI는 투자 추천보다 먼저, 일상에서 반복되는 소비와 저축의 이유를 살펴봅니다. 테스트 결과를 읽고 끝내지 않도록 실제 생활에 적용할 수 있는 점검 글을 함께 제공합니다.</p>
      </section>

      <section class="section content-grid-section">
        <div class="section-heading">
          <p class="eyebrow">Featured Guides</p>
          <h2>처음 읽기 좋은 돈 습관 글</h2>
          <p>가계부를 오래 못 쓰는 사람, 월급날마다 돈이 빨리 사라지는 사람, 소비 후 후회가 남는 사람을 위한 입문형 가이드입니다.</p>
        </div>
        <div class="content-grid">
{featured}
        </div>
      </section>

      <section class="section editorial-section">
        <div class="section-heading">
          <p class="eyebrow">All Guides</p>
          <h2>돈 성향을 더 깊게 보는 글</h2>
          <p>비교 소비, 돈 불안, 비상금, 카드 명세서, 가족 대화처럼 실제 생활에서 자주 부딪히는 주제를 정리했습니다.</p>
        </div>
        <div class="compact-topic-list">
{compact}
        </div>
      </section>

      <section class="section readable-section">
        <p class="eyebrow">Editorial Standard</p>
        <h2>MoneyMBTI의 글 작성 기준</h2>
        <p>이곳의 콘텐츠는 특정 금융상품이나 종목을 추천하지 않습니다. 대신 초보자가 스스로 소비 패턴과 돈에 대한 감정을 점검할 수 있도록 질문, 체크리스트, 실천 루틴 중심으로 작성합니다. 글은 운영 과정에서 주기적으로 보완될 수 있으며, 개인의 상황에 따라 필요한 기준은 달라질 수 있습니다.</p>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>MoneyMBTI</strong>
        <p>나와 돈의 관계를 가볍게 돌아보는 돈 성향 콘텐츠.</p>
      </div>
      <nav aria-label="하단 메뉴">
        <a href="./privacy.html">개인정보처리방침</a>
        <a href="./terms.html">이용약관</a>
        <a href="./disclaimer.html">면책고지</a>
        <a href="./contact.html">문의</a>
      </nav>
    </footer>
  </body>
</html>
'''

Path("money-column.html").write_text(html, encoding="utf-8")
print("money-column.html regenerated")
