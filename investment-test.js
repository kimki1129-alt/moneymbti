const questions = [
  {
    text: "주식이 갑자기 -10% 찍었다. 내 첫 반응은?",
    answers: [
      { label: "차트부터 켠다. 이유는 모르겠고 일단 선을 그어본다.", scores: { S: 1, T: 1, P: 1 } },
      { label: "내가 왜 샀는지 다시 읽는다. 회사의 미래를 믿어본다.", scores: { N: 1, F: 1, J: 1 } },
    ],
  },
  {
    text: "친구가 요즘 핫한 종목을 알려줬다.",
    answers: [
      { label: "일단 검색한다. 커뮤니티 반응까지 훑어본다.", scores: { E: 1, S: 1, P: 1 } },
      { label: "내 기준에 안 맞으면 조용히 관심종목에서 삭제한다.", scores: { I: 1, T: 1, J: 1 } },
    ],
  },
  {
    text: "투자 앱을 열었는데 계좌가 빨갛다.",
    answers: [
      { label: "오늘은 내가 시장을 이겼다. 기분이 바로 좋아진다.", scores: { E: 1, F: 1, P: 1 } },
      { label: "왜 올랐는지부터 확인한다. 이유 없는 상승은 불안하다.", scores: { I: 1, T: 1, J: 1 } },
    ],
  },
  {
    text: "새로운 투자 아이디어가 떠올랐다.",
    answers: [
      { label: "작게라도 바로 해본다. 몸으로 배워야 기억난다.", scores: { E: 1, S: 1, P: 1 } },
      { label: "시나리오를 짠다. 매수보다 매도 계획이 먼저다.", scores: { I: 1, N: 1, J: 1 } },
    ],
  },
  {
    text: "내가 더 편한 투자 방식은?",
    answers: [
      { label: "배당, ETF, 우량주처럼 마음이 편한 쪽.", scores: { S: 1, F: 1, J: 1 } },
      { label: "성장주, 테마, 새로운 산업처럼 상상력이 붙는 쪽.", scores: { N: 1, T: 1, P: 1 } },
    ],
  },
  {
    text: "종목 토론방이나 유튜브 댓글을 보면?",
    answers: [
      { label: "사람들 반응이 재밌다. 분위기도 투자 힌트라고 본다.", scores: { E: 1, F: 1, P: 1 } },
      { label: "시끄럽다. 숫자와 공시가 더 믿음직하다.", scores: { I: 1, T: 1, J: 1 } },
    ],
  },
  {
    text: "내 매매 스타일에 가까운 것은?",
    answers: [
      { label: "기회가 오면 빠르게 움직인다. 늦게 타는 게 더 싫다.", scores: { E: 1, S: 1, P: 1 } },
      { label: "내 원칙에 들어올 때까지 기다린다. 놓치면 인연이 아니다.", scores: { I: 1, N: 1, J: 1 } },
    ],
  },
  {
    text: "내 계좌를 한 문장으로 말하면?",
    answers: [
      { label: "감정 그래프다. 오르면 신나고 내리면 갑자기 철학자가 된다.", scores: { F: 1, P: 1 } },
      { label: "프로젝트 파일이다. 비중, 목표, 이유가 있어야 마음이 놓인다.", scores: { T: 1, J: 1 } },
    ],
  },
  {
    text: "누가 내 종목을 별로라고 하면?",
    answers: [
      { label: "괜히 설명하고 싶어진다. 이 종목의 서사를 알아야 한다.", scores: { E: 1, N: 1, F: 1 } },
      { label: "그러든가 말든가. 내 기준표에는 아직 합격이다.", scores: { I: 1, S: 1, T: 1 } },
    ],
  },
  {
    text: "월급날 투자 루틴은?",
    answers: [
      { label: "정해둔 비율대로 넣는다. 루틴이 나를 살린다.", scores: { S: 1, T: 1, J: 1 } },
      { label: "그달 꽂히는 곳에 넣는다. 느낌 좋은 쪽이 있다.", scores: { N: 1, F: 1, P: 1 } },
    ],
  },
  {
    text: "가장 피하고 싶은 상황은?",
    answers: [
      { label: "남들은 다 벌었다는데 나만 현금 들고 있는 상황.", scores: { E: 1, N: 1, P: 1 } },
      { label: "기준 없이 들어갔다가 왜 샀는지도 모르는 상황.", scores: { I: 1, S: 1, J: 1 } },
    ],
  },
  {
    text: "내가 듣고 싶은 칭찬은?",
    answers: [
      { label: "와, 너 진짜 실행 빠르다. 기회 잡는 감이 있네.", scores: { E: 1, P: 1 } },
      { label: "와, 너 진짜 흔들리지 않는다. 기준이 단단하네.", scores: { I: 1, J: 1 } },
    ],
  },
];

