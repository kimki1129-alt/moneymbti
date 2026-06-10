const recommendations = {
  INTJ: {
    title: "장기 전략가형",
    summary: "명확한 투자 논리와 장기 계획을 선호합니다. 성장 산업 ETF, 우량 성장주, 분할 매수 전략과 잘 맞습니다.",
    tags: ["장기 투자", "성장주", "리밸런싱"],
    sectors: "반도체, 클라우드, AI 인프라",
    caution: "확신이 강해질수록 손절 기준을 늦추기 쉽습니다.",
    link: "./stock-mbti.html#intj",
  },
  INTP: {
    title: "분석 실험가형",
    summary: "숫자와 모델을 파고드는 성향이 강합니다. 팩터 투자, 퀀트 스크리닝, ETF 비교 분석에 흥미를 느낍니다.",
    tags: ["퀀트", "팩터", "데이터"],
    sectors: "소프트웨어, 핀테크, 팩터 ETF",
    caution: "분석이 길어져 실행이 늦어질 수 있습니다.",
    link: "./stock-mbti.html#intp",
  },
  ENTJ: {
    title: "목표 지휘관형",
    summary: "성과 목표와 실행력이 강합니다. 성장주와 섹터 로테이션을 다루되 포지션 크기 관리가 중요합니다.",
    tags: ["성장주", "목표 관리", "섹터"],
    sectors: "플랫폼, 로보틱스, 글로벌 리더 기업",
    caution: "성과를 서두르면 집중 투자가 과해질 수 있습니다.",
    link: "./stock-mbti.html#entj",
  },
  ENTP: {
    title: "기회 포착형",
    summary: "새로운 시장 흐름을 빨리 읽습니다. 혁신 테마와 이벤트성 아이디어에 강하지만 원칙이 필요합니다.",
    tags: ["테마", "이벤트", "유연성"],
    sectors: "바이오, 신재생, 신규 상장주",
    caution: "재미있는 아이디어가 좋은 투자가 되는 것은 아닙니다.",
    link: "./stock-mbti.html#entp",
  },
  INFJ: {
    title: "가치 신념형",
    summary: "기업의 방향성과 의미를 중요하게 봅니다. ESG, 헬스케어, 배당 성장주처럼 스토리가 분명한 투자와 잘 맞습니다.",
    tags: ["가치", "ESG", "장기 관찰"],
    sectors: "헬스케어, 친환경, 필수소비재",
    caution: "좋아하는 기업일수록 가격 부담을 따로 점검해야 합니다.",
    link: "./stock-mbti.html#infj",
  },
  INFP: {
    title: "소신 탐색가형",
    summary: "가치관에 맞는 기업을 오래 지켜보는 편입니다. 소액 분산과 적립식 투자가 부담을 줄여줍니다.",
    tags: ["적립식", "분산", "브랜드"],
    sectors: "콘텐츠, 교육, 친환경",
    caution: "손실 종목을 응원하는 마음으로 오래 보유하지 않도록 주의해야 합니다.",
    link: "./stock-mbti.html#infp",
  },
  ENFJ: {
    title: "트렌드 큐레이터형",
    summary: "사람과 시장 분위기를 잘 읽습니다. 소비 트렌드와 브랜드 기업을 관찰하는 데 강점이 있습니다.",
    tags: ["소비 트렌드", "브랜드", "분산"],
    sectors: "리테일, 엔터테인먼트, 뷰티",
    caution: "좋은 이야기와 좋은 가격은 다를 수 있습니다.",
    link: "./stock-mbti.html#enfj",
  },
  ENFP: {
    title: "아이디어 확장형",
    summary: "새로운 가능성을 잘 발견합니다. 혁신 산업을 탐색하되 ETF 중심 자산으로 균형을 잡는 방식이 좋습니다.",
    tags: ["혁신", "ETF 코어", "소액 위성"],
    sectors: "게임, 미디어, 전기차, 혁신 ETF",
    caution: "새로운 후보가 생길 때마다 기존 보유 이유를 점검해야 합니다.",
    link: "./stock-mbti.html#enfp",
  },
  ISTJ: {
    title: "원칙 수호형",
    summary: "검증된 기준을 꾸준히 지키는 성향입니다. 인덱스 ETF, 배당주, 정기 리밸런싱과 잘 맞습니다.",
    tags: ["우량주", "배당", "정기 점검"],
    sectors: "금융, 통신, S&P 500 ETF",
    caution: "너무 보수적이면 성장 기회를 오래 놓칠 수 있습니다.",
    link: "./stock-mbti.html#istj",
  },
  ISFJ: {
    title: "안정 수익형",
    summary: "안정과 꾸준함을 선호합니다. 배당 성장, 채권 혼합, 저변동성 ETF가 심리적 부담을 줄여줍니다.",
    tags: ["저변동", "배당", "현금 흐름"],
    sectors: "유틸리티, 헬스케어, 배당 ETF",
    caution: "안정적이라는 말만 믿고 가격 부담을 무시하지 않아야 합니다.",
    link: "./stock-mbti.html#isfj",
  },
  ESTJ: {
    title: "성과 관리형",
    summary: "계획과 관리에 강합니다. 목표 수익률, 섹터 비중, 월간 성과표를 활용하기 좋습니다.",
    tags: ["목표 관리", "섹터", "우량주"],
    sectors: "산업재, 금융, 대형 가치주",
    caution: "단기 성과 압박이 거래 횟수를 늘릴 수 있습니다.",
    link: "./stock-mbti.html#estj",
  },
  ESFJ: {
    title: "생활 밀착형",
    summary: "실생활에서 체감되는 기업을 잘 발견합니다. 소비재, 브랜드, 배당 소비재를 중심으로 시작하기 좋습니다.",
    tags: ["생활 소비", "브랜드", "분산"],
    sectors: "음식료, 뷰티, 리테일",
    caution: "친숙한 기업이라고 반드시 안전한 투자는 아닙니다.",
    link: "./stock-mbti.html#esfj",
  },
  ISTP: {
    title: "실전 기술자형",
    summary: "상황 판단이 빠르고 현실적입니다. 기술적 분석이나 스윙 전략을 쓸 때 손실 한도를 먼저 정해야 합니다.",
    tags: ["스윙", "기술적 분석", "손절"],
    sectors: "원자재, 자동차, 산업 ETF",
    caution: "잘 맞춘 경험이 과한 레버리지로 이어지지 않게 해야 합니다.",
    link: "./stock-mbti.html#istp",
  },
  ISFP: {
    title: "감각 밸런스형",
    summary: "취향과 감각이 살아 있어 브랜드와 콘텐츠 기업을 잘 봅니다. 안정 자산과 함께 두면 균형이 좋아집니다.",
    tags: ["브랜드", "콘텐츠", "균형"],
    sectors: "패션, 콘텐츠, 여행, 저변동 ETF",
    caution: "분위기에 끌린 매수는 기록 없이 반복되기 쉽습니다.",
    link: "./stock-mbti.html#isfp",
  },
  ESTP: {
    title: "민첩한 트레이더형",
    summary: "빠른 실행과 승부 감각이 있습니다. 단기 모멘텀에 강하지만 규칙 없는 매매는 가장 위험합니다.",
    tags: ["모멘텀", "단기", "리스크 컷"],
    sectors: "반도체 장비, 에너지, 고거래대금 종목",
    caution: "손실 복구를 위한 즉흥 매매를 피해야 합니다.",
    link: "./stock-mbti.html#estp",
  },
  ESFP: {
    title: "트렌드 라이더형",
    summary: "대중의 관심 변화를 빨리 느낍니다. 엔터, 소비, 여행 같은 체감형 산업을 재미있게 탐색합니다.",
    tags: ["트렌드", "소비", "소액 위성"],
    sectors: "엔터, 여행, 스포츠, 소비 플랫폼",
    caution: "인기와 주가 상승 여력이 항상 같은 방향은 아닙니다.",
    link: "./stock-mbti.html#esfp",
  },
};

const typeGrid = document.querySelector("#typeGrid");
const resultPanel = document.querySelector("#resultPanel");

Object.keys(recommendations).forEach((type) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "type-button";
  button.textContent = type;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => selectType(type));
  typeGrid.appendChild(button);
});

function selectType(type) {
  const data = recommendations[type];
  document.querySelectorAll(".type-button").forEach((button) => {
    const active = button.textContent === type;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  resultPanel.innerHTML = `
    <p class="type-kicker">${type}</p>
    <h3>${data.title}</h3>
    <p>${data.summary}</p>
    <div class="result-tags">
      ${data.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="result-detail">
      <div><b>관심 영역</b><p>${data.sectors}</p></div>
      <div><b>주의점</b><p>${data.caution}</p></div>
      <div><b>자세히 보기</b><p><a href="${data.link}">${type} 투자 성향 글 읽기</a></p></div>
    </div>
  `;
}
