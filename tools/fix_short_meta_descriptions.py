from pathlib import Path
import re

DESCRIPTIONS = {
    "card-benefit-vs-tax-deduction.html": "월별 카드 혜택과 연말정산 소득공제 중 어떤 기준을 먼저 봐야 할지, 소비 목적과 결제 습관에 맞춰 초보자도 이해하기 쉽게 정리합니다.",
    "couple-net-worth-sheet.html": "부부나 함께 사는 사람이 예금, 투자금, 보증금, 대출을 한 표로 정리해 순자산을 확인하는 방법과 대화 기준을 설명합니다.",
    "credit-card-habit-test.html": "신용카드 혜택보다 먼저 봐야 할 결제 습관, 자동결제, 실적 채우기 함정을 생활비 관리 관점에서 차근차근 정리했습니다.",
    "monthly-card-benefit-routine.html": "월말 전에 카드 실적 부족분과 다음 결제 계획을 확인하는 10분 루틴을 실제 생활비 흐름에 맞춰 쉽게 정리합니다.",
}

for filename, desc in DESCRIPTIONS.items():
    path = Path("articles") / filename
    html = path.read_text(encoding="utf-8")
    html = re.sub(
        r'<meta\s+name=["\']description["\']\s+content=["\'][^"\']*["\']\s*/?>',
        f'<meta name="description" content="{desc}" />',
        html,
        count=1,
        flags=re.I,
    )
    html = re.sub(
        r'<meta\s+property=["\']og:description["\']\s+content=["\'][^"\']*["\']\s*/?>',
        f'<meta property="og:description" content="{desc}" />',
        html,
        count=1,
        flags=re.I,
    )
    path.write_text(html, encoding="utf-8")

print("short meta descriptions fixed")