const results = {
  ISTP: {
    type: "ISTP",
    title: "RSI 교신자형",
    nickname: "지표가 말을 걸어야 움직이는 차트 원리주의자",
    punchline: "뉴스는 노이즈, 지표가 진리입니다.",
    vibe: "조용히 보고 있다가 갑자기 매수 버튼을 누르는 타입입니다. 진입도 빠르고 탈출도 빠른데, 가끔 너무 빨라서 수익까지 같이 놓고 나옵니다.",
    traits: ["차트 켜면 말수가 줄어듦", "손절은 빠른데 후회도 빠름", "눌림목이라는 말을 좋아함"],
    goodFit: "스윙, 분할매수, 손절가가 있는 단기 전략",
    caution: "감으로 들어가도 기록은 남겨야 합니다. 닌자도 매매일지는 씁니다.",
    visual: "차트 칼을 든 작은 닌자 캐릭터",
    color: "green",
  },
  INTP: {
    type: "INTP",
    title: "분석 마비왕",
    nickname: "백테스트는 우상향, 매수 버튼은 고장난 엑셀 거지",
    punchline: "이번 생은 백테스트 안에서 부자입니다.",
    vibe: "투자보다 전략 검증이 더 재밌는 타입입니다. 조건식, 백테스트, 시뮬레이션은 완벽한데 현실 계좌 앞에서는 갑자기 철학자가 됩니다.",
    traits: ["전략 이름 짓는 데 진심", "실행 전 검증을 또 검증", "관심종목이 논문 목차처럼 김"],
    goodFit: "시스템 트레이딩, ETF 조합, 규칙 기반 리밸런싱",
    caution: "완벽한 전략을 기다리다 좋은 기회가 지나갈 수 있습니다.",
    visual: "그래프와 노트북에 둘러싸인 실험실 캐릭터",
    color: "blue",
  },
  ESTP: {
    type: "ESTP",
    title: "전재산 올인러",
    nickname: "몰빵 아니면 폭망이라는 인생 한 방파",
    punchline: "모 아니면 도인데, 시장에는 도가 자주 나옵니다.",
    vibe: "이슈, 속도, 분위기에 강합니다. 시장이 뜨거워질 때 가장 살아나는 타입이지만, 계획 없이 들어가면 나오는 문이 갑자기 작아집니다.",
    traits: ["뉴스 알림에 반응속도 빠름", "급등주 앞에서 눈빛이 바뀜", "가끔 매도 버튼 위치를 잊음"],
    goodFit: "단기 매매, 뉴스 매매, 작게 치고 빠지는 전략",
    caution: "들어가기 전 손절가부터 정해야 단타가 생존 게임이 됩니다.",
    visual: "헬멧 쓰고 로켓에 탄 트레이더",
    color: "coral",
  },
  ENTP: {
    type: "ENTP",
    title: "전략 무한 리셋형",
    nickname: "어제 ETF, 오늘 선물, 내일은 또 갈아타는 마스터",
    punchline: "전략 변경 중입니다. 수익률은 잠시 기다려 주세요.",
    vibe: "ETF, 성장주, 선물, 옵션, 새 산업까지 뭐든 궁금합니다. 똑똑하고 빠르지만, 주력 전략이 자주 바뀌어 계좌가 실험실이 되기 쉽습니다.",
    traits: ["새로운 투자법 보면 못 지나침", "말하다가 본인이 설득됨", "전략이 많아서 전략이 없음"],
    goodFit: "소액 실험 계좌, 핵심 계좌와 위성 계좌 분리",
    caution: "아이디어마다 돈을 넣으면 계좌가 회의실이 됩니다.",
    visual: "차트 비커를 섞는 실험가 캐릭터",
    color: "gold",
  },
  ISFJ: {
    type: "ISFJ",
    title: "ETF 수면왕",
    nickname: "부자 되는 속도는 느려도 잠은 잘 자는 안정파",
    punchline: "수익보다 수면, 흔들림보다 평온입니다.",
    vibe: "안정감과 꾸준함을 먼저 생각합니다. 무리한 테마보다는 배당과 ETF처럼 오래 가져갈 수 있는 자산에 마음이 갑니다.",
    traits: ["위험한 종목 보면 몸이 먼저 거절", "배당 문자에 은근히 행복", "물려도 정 때문에 오래 봄"],
    goodFit: "배당 ETF, 우량주, 적립식 장기투자",
    caution: "따뜻한 마음과 손절 기준은 같이 있어야 합니다.",
    visual: "방패와 배당 봉투를 든 수호자 캐릭터",
    color: "green",
  },
  INFJ: {
    type: "INFJ",
    title: "손실 신봉자형",
    nickname: "마이너스가 깊어질수록 믿음이 더 단단해지는 희망 존버러",
    punchline: "이 종목은 언젠가 세상을 바꿀 겁니다.",
    vibe: "회사의 철학, 산업의 미래, 세상을 바꿀 가능성에 끌립니다. 오래 믿는 힘은 강하지만, 너무 깊이 믿으면 현실 신호를 못 볼 수 있습니다.",
    traits: ["종목에 서사가 있어야 함", "하락에도 의미를 찾음", "믿음이 깊어서 탈출이 늦음"],
    goodFit: "장기 성장주, 산업 ETF, 정기 점검표",
    caution: "신념은 좋지만 실적 발표일에는 현실도 같이 봐야 합니다.",
    visual: "빛나는 종목을 품은 현자 캐릭터",
    color: "blue",
  },
  ESFJ: {
    type: "ESFJ",
    title: "친구 신호 매수러",
    nickname: "친구 말이 매수 신호가 되고 결과는 같이 물리는 단체 위로형",
    punchline: "다 같이 물리면 외롭지는 않습니다.",
    vibe: "안정적인 선택을 좋아하고 주변 의견도 중요하게 봅니다. 큰 사고는 잘 피하지만, 너무 조심하면 수익 기회를 놓칠 수 있습니다.",
    traits: ["추천받아도 안전한지 먼저 봄", "가족에게 설명 가능한 종목 선호", "분위기에 살짝 흔들림"],
    goodFit: "우량주, 배당주, 가치투자, 분산 포트폴리오",
    caution: "친절한 조언이 항상 좋은 기준은 아닙니다.",
    visual: "우량주 쿠션을 안고 있는 캐릭터",
    color: "gold",
  },
  ENFJ: {
    type: "ENFJ",
    title: "주식 상담사형",
    nickname: "남 수익은 챙겨주는데 본인 계좌는 방치하는 친절한 부자",
    punchline: "너만 벌면 난 괜찮아. 진심입니다.",
    vibe: "토론과 공유를 좋아합니다. 남을 설득하는 힘이 있지만, 이야기를 많이 듣다 보면 내 기준보다 남의 확신에 끌릴 수 있습니다.",
    traits: ["종목 설명을 잘함", "단톡방에서 존재감 있음", "좋은 의견과 소음이 같이 들어옴"],
    goodFit: "투자 일지, 체크리스트, 독립적인 매수 기준",
    caution: "남을 설득하기 전에 내 계좌를 먼저 설득해야 합니다.",
    visual: "마이크 들고 차트 앞에 선 발표자",
    color: "coral",
  },
  ISTJ: {
    type: "ISTJ",
    title: "평생 존버러",
    nickname: "기업은 안 망한다는 굳은 믿음으로 버티는 매도 공포증",
    punchline: "존버가 승리한다. 언젠가는.",
    vibe: "숫자, 실적, 부채비율, 리포트를 꼼꼼히 봅니다. 기준이 단단한 대신, 새로운 트렌드가 숫자로 찍히기 전에는 늦게 반응할 수 있습니다.",
    traits: ["공시와 리포트가 마음의 안정제", "대형 우량주에 끌림", "묻지마 상승을 싫어함"],
    goodFit: "우량주, 가치주, 재무 기반 장기투자",
    caution: "숫자가 늦게 설명하는 성장도 있습니다. 작은 실험 칸을 남겨두세요.",
    visual: "재무제표를 든 판사 캐릭터",
    color: "green",
  },
  INTJ: {
    type: "INTJ",
    title: "시나리오 설계자형",
    nickname: "매수 전에 탈출 경로부터 그리는 냉철한 작전 설계자",
    punchline: "계좌 안에 작은 작전실이 있습니다.",
    vibe: "한 종목을 사도 상승, 하락, 횡보 시나리오를 세웁니다. 전략이 맞으면 크게 가지만, 틀렸을 때 고집이 손실을 키울 수 있습니다.",
    traits: ["남의 말에 잘 안 흔들림", "계획표가 있어야 편함", "틀렸다는 인정이 늦을 때 있음"],
    goodFit: "목표가와 손절가가 있는 집중 투자",
    caution: "전략가에게도 플랜 B를 버리는 버튼이 필요합니다.",
    visual: "체스판 위에 종목을 배치하는 캐릭터",
    color: "blue",
  },
  ESTJ: {
    type: "ESTJ",
    title: "매뉴얼 투자자형",
    nickname: "규칙은 완벽한데 시장이 매뉴얼을 안 읽는 원칙주의자",
    punchline: "규칙은 나, 시장은 딴세상입니다.",
    vibe: "목표, 규칙, 기록을 좋아합니다. 꾸준히 발전하는 힘이 있지만 시장이 갑자기 변하면 계획을 고집하다 유연성을 놓칠 수 있습니다.",
    traits: ["매매일지와 목표 수익률을 챙김", "정해진 시간에 확인", "성과가 안 나면 바로 스트레스"],
    goodFit: "정기 리밸런싱, 분산 전략, 월간 점검",
    caution: "시장은 보고서를 제출하지 않습니다. 예외 상황도 룰에 넣어두세요.",
    visual: "클립보드와 수익률 표를 든 팀장 캐릭터",
    color: "gold",
  },
  ENTJ: {
    type: "ENTJ",
    title: "주식판 꼰대 CEO",
    nickname: "시장에게 KPI를 들이미는 관리 지상주의자",
    punchline: "시장도 내 아래여야 하는데 말입니다.",
    vibe: "목표가 크고 실행력이 좋습니다. 자산 배분, 은퇴 설계, 성장 전략을 프로젝트처럼 밀고 가지만 성과가 안 나면 조급해질 수 있습니다.",
    traits: ["목표 금액이 명확함", "투자를 사업처럼 봄", "성과가 흔들리면 기분도 흔들림"],
    goodFit: "자산배분, 리밸런싱, 장기 목표 기반 투자",
    caution: "CEO도 시장 앞에서는 주주총회를 미뤄야 할 때가 있습니다.",
    visual: "투자 대시보드 앞의 CEO 캐릭터",
    color: "coral",
  },
  ISFP: {
    type: "ISFP",
    title: "감정 일기 투자자형",
    nickname: "계좌 그래프가 곧 오늘의 감정일기인 감정 매매러",
    punchline: "계좌는 숫자가 아니라 기분 그래프입니다.",
    vibe: "느낌과 분위기에 민감합니다. 잘 올라타면 재미있지만, 매수 이유가 흐릿하면 하락장에서 마음이 먼저 흔들립니다.",
    traits: ["종목 이름과 분위기에 은근 약함", "매도 타이밍이 어렵다", "손실 나면 앱을 조용히 닫음"],
    goodFit: "소액 분산, 목표 수익률, 자동 알림",
    caution: "느낌은 시작점이고 기준은 안전벨트입니다.",
    visual: "하락 차트를 꼭 잡고 울먹이는 캐릭터",
    color: "green",
  },
  INFP: {
    type: "INFP",
    title: "주식 짝사랑러 껄무새",
    nickname: "종목과 감정적 이별이 어려운 후회 수집가",
    punchline: "팔걸, 살걸, 기다릴걸. 오늘도 껄껄거립니다.",
    vibe: "종목에 정이 많고 스토리에 깊게 빠집니다. 하락해도 부활 서사를 믿지만, 가끔 그 믿음이 손절 버튼을 숨겨버립니다.",
    traits: ["종목과 감정적으로 가까워짐", "손절보다 희망회로가 빠름", "끝나고 나면 늘 껄껄거림"],
    goodFit: "ETF, 분할매수, 자동 손절가, 매매일지",
    caution: "사랑은 사람에게, 손절가는 종목에게.",
    visual: "앵무새 머리에 떨어지는 차트를 든 캐릭터",
    color: "blue",
  },
  ESFP: {
    type: "ESFP",
    title: "고점 짝사랑가",
    nickname: "SNS 추천을 매수 신호로 받아들이는 고점 전문 수집가",
    punchline: "고점도 사랑하면 추억이 됩니다.",
    vibe: "핫한 분위기와 빠른 이야기에 강하게 반응합니다. 시장의 에너지를 잘 타지만, 정보 필터가 약하면 남의 축제 뒤풀이에 들어갈 수 있습니다.",
    traits: ["SNS 종목에 눈이 반짝임", "재밌어 보이면 일단 봄", "고점에서도 분위기가 좋으면 설렘"],
    goodFit: "테마 소액 투자, 분산, 정보 출처 체크",
    caution: "조회수는 수익률이 아닙니다.",
    visual: "스마트폰과 불타는 차트를 든 캐릭터",
    color: "gold",
  },
  ENFP: {
    type: "ENFP",
    title: "운빨 한 방 중독자",
    nickname: "초보 행운 이후 짜릿한 한 방만 기다리는 불나방 투자자",
    punchline: "인생은 한 방이라 믿지만 계좌는 분할을 원합니다.",
    vibe: "숫자보다 이야기에 반응하고, 가능성이 보이면 크게 믿습니다. 에너지는 좋지만 한 번 꽂히면 비중 조절이 사라질 수 있습니다.",
    traits: ["새 산업에 설렘", "좋아하면 비중이 커짐", "수익도 손실도 드라마틱"],
    goodFit: "분할매수, 비중 제한, 핵심 ETF와 위성 투자",
    caution: "올인은 영화에서 멋있고, 계좌에서는 땀이 납니다.",
    visual: "불꽃 머리와 올인 버튼을 든 캐릭터",
    color: "coral",
  },
};

Object.assign(results, {
  ISTP: {
    type: "ISTP",
    title: "RSI 교신자형",
    nickname: "차트가 말 걸면 바로 듣는 타입",
    punchline: "지표가 시그널 보내는 순간 이미 포지션 잡고 있음. 근거는 차트 하나면 충분.",
    vibe: "기술적 지표를 직감처럼 읽는 투자자입니다. 감정 없는 척하지만 손실이 나면 다음 날 전략이 180도 바뀌고, 실행 속도는 빠른데 비중 관리가 가끔 실종됩니다.",
    traits: ["기술적 지표를 직감처럼 읽는 능력", "감정 없는 척하지만 손실 나면 다음 날 전략 180도 바뀜", "실행 속도는 빠른데 비중 관리가 가끔 실종", "이번엔 진짜 단타로만 다짐 반복"],
    goodFit: "분할 진입 + 기계적 손절가 설정. 매매 직후 이유 3줄 메모.",
    caution: "꽂힌 종목에서 손절 신호를 무시하는 경향이 있습니다. 원칙보다 촉을 믿다가 큰 물림으로 이어질 수 있습니다.",
    matches: {
      good: [{ type: "ESTJ", title: "매뉴얼 투자자형" }],
      bad: [{ type: "INFJ", title: "손실 신봉자형" }, { type: "INTP", title: "분석 마비왕" }],
    },
    contentLinks: ["차트 잘 보는 사람이 계좌를 망치는 이유", "단기 매매에서 감정을 분리하는 법", "RSI 다이버전스, 알면서도 놓치는 이유"],
    visual: "차트와 RSI 화면을 들고 있는 단기 트레이더",
    color: "green",
  },
  INTP: {
    type: "INTP",
    title: "분석 마비왕",
    nickname: "백테스트는 200%, 실전 계좌는 아직 준비 중",
    punchline: "변수 하나 더 확인하고 사려다가 오늘도 기회 날림. 완벽한 타이밍은 존재하지 않는다는 걸 데이터로 알고 있지만.",
    vibe: "PER, PBR, DCF 밸류에이션까지 따져보지만 결론은 늘 조금 더 지켜보는 쪽으로 기울기 쉽습니다. 분석 완성이 곧 매수 버튼을 누를 이유를 찾는 시작점입니다.",
    traits: ["PER, PBR, DCF 밸류에이션은 자는 꿈에서도 계산", "종목 리포트 50장 읽고 결론은 좀 더 지켜볼게", "분석 완성 후 매수 버튼 누를 이유 찾기 시작", "이번엔 진짜 살 것 같다 싶으면 시세는 이미 상승"],
    goodFit: "매수 조건 3가지만 정하기. 조건 충족 시 자동매수 또는 알람 설정 의무화.",
    caution: "분석이 확신을 만들어도 실행이 따라오지 않을 수 있습니다. 과분석 때문에 최적 타이밍에서 반복적으로 이탈할 수 있습니다.",
    matches: {
      good: [{ type: "ENTJ", title: "주식판 꼰대 CEO" }, { type: "ESTJ", title: "매뉴얼 투자자형" }],
      bad: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ENFP", title: "운빨 한 방 중독자" }],
    },
    contentLinks: ["분석만 하다 못 사는 사람을 위한 매수 트리거 체크리스트", "완벽한 타이밍이 없는 이유", "분할매수가 분석 마비에 특효인 이유"],
    visual: "엑셀과 백테스트 그래프에 둘러싸인 분석가",
    color: "blue",
  },
  ESTP: {
    type: "ESTP",
    title: "전재산 올인러",
    nickname: "기회다 싶으면 이미 탑승 완료",
    punchline: "리스크 설명하는 동안 이미 시장가 매수 눌렀음. 기다리면 기회 간다고 생각하는 타입.",
    vibe: "뉴스를 보고 5분 안에 매수 결정을 내릴 수 있습니다. 수익이 날 때의 쾌감이 강하고, 손실 인정 대신 물타기로 평단을 낮추고 싶어질 때가 많습니다.",
    traits: ["뉴스 보고 5분 내 매수 결정 가능", "비중 조절이라는 개념이 머릿속에서 자주 사라짐", "수익 날 때 쾌감이 투자 목적의 큰 부분", "손실 인정보다 물타기로 평단 낮추기 선택"],
    goodFit: "종목당 포트폴리오 15% 상한 강제 설정. 매수 전 24시간 대기 룰.",
    caution: "한 종목 집중으로 계좌 변동성이 놀이기구 수준이 될 수 있습니다. 비중 조절이 없으면 수익도 한 번에 반납할 수 있습니다.",
    matches: {
      good: [{ type: "ISFJ", title: "ETF 수면왕" }, { type: "INTP", title: "분석 마비왕" }],
      bad: [{ type: "INFJ", title: "손실 신봉자형" }, { type: "INTJ", title: "시나리오 설계자형" }],
    },
    contentLinks: ["몰빵 투자자가 결국 잃는 수학적 이유", "비중 조절 한 번으로 MDD 절반 줄이는 법", "빠른 결단이 장점인 투자자의 리스크 관리법"],
    visual: "로켓에 올라탄 올인 트레이더",
    color: "coral",
  },
  ENTP: {
    type: "ENTP",
    title: "전략 무한 리셋형",
    nickname: "어제 ETF, 오늘 선물, 내일은 코인",
    punchline: "이번 전략은 진짜 완성형이라고 느껴질 때마다 더 좋아 보이는 전략이 나타남.",
    vibe: "투자 아이디어가 하루에도 여러 개씩 떠오릅니다. 전략 완성도 60%쯤에서 다음 전략으로 넘어가고, 포트폴리오는 테마별로 조금씩 난잡해지기 쉽습니다.",
    traits: ["투자 아이디어는 하루에 3개씩 나옴", "전략 완성도 60%에서 다음 전략으로 이동", "이번엔 다를 것 같다는 확신이 매번 새로움", "포트폴리오가 테마별로 난잡하게 구성됨"],
    goodFit: "분기당 전략 1개만 운용. 전략 변경은 분기 말에만 허용하는 자체 룰 설정.",
    caution: "전략을 끝까지 밀어붙이는 힘이 약할 수 있습니다. 수익이 나도 더 좋은 기회를 쫓다가 갈아타는 습관을 조심해야 합니다.",
    matches: {
      good: [{ type: "INTJ", title: "시나리오 설계자형" }, { type: "ISTJ", title: "평생 존버러" }],
      bad: [{ type: "ISFJ", title: "ETF 수면왕" }, { type: "ESTJ", title: "매뉴얼 투자자형" }],
    },
    contentLinks: ["투자 전략을 자꾸 바꾸는 사람이 잃는 이유", "포트폴리오 리셋 증후군 자가 진단", "아이디어 많은 투자자가 성과를 내는 법"],
    visual: "여러 전략 카드를 동시에 들고 있는 실험가",
    color: "gold",
  },
  ISFJ: {
    type: "ISFJ",
    title: "ETF 수면왕",
    nickname: "수익보다 숙면이 먼저",
    punchline: "계좌 열기 전에 멘탈이 먼저 확인됨. 변동성 큰 날은 앱 삭제 고려.",
    vibe: "S&P500 ETF 적립식이 인생 전략처럼 느껴지는 안정형입니다. 월급날 자동이체를 걸어두고 잊어버릴 수 있지만, 수익률 5% 하락에도 며칠 기분이 흔들릴 수 있습니다.",
    traits: ["S&P500 ETF 적립식이 인생 전략", "월급날 자동이체 설정 후 잊어버리기 가능", "주변에서 테마주 이야기해도 마음이 잘 안 움직임", "수익률 5% 하락에도 며칠 기분이 망가짐"],
    goodFit: "연 1회 리밸런싱 캘린더 등록. 목표 수익률을 구체화하고 숙면 가능한 변동성을 정하기.",
    caution: "너무 방어적인 포지션은 기회비용을 키울 수 있습니다. 수익률에 집착하지 않더라도 목표 수익률은 설정해두는 편이 좋습니다.",
    matches: {
      good: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ENFP", title: "운빨 한 방 중독자" }],
      bad: [{ type: "ENTP", title: "전략 무한 리셋형" }, { type: "ENTJ", title: "주식판 꼰대 CEO" }],
    },
    contentLinks: ["ETF 장기투자가 진짜 최선인 이유", "적립식 투자 수익률이 예상보다 낮은 이유", "안전한 포트폴리오의 숨겨진 리스크"],
    visual: "ETF 바구니 안에서 편하게 자는 캐릭터",
    color: "green",
  },
  INFJ: {
    type: "INFJ",
    title: "손실 신봉자형",
    nickname: "이 종목은 언젠가 세상을 바꾼다",
    punchline: "아직 세상이 이 기업의 가치를 몰라서 주가가 낮은 것임. 기다리면 반드시 온다.",
    vibe: "종목 투자 전 창업자 인터뷰를 정독하고, 실적보다 비전과 스토리에 마음이 먼저 갑니다. 손실 40%에서도 장기 투자라는 말로 마음을 정리하기 쉽습니다.",
    traits: ["종목 투자 전 창업자 인터뷰 정독 필수", "실적보다 비전과 스토리로 종목 결정", "손실 40%에서도 장기 투자야로 마음 정리", "포트폴리오가 미래 산업 테마로 구성됨"],
    goodFit: "비전 투자는 포트폴리오의 20% 상한. 나머지는 실적 기반 종목으로 균형 맞추기.",
    caution: "신념이 객관적 판단을 막을 수 있습니다. 손절 기준 없는 장기 투자는 장기투자가 아니라 물림이 될 수 있습니다.",
    matches: {
      good: [{ type: "INTJ", title: "시나리오 설계자형" }, { type: "INTP", title: "분석 마비왕" }],
      bad: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ENTP", title: "전략 무한 리셋형" }],
    },
    contentLinks: ["성장주 투자자가 반드시 설정해야 할 손절 룰", "테마주 vs 가치주 수익률 10년 비교", "비전은 좋지만 지금 사면 안 되는 종목 특징"],
    visual: "미래 도시를 바라보는 신념 투자자",
    color: "blue",
  },
  ESFJ: {
    type: "ESFJ",
    title: "친구 신호 매수러",
    nickname: "주변 사람이 사면 괜히 마음이 움직임",
    punchline: "단톡에서 이거 요즘 진짜 오른다는 말 하나에 밤새 리서치. 결국 매수.",
    vibe: "투자 결정의 상당 부분이 주변 추천에서 시작됩니다. 오르는 종목 뉴스를 보면 내 종목이 초라해 보이고, 커뮤니티 반응이 좋으면 확신이 생기기 쉽습니다.",
    traits: ["투자 결정의 상당 부분이 주변 추천에서 시작", "오르는 종목 뉴스 보면 내 종목이 볼품없어 보임", "커뮤니티 반응이 좋으면 확신이 생김", "손실 나도 추천해준 사람에게 말 못 함"],
    goodFit: "추천 받으면 왜 좋은지 3가지를 직접 정리하기 전까지 매수 금지.",
    caution: "추천과 근거를 분리하지 못하면 고점 진입을 반복할 수 있습니다. 타이밍이 늦을수록 손실 가능성은 높아집니다.",
    matches: {
      good: [{ type: "ISTJ", title: "평생 존버러" }, { type: "ISFJ", title: "ETF 수면왕" }],
      bad: [{ type: "INTJ", title: "시나리오 설계자형" }, { type: "ENTJ", title: "주식판 꼰대 CEO" }],
    },
    contentLinks: ["지인 추천 종목이 늦게 알려지는 이유", "정보를 받는 타이밍이 수익에 미치는 영향", "SNS 화제 종목의 고점 진입 확률"],
    visual: "단톡방 알림을 보고 흔들리는 투자자",
    color: "gold",
  },
  ENFJ: {
    type: "ENFJ",
    title: "주식 상담사형",
    nickname: "남 수익은 챙기는데 내 계좌는 뒷전",
    punchline: "친구 포트폴리오 점검은 1시간, 내 계좌 점검은 다음 달로 미룸.",
    vibe: "종목 설명을 잘하고 주변 사람의 투자 성과에 감정적으로 영향을 받습니다. 나는 나중에 제대로 공부하고 시작하겠다는 말이 길어지다 보면 분위기에 따라 결정하게 됩니다.",
    traits: ["종목 설명은 잘하는데 매수는 망설임", "주변 투자 성과에 감정적으로 영향 받음", "나는 나중에 제대로 공부하고 시작이 길어짐", "결국 분위기에 따라 결정하는 패턴"],
    goodFit: "월 1회 내 포트폴리오 리뷰를 캘린더에 고정 일정으로 등록.",
    caution: "자기 기준 없이 타인 성과에 흔들리면 매번 뒤늦게 추격 매수하게 됩니다.",
    matches: {
      good: [{ type: "INTP", title: "분석 마비왕" }, { type: "INTJ", title: "시나리오 설계자형" }],
      bad: [{ type: "ENFP", title: "운빨 한 방 중독자" }, { type: "ESFJ", title: "친구 신호 매수러" }],
    },
    contentLinks: ["투자를 남에게 설명 잘 하는데 나는 못 하는 이유", "자기 기준 없는 투자자가 꼭 겪는 패턴", "포트폴리오 리뷰를 습관으로 만드는 법"],
    visual: "메가폰을 들고 남의 계좌를 상담하는 캐릭터",
    color: "coral",
  },
  ISTJ: {
    type: "ISTJ",
    title: "평생 존버러",
    nickname: "기업은 안 망한다는 굳은 믿음",
    punchline: "평균 단가는 기억하는데 손절 버튼 위치는 아직 낯설어요. 시간이 해결해줄 거라는 믿음이 강한 타입.",
    vibe: "재무제표와 실적, PER 같은 숫자 근거를 중요하게 봅니다. 한 번 고른 종목은 쉽게 바꾸지 않고, 손실이 나도 기업 가치가 변한 건 아니라고 생각하기 쉽습니다.",
    traits: ["재무제표, 실적, PER 같은 숫자 근거를 중요하게 봄", "한 번 고른 종목은 쉽게 바꾸지 않음", "손실이 나도 기업 가치가 변한 건 아니잖아라고 생각함", "단기 이슈보다 장기 보유와 안정성을 선호함"],
    goodFit: "매수할 때부터 보유 이유, 매도 조건, 재검토 날짜를 같이 정해두기. 분기 실적 발표일마다 투자 아이디어 점검.",
    caution: "근거 있는 인내는 강점이지만, 매도 기준 없는 존버는 위험할 수 있습니다. 처음의 투자 근거가 사라졌는데도 버티면 장기 물림이 될 수 있습니다.",
    matches: {
      good: [{ type: "ESFP", title: "고점 짝사랑가" }, { type: "ENTP", title: "전략 무한 리셋형" }],
      bad: [{ type: "ENFP", title: "운빨 한 방 중독자" }, { type: "ISFP", title: "감정 일기 투자자형" }],
    },
    contentLinks: ["장기투자자가 반드시 정해야 할 매도 기준", "존버와 장기투자의 결정적 차이", "실적 발표 후 포트폴리오 점검하는 법"],
    visual: "재무제표를 들고 오래 버티는 투자자",
    color: "green",
  },
  INTJ: {
    type: "INTJ",
    title: "시나리오 설계자형",
    nickname: "매수 전 이미 플랜 A부터 Z까지 있음",
    punchline: "진입가, 목표가, 손절가, 보유 기간, 분할 매도 비율까지 스프레드시트에 정리 완료.",
    vibe: "남들이 모르는 종목을 발굴하는 데 만족감을 느끼고, 전략에 확신이 있어 주변 의견을 잘 듣지 않습니다. 계획이 틀어지면 전략 전체를 다시 설계합니다.",
    traits: ["남들이 모르는 종목 발굴하는 것에 만족감", "전략에 확신 있어서 주변 의견 잘 안 들음", "틀렸을 때 인정하는 데 시간이 좀 걸림", "계획이 틀어지면 전략 전체를 재설계함"],
    goodFit: "전략이 틀렸을 때 무엇을 놓쳤나 복기 문서 작성. 반증 시나리오를 먼저 써보기.",
    caution: "독립적 판단은 강점이지만 틀렸을 때 피드백 루프가 느릴 수 있습니다. 확증 편향을 조심해야 합니다.",
    matches: {
      good: [{ type: "INTP", title: "분석 마비왕" }, { type: "ISFJ", title: "ETF 수면왕" }],
      bad: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ESFJ", title: "친구 신호 매수러" }],
    },
    contentLinks: ["투자 전략이 탄탄한 사람도 실패하는 이유", "확증 편향이 계좌에 미치는 영향", "반증 시나리오 작성이 수익률을 높이는 이유"],
    visual: "스프레드시트와 시나리오 보드를 보는 전략가",
    color: "blue",
  },
  ESTJ: {
    type: "ESTJ",
    title: "매뉴얼 투자자형",
    nickname: "원칙은 완벽, 시장은 딴소리",
    punchline: "투자 원칙 13페이지 있음. 시장이 그걸 안 따른다는 게 문제.",
    vibe: "매매 일지, 수익률 기록, 리밸런싱 일정까지 잘 챙깁니다. 비중 규칙과 섹터 배분 원칙도 있지만 예상 밖 시장 변화에는 원칙을 적용하다 타이밍을 놓치기 쉽습니다.",
    traits: ["매매 일지, 수익률 기록, 리밸런싱 일정 완벽", "비중 규칙, 섹터 배분 원칙 다 있음", "예상 밖 시장 변화에 원칙 적용하려다 타이밍 놓침", "원칙대로 하면 된다는 믿음이 유연성을 막음"],
    goodFit: "원칙에 예외 조항 추가. 시장 변동성 구간별 대응 매뉴얼 따로 만들기.",
    caution: "과도한 규칙은 유연한 대응을 막을 수 있습니다. 시장 맥락에 따라 원칙을 조정할 줄 알아야 합니다.",
    matches: {
      good: [{ type: "ISTP", title: "RSI 교신자형" }, { type: "INTP", title: "분석 마비왕" }],
      bad: [{ type: "ENFP", title: "운빨 한 방 중독자" }, { type: "INFJ", title: "손실 신봉자형" }],
    },
    contentLinks: ["원칙 투자자가 시장 변동에 흔들리지 않으려면", "리밸런싱 타이밍을 놓치는 사람의 공통점", "규칙이 많은 투자자의 심리적 함정"],
    visual: "투자 매뉴얼과 자를 들고 있는 관리자",
    color: "gold",
  },
  ENTJ: {
    type: "ENTJ",
    title: "주식판 꼰대 CEO",
    nickname: "계좌도 KPI로 관리하는 타입",
    punchline: "월 수익률 목표치 미달 시 자기 자신에게 피드백 미팅 소집.",
    vibe: "포트폴리오를 사업 포트폴리오처럼 구성하고, 수익 목표가 없으면 투자 의미가 없다고 느낍니다. 다른 사람의 투자 방식이 비효율적으로 보일 때가 있습니다.",
    traits: ["포트폴리오가 사업 포트폴리오처럼 구성됨", "수익 목표가 없으면 투자 의미 없다고 생각", "다른 사람 투자 방식이 비효율적으로 보임", "성과 압박이 과도한 리스크 감수로 이어질 수 있음"],
    goodFit: "월간 KPI 대신 연간 복리 목표로 프레임 전환. 얼마나 잃지 않았나도 성과 기준에 포함.",
    caution: "목표 달성 압박이 커질수록 과도한 베팅으로 이어질 수 있습니다. 단기 목표보다 장기 복리에 집중해야 합니다.",
    matches: {
      good: [{ type: "INTP", title: "분석 마비왕" }, { type: "ISFJ", title: "ETF 수면왕" }],
      bad: [{ type: "ENFP", title: "운빨 한 방 중독자" }, { type: "ESFJ", title: "친구 신호 매수러" }],
    },
    contentLinks: ["성과 목표가 오히려 수익률을 낮추는 이유", "투자에서 KPI 사고방식의 장단점", "장기 복리가 단기 목표보다 강한 이유"],
    visual: "투자 대시보드 앞에서 KPI를 보는 CEO",
    color: "coral",
  },
  ISFP: {
    type: "ISFP",
    title: "감정 일기 투자자형",
    nickname: "계좌 그래프가 곧 오늘의 기분",
    punchline: "상승장엔 세상이 아름답고 하락장엔 투자를 왜 시작했나 싶음.",
    vibe: "종목에 감정 이입이 되어 손절이 어려울 때가 많습니다. 직감으로 좋아 보이는 기업을 먼저 찾고 숫자는 나중에 확인하는 편입니다.",
    traits: ["종목에 감정 이입이 되어 손절이 어려움", "직감으로 좋아 보이는 기업 먼저 찾고 숫자 나중에", "시장 좋을 때 과감, 시장 나쁠 때 소극적으로 행동", "매매 이유를 말로 설명하기 어려울 때가 많음"],
    goodFit: "매수 시 이유 3가지 메모 필수. 메모 없으면 매수 없음 룰.",
    caution: "감정 기반 매매는 시장이 나쁠 때 최악의 타이밍에 팔게 만들 수 있습니다. 매수 이유 기록이 필수입니다.",
    matches: {
      good: [{ type: "ESTJ", title: "매뉴얼 투자자형" }, { type: "INTJ", title: "시나리오 설계자형" }],
      bad: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ENTJ", title: "주식판 꼰대 CEO" }],
    },
    contentLinks: ["감정으로 투자하는 사람이 하락장에서 가장 많이 잃는 이유", "직감 투자를 시스템으로 바꾸는 법", "매매 일지 쓰는 법"],
    visual: "계좌 그래프를 감정 일기처럼 그리는 캐릭터",
    color: "green",
  },
  INFP: {
    type: "INFP",
    title: "주식 짝사랑러 껄무새",
    nickname: "팔걸, 살걸, 기다릴걸의 인간화",
    punchline: "샀으면 올랐을 종목, 팔았으면 더 올랐을 종목, 기다렸으면 됐을 종목. 타임라인이 완벽.",
    vibe: "관심 종목 리스트가 포트폴리오보다 길고, 손절하지 못한 채 언젠가 오를 거라고 버티기 쉽습니다. 확신이 생기는 순간 이미 많이 오른 상태일 때도 많습니다.",
    traits: ["관심 종목 리스트가 포트폴리오보다 5배 많음", "손절 못하고 언젠가 오를 거야로 버팀", "오를 것 같은 확신이 생기면 이미 많이 오른 상태", "결정적 순간에 좀 더 확인하고로 기회 놓침"],
    goodFit: "관심 종목에 매수 조건 미리 설정. 조건 미충족 시 자동 제외.",
    caution: "후회 기반 결정은 다음 실수를 만듭니다. 자동화된 손절과 비중 제한으로 감정 개입을 줄여야 합니다.",
    matches: {
      good: [{ type: "ESFJ", title: "친구 신호 매수러" }, { type: "ISFJ", title: "ETF 수면왕" }],
      bad: [{ type: "ESTP", title: "전재산 올인러" }, { type: "ISFP", title: "감정 일기 투자자형" }],
    },
    contentLinks: ["투자 후회를 줄이는 심리적 방법", "결정을 못 하는 투자자를 위한 의사결정 프레임", "관심 종목만 많고 실행 없는 투자자 유형 분석"],
    visual: "앵무새 캐릭터가 관심 종목 리스트를 들고 있는 모습",
    color: "blue",
  },
  ESFP: {
    type: "ESFP",
    title: "고점 짝사랑가",
    nickname: "핫하다는 말 들으면 이미 설렘",
    punchline: "유튜브 조회수 100만 이상 종목 영상 보고 나서 세상에 이런 기업이 있었다니 감동.",
    vibe: "트렌드 감각은 좋지만 정보가 늦게 도착할 때가 많습니다. 기업 분위기와 이미지에 강하게 반응하고, 사람들이 다 이야기할 때 사면 고점일 가능성이 커집니다.",
    traits: ["트렌드 감각은 좋은데 정보가 늦게 도착함", "기업 분위기와 이미지에 강하게 반응", "주변에서 다들 이야기할 때 사면 항상 고점", "이미 40% 오른 종목도 아직 초기처럼 느껴짐"],
    goodFit: "투자 전 이 정보가 언제 나왔나 날짜 확인 의무화. 공개된 지 1주일 이상이면 패스.",
    caution: "대중이 알게 된 정보는 이미 가격에 반영됐을 수 있습니다. 화제가 될 때 사는 게 아니라 화제가 되기 전에 사야 합니다.",
    matches: {
      good: [{ type: "ISTJ", title: "평생 존버러" }, { type: "ISFJ", title: "ETF 수면왕" }],
      bad: [{ type: "INFJ", title: "손실 신봉자형" }, { type: "INTP", title: "분석 마비왕" }],
    },
    contentLinks: ["유튜브 조회수 100만 종목이 고점인 이유", "정보 시차가 수익률에 미치는 영향", "트렌드를 먼저 읽는 투자자가 되는 법"],
    visual: "핫한 종목 영상을 보며 설레는 캐릭터",
    color: "gold",
  },
  ENFP: {
    type: "ENFP",
    title: "운빨 한 방 중독자",
    nickname: "이번엔 진짜 터질 것 같은데?",
    punchline: "3배 레버리지 ETF 처음 봤을 때 눈빛이 달라졌음. 포트폴리오가 곧 복권.",
    vibe: "가능성을 보는 눈은 뛰어나지만 한 종목의 대박 기억이 오래 남습니다. 분산 투자를 수익률 희석이라고 느끼기 쉽고, 손실은 아직 안 팔았으니 손실이 아니라고 정리하기 쉽습니다.",
    traits: ["가능성 보는 눈은 업계 최고 수준", "한 종목에서 대박 나면 기억에 오래 남음", "분산 투자는 수익률 희석이라는 신념", "손실은 아직 안 팔았으니까 손실 아님 논리로 정리"],
    goodFit: "테마와 성장주는 포트폴리오 10% 상한 룰. 나머지 90%는 지루하지만 안정적으로.",
    caution: "한 방 기대가 커질수록 포지션이 비대해집니다. 기대수익이 클수록 분산이 더 중요합니다.",
    matches: {
      good: [{ type: "ISFJ", title: "ETF 수면왕" }, { type: "ESTJ", title: "매뉴얼 투자자형" }],
      bad: [{ type: "ISTJ", title: "평생 존버러" }, { type: "INTJ", title: "시나리오 설계자형" }],
    },
    contentLinks: ["레버리지 ETF가 장기 보유에 불리한 수학적 이유", "한 방 투자자의 자산 변동성 분석", "성장주에 배팅하면서 잠 자는 법"],
    visual: "불꽃 머리로 한 방을 기다리는 캐릭터",
    color: "coral",
  },
});

Object.entries({
  ISTP: { title: "차트 귀신형", percent: 6 },
  INTP: { percent: 7 }, ESTP: { percent: 8 }, ENTP: { percent: 6 }, ISFJ: { percent: 8 },
  INFJ: { title: "존버 신학자형", percent: 5 },
  ESFJ: { title: "단톡방 매수러", percent: 7 },
  ENFJ: { title: "남의 계좌 주치의형", percent: 6 },
  ISTJ: { title: "존버교 신자형", percent: 9 },
  INTJ: { percent: 5 },
  ESTJ: { title: "투자 원칙 13페이지형", percent: 8 },
  ENTJ: { title: "KPI 투자 CEO형", percent: 6 },
  ISFP: { title: "주가=기분 연동형", percent: 6 },
  INFP: { title: "깄무새 3연타형", percent: 7 },
  ESFP: { title: "고점 단골손님형", percent: 7 },
  ENFP: { title: "이번엔 진짜야형", percent: 7 },
}).forEach(([type, patch]) => Object.assign(results[type], patch));

const temperamentGuide = {
  SJ: {
    label: "SJ 안정 관리자 그룹",
    summary:
      "책임감과 기준이 강한 편이라 무리한 투기보다 안정적인 구조를 선호합니다. 다만 리스크를 너무 피하면 성장 기회를 놓칠 수 있습니다.",
    strategy: "예금만 고집하기보다 ETF, 채권, 현금성 자산을 섞은 자산배분 방식이 잘 맞습니다.",
  },
  SP: {
    label: "SP 행동파 트레이더 그룹",
    summary:
      "기회가 보이면 빠르게 움직이고 시장의 속도감을 즐기는 편입니다. 장점은 실행력, 약점은 과한 비중과 충동 매수입니다.",
    strategy: "전체 자산의 대부분은 안정적인 코어에 두고, 일부만 실험 계좌로 쓰는 코어-위성 전략이 좋습니다.",
  },
  NF: {
    label: "NF 의미 추구형 그룹",
    summary:
      "숫자만큼 이야기와 신념에 반응합니다. 종목에 애정이 생기기 쉬워 손절보다 희망회로가 빨리 켜질 수 있습니다.",
    strategy: "투자 전 매수 이유, 목표 비중, 손절 기준을 글로 남기면 감정적인 결정을 줄이는 데 도움이 됩니다.",
  },
  NT: {
    label: "NT 합리 분석가 그룹",
    summary:
      "논리와 학습에 강하고 투자 아이디어를 깊게 파고듭니다. 다만 분석이 길어져 실행이 늦어지거나 과최적화에 빠질 수 있습니다.",
    strategy: "충분한 검토 뒤에는 소액으로 실행하고, 정해진 주기로만 점검하는 규칙이 잘 맞습니다.",
  },
};

const quizApp = document.querySelector("#quizApp");
const startButton = document.querySelector("#startQuiz");
let current = 0;
let scores = {};
let lastResultType = null;
let history = [];

startButton.addEventListener("click", startQuiz);

const params = new URLSearchParams(window.location.search);
const initialResultType = params.get("type")?.toUpperCase();
if (results[initialResultType]) {
  renderResult(initialResultType);
} else if (params.get("start") === "1") {
  startQuiz();
}

function startQuiz() {
  current = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  history = [];
  renderQuestion();
  focusQuiz();
}

function renderQuestion() {
  const question = questions[current];
  const progress = Math.round((current / questions.length) * 100);
  quizApp.innerHTML = `
    <div class="progress-wrap">
      <div class="progress-bar" style="width: ${progress}%"></div>
    </div>
    <div class="progress-label">${current + 1} / ${questions.length}</div>
    <div class="quick-quiz">
      <div class="quick-progress">
        <button type="button" class="quiz-back" id="prevQuestion" ${current === 0 ? "disabled" : ""} aria-label="이전 질문">&lsaquo;</button>
        <div aria-label="진행률"><i style="width: ${progress}%"></i></div>
      </div>
      <p class="question-num">Q${current + 1}.</p>
      <h2>${question.text}</h2>
      <div class="quiz-options">
        ${question.answers.map((answer, index) => `<button type="button" class="choice-btn" data-index="${index}">${answer.label}</button>`).join("")}
      </div>
      <p class="tap-hint">가까운 쪽을 누르면 바로 다음 질문으로 넘어갑니다.</p>
    </div>
  `;

  quizApp.querySelector("#prevQuestion").addEventListener("click", goBack);
  quizApp.querySelectorAll(".choice-btn").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index)));
  });
  focusQuiz();
}

function chooseAnswer(index) {
  const btns = quizApp.querySelectorAll(".choice-btn");
  btns.forEach((button) => {
    button.disabled = true;
  });
  btns[index].classList.add("selected");

  const answer = questions[current].answers[index];
  history.push({ index: current, scores: answer.scores });
  Object.entries(answer.scores).forEach(([key, value]) => {
    scores[key] = (scores[key] || 0) + value;
  });
  current++;

  setTimeout(() => {
    if (current >= questions.length) renderResult();
    else renderQuestion();
  }, 300);
}

function goBack() {
  const previous = history.pop();
  if (!previous) return;

  Object.entries(previous.scores).forEach(([key, value]) => {
    scores[key] = (scores[key] || 0) - value;
  });
  current = previous.index;
  renderQuestion();
}

function getAxis(left, right) {
  if ((scores[left] || 0) === (scores[right] || 0)) {
    return Math.random() > 0.5 ? left : right;
  }
  return (scores[left] || 0) > (scores[right] || 0) ? left : right;
}

function getResultType() {
  return `${getAxis("E", "I")}${getAxis("S", "N")}${getAxis("T", "F")}${getAxis("J", "P")}`;
}

function getResultImage(type) {
  const imageMap = {
    ISTP: "./assets/result-placeholder-160.svg",
    INTP: "./assets/result-placeholder-160.svg",
    ESTP: "./assets/result-placeholder-160.svg",
    ENTP: "./assets/result-placeholder-160.svg",
    ISFJ: "./assets/result-placeholder-160.svg",
    INFJ: "./assets/result-placeholder-160.svg",
    ESFJ: "./assets/result-placeholder-160.svg",
    ENFJ: "./assets/result-placeholder-160.svg",
    ISTJ: "./assets/result-placeholder-160.svg",
    INTJ: "./assets/result-placeholder-160.svg",
    ESTJ: "./assets/result-placeholder-160.svg",
    ENTJ: "./assets/result-placeholder-160.svg",
    ISFP: "./assets/result-placeholder-160.svg",
    INFP: "./assets/result-placeholder-160.svg",
    ESFP: "./assets/result-placeholder-160.svg",
    ENFP: "./assets/result-placeholder-160.svg",
  };

  return imageMap[type] || "./assets/result-placeholder-160.svg";
}

function getResultEmoji(type) {
  const emojiMap = {
    ISTP: "📈",
    INTP: "🧮",
    ESTP: "🚀",
    ENTP: "🧪",
    ISFJ: "🛌",
    INFJ: "🌱",
    ESFJ: "💬",
    ENFJ: "📣",
    ISTJ: "🪨",
    INTJ: "♟️",
    ESTJ: "📋",
    ENTJ: "👔",
    ISFP: "🎨",
    INFP: "🦜",
    ESFP: "🔥",
    ENFP: "🎰",
  };

  return emojiMap[type] || "💰";
}

function getContentLink(title) {
  const riskWords = ["손실", "리스크", "MDD", "하락", "고점", "변동성", "몰빵", "단기", "감정", "RSI"];
  const dividendWords = ["ETF", "배당", "성장주", "레버리지", "장기 보유", "안전한 포트폴리오"];
  const styleWords = ["친구", "지인", "SNS", "유튜브", "자기 기준", "설명", "리뷰", "성향"];

  if (title.includes("복리") || title.includes("KPI") || title.includes("목표")) {
    return "./articles/mbti-investing-guide.html";
  }
  if (riskWords.some((word) => title.includes(word))) {
    return "./articles/risk-profile.html";
  }
  if (dividendWords.some((word) => title.includes(word))) {
    return "./articles/dividend-vs-growth.html";
  }
  if (styleWords.some((word) => title.includes(word))) {
    return "./articles/investment-style-difference.html";
  }
  return "./articles/mbti-investing-guide.html";
}

function renderResult(forcedType) {
  const type = forcedType || getResultType();
  lastResultType = type;
  const result = results[type];
  const resultImage = getResultImage(type);
  const resultEmoji = getResultEmoji(type);
  const temperamentKey = type[1] === "S" ? `${type[1]}${type[3]}` : `${type[1]}${type[2]}`;
  const guide = temperamentGuide[temperamentKey];
  const shareText = `나는 MoneyMBTI ${result.type} ${result.title}! ${result.punchline} 너도 해봐.`;

  quizApp.innerHTML = `
    <article class="quiz-result quiz-result-card result-${result.color}">
      <div class="result-hero-card">
        <img
          class="meme-avatar result-type-image"
          src="${resultImage}"
          width="160"
          height="160"
          placeholder="160x160"
          alt="${result.type} ${result.title} 유형 이미지"
        />
        <p class="eyebrow">Your MoneyMBTI</p>
        <h2>${resultEmoji} ${result.type} ${result.title}</h2>
        <span class="type-percent">\uC804\uCCB4 \uCC38\uC5EC\uC790 \uC911 ${result.percent || 6}%</span>
        <p class="result-tagline">${result.nickname}</p>
      </div>

      <div class="result-punchline">
        <b>팩폭 한 줄</b>
        <strong>${result.punchline}</strong>
      </div>

      <p class="result-vibe">${result.vibe}</p>

      <div class="temperament-box">
        <b>${guide.label}</b>
        <p>${guide.summary}</p>
        <strong>${guide.strategy}</strong>
      </div>

      <div class="result-detail meme-detail">
        ${result.traits
          .map(
            (trait, index) => `
              <div>
                <b>특징 ${index + 1}</b>
                <p>${trait}</p>
              </div>
            `,
          )
          .join("")}
      </div>

      <div class="result-match">
        <b>잘 맞는 투자 스타일</b>
        <strong>${result.goodFit}</strong>
      </div>

      <div class="notice-box">
        <b>계좌 생존 팁</b>
        <p>${result.caution}</p>
      </div>

      <div class="compatibility-section">
        <b>찰떡궁합 / 물과기름</b>
        <div class="compatibility-grid">
          ${result.matches.good
            .map(
              (match) => `
                <button type="button" class="compatibility-card" data-type="${match.type}">
                  <img src="${getResultImage(match.type)}" width="56" height="56" alt="${match.type} ${match.title} 썸네일" />
                  <span>찰떡</span>
                  <strong>${match.title}</strong>
                  <small>${match.type}</small>
                </button>
              `,
            )
            .join("")}
          ${result.matches.bad
            .map(
              (match) => `
                <button type="button" class="compatibility-card is-bad" data-type="${match.type}">
                  <img src="${getResultImage(match.type)}" width="56" height="56" alt="${match.type} ${match.title} 썸네일" />
                  <span>물과기름</span>
                  <strong>${match.title}</strong>
                  <small>${match.type}</small>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="related-result-links">
        <b>이 유형이 눌러볼 만한 글</b>
        ${result.contentLinks.map((title) => `<a href="${getContentLink(title)}">${title}</a>`).join("")}
      </div>

      <div class="result-spoiler" id="spoilerBox" hidden></div>

      <div class="share-buttons result-share-top">
        <button type="button" class="btn-kakao" id="shareKakao">\uCE74\uCE74\uC624\uB85C \uACF5\uC720\uD558\uAE30</button>
        <button type="button" class="btn-copy" id="shareCopy">\uB9C1\uD06C \uBCF5\uC0AC</button>
      </div>

      <div class="result-share-actions">
        <button type="button" class="share-secondary quiz-button" id="restartQuiz">테스트 다시 하기</button>
        <a class="share-secondary quiz-button" href="./money-column.html">더 많은 콘텐츠 보기</a>
        <button type="button" class="share-ghost quiz-button" id="peekResult">다른 유형 훔쳐보기</button>
      </div>
    </article>
  `;

  quizApp.querySelector("#restartQuiz").addEventListener("click", startQuiz);
  quizApp.querySelector("#peekResult").addEventListener("click", peekRandomResult);
  quizApp.querySelectorAll(".compatibility-card").forEach((button) => {
    button.addEventListener("click", () => renderResult(button.dataset.type));
  });
  document.title = `\uB098\uB294 ${result.title}! | MoneyMBTI`;
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `\uB098\uB294 ${result.title}! | MoneyMBTI`);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', result.punchline);

  quizApp.querySelector("#shareKakao").addEventListener("click", () => {
    window.open("https://sharer.kakao.com/talk/friends/picker/link?app_key=YOUR_APP_KEY&link_ver=4.0&template_id=YOUR_TEMPLATE", "_blank");
    navigator.clipboard.writeText(`${result.title} - ${result.punchline} | moneymbti.com`).then(() => {
      quizApp.querySelector("#shareKakao").textContent = "\uB9C1\uD06C \uBCF5\uC0AC\uB428!";
    });
  });
  quizApp.querySelector("#shareCopy").addEventListener("click", () => {
    navigator.clipboard.writeText(`${result.title} - ${result.punchline} | ${window.location.href}`).then(() => {
      quizApp.querySelector("#shareCopy").textContent = "\uBCF5\uC0AC \uC644\uB8CC!";
    });
  });
  focusQuiz();
}

function peekRandomResult() {
  const types = Object.keys(results).filter((type) => type !== lastResultType);
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomResult = results[randomType];
  const spoilerBox = quizApp.querySelector("#spoilerBox");

  spoilerBox.hidden = false;
  spoilerBox.innerHTML = `
    <b>다른 유형 스포</b>
    <p>${randomResult.type} ${randomResult.title}: ${randomResult.punchline}</p>
  `;
}

function focusQuiz() {
  window.requestAnimationFrame(() => {
    quizApp.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
