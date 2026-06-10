const questions = [
  {
    text: "세일 알림이 왔다. 내 첫 반응은?",
    answers: [
      { label: "일단 들어가 본다. 사야 할 것 같은 느낌이 든다.", scores: { impulse: 2 } },
      { label: "필요한 게 있을 때만 본다. 지금은 필요 없으니 패스.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "쇼핑 후 집에 왔는데 후회가 됐다. 나는?",
    answers: [
      { label: "그래도 살 때는 행복했으니까. 기분이었어.", scores: { impulse: 1, revenge: 1 } },
      { label: "다음엔 꼭 참아야지. 며칠 동안 죄책감이 남는다.", scores: { guilt: 2 } },
    ],
  },
  {
    text: "스트레스 받은 날, 나는?",
    answers: [
      { label: "뭔가 사거나 먹으면 풀린다. 기분 전환이 필요해.", scores: { revenge: 2, impulse: 1 } },
      { label: "소비보다는 다른 방법을 찾는다. 돈 쓰면 더 스트레스.", scores: { frugal: 1, guilt: 1 } },
    ],
  },
  {
    text: "친구가 비싼 물건을 샀다고 자랑한다.",
    answers: [
      { label: "나도 비슷한 거 갖고 싶다는 생각이 든다.", scores: { impulse: 2 } },
      { label: "잘 됐네. 별로 영향 없다.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "한 달 지출을 돌아봤다. 예산 초과다. 나는?",
    answers: [
      { label: "이번 달은 어쩔 수 없었어. 다음 달엔 줄여야지.", scores: { revenge: 1, impulse: 1 } },
      { label: "어디서 샜는지 항목별로 분석한다. 불편하다.", scores: { frugal: 1, guilt: 1 } },
    ],
  },
  {
    text: "'한정판'이라는 말을 들으면?",
    answers: [
      { label: "지금 안 사면 못 살 것 같은 느낌이 든다.", scores: { impulse: 2 } },
      { label: "한정판 마케팅이겠지. 별로 흔들리지 않는다.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "평소 소비 기록을 어떻게 하나?",
    answers: [
      { label: "거의 안 한다. 그냥 쓰고 나서 카드 명세서 보고 놀란다.", scores: { impulse: 1, revenge: 1 } },
      { label: "가계부나 앱으로 기록한다. 써야 마음이 놓인다.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "싸게 살 수 있는 방법(쿠폰, 적립금 등)을 챙기는 편?",
    answers: [
      { label: "귀찮아서 잘 안 챙긴다. 시간이 더 아깝다.", scores: { impulse: 1, revenge: 1 } },
      { label: "꼭 챙긴다. 안 챙기면 손해 본 것 같다.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "물건을 살 때 가장 많이 따지는 것은?",
    answers: [
      { label: "지금 기분, 느낌, 분위기.", scores: { impulse: 2, revenge: 1 } },
      { label: "가격 대비 품질, 실제 필요 여부.", scores: { frugal: 2 } },
    ],
  },
  {
    text: "소비에 대한 내 솔직한 생각은?",
    answers: [
      { label: "돈은 쓰려고 버는 것. 지금 행복이 중요하다.", scores: { impulse: 1, revenge: 2 } },
      { label: "지금 안 써도 나중을 생각하면 참는 게 맞다.", scores: { frugal: 1, guilt: 1 } },
    ],
  },
];

const results = {
  impulse: {
    type: "impulse",
    emoji: "🛒",
    title: "충동구매형",
    punchline: "지금 안 사면 후회할 것 같은 느낌의 인간화",
    description:
      "감정과 분위기에 따라 소비하는 유형입니다. 쇼핑이 스트레스 해소의 주요 수단이고, 세일이나 한정판 같은 트리거에 민감하게 반응합니다. 살 때는 행복하지만 사고 나서 후회하는 패턴이 반복될 수 있습니다.",
    strength: "소비에서 즐거움을 잘 찾음. 현재를 즐길 줄 앎.",
    caution: "한 달 뒤 카드 명세서가 공포가 될 수 있음. 구매 전 24시간 대기 규칙 추천.",
    management: "장바구니에 담고 하루 기다리기. 충동 구매 전용 월 예산 설정.",
    percent: 31,
    color: "gold",
  },
  frugal: {
    type: "frugal",
    emoji: "💰",
    title: "절약강박형",
    punchline: "1원도 허투루 쓰면 잠을 못 자는 타입",
    description:
      "지출에 매우 신중하고 꼼꼼한 유형입니다. 가계부와 예산 관리가 몸에 배어있고, 불필요한 소비는 거의 없습니다. 다만 필요한 것도 지나치게 참다가 삶의 질이 떨어질 수 있습니다.",
    strength: "저축률이 높고 재정적으로 안정적.",
    caution: "너무 아끼다가 정작 중요한 경험을 놓칠 수 있음.",
    management: "월 소비 예산 안에 '즐거움 항목' 따로 설정. 써도 되는 돈 리스트 만들기.",
    percent: 28,
    color: "green",
  },
  revenge: {
    type: "revenge",
    emoji: "💥",
    title: "보복소비형",
    punchline: "참다 참다 한 번에 폭발하는 지갑 화산",
    description:
      "평소엔 절약하다가 특정 순간에 한꺼번에 크게 쓰는 유형입니다. 스트레스 해소나 자기 보상의 수단으로 소비하는 경향이 있습니다. 패턴이 불규칙해서 예산 관리가 어렵습니다.",
    strength: "평소 절제력이 강함.",
    caution: "보상 심리로 인한 큰 소비가 재정 계획을 흔들 수 있음.",
    management: "스트레스 받을 때 쓸 수 있는 소액 '보상 예산' 미리 확보.",
    percent: 22,
    color: "coral",
  },
  guilt: {
    type: "guilt",
    emoji: "😔",
    title: "죄책감소비형",
    punchline: "사고 나서 3일은 자책하는 타입",
    description:
      "소비 자체는 하지만 쓰고 나서 죄책감을 많이 느끼는 유형입니다. 소비의 즐거움보다 후회가 더 오래 남는 경향이 있습니다. 필요한 것도 못 사는 경우도 있습니다.",
    strength: "소비에 대한 높은 자기 인식.",
    caution: "지나친 자책이 삶의 질을 낮출 수 있음. 소비 자체보다 감정 관리가 필요.",
    management: "'이 정도는 써도 된다' 기준 명확히 정하기. 소비 후 자책보다 다음 기준 설정으로.",
    percent: 19,
    color: "blue",
  },
};

const quizApp = document.querySelector("#quizApp");
const startButton = document.querySelector("#startQuiz");
let current = 0;
let scores = {};
let history = [];

startButton.addEventListener("click", startQuiz);

const params = new URLSearchParams(window.location.search);
if (params.get("start") === "1") {
  startQuiz();
}

function startQuiz() {
  current = 0;
  scores = { impulse: 0, frugal: 0, revenge: 0, guilt: 0 };
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
        ${question.answers
          .map((answer, index) => `<button type="button" class="choice-btn" data-index="${index}">${answer.label}</button>`)
          .join("")}
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

function getResultType() {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function renderResult() {
  const type = getResultType();
  const result = results[type];

  document.title = `나는 ${result.title}! | MoneyMBTI`;
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `나는 ${result.title}! | MoneyMBTI`);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', result.punchline);

  quizApp.innerHTML = `
    <article class="quiz-result quiz-result-card result-${result.color}">
      <section class="result-header-card">
        <div class="result-emoji">${result.emoji}</div>
        <p class="result-label">YOUR MONEYMBTI</p>
        <h1>${result.title}</h1>
        <p class="result-nickname">${result.punchline}</p>
        <span class="type-percent">전체 참여자 중 ${result.percent}%</span>
      </section>

      <div class="share-buttons result-share-top">
        <button type="button" class="btn-kakao" id="shareKakao">카카오로 공유하기</button>
        <button type="button" class="btn-copy" id="shareCopy">링크 복사</button>
      </div>

      <section class="result-punchline-box">
        <span>한 줄 요약</span>
        <strong>${result.punchline}</strong>
      </section>

      <section class="result-section">
        <h2>나는 이런 소비자예요</h2>
        <p>${result.description}</p>
      </section>

      <section class="result-section">
        <h2>강점</h2>
        <p>${result.strength}</p>
      </section>

      <section class="result-caution-box">
        <h2>조심할 점</h2>
        <p>${result.caution}</p>
      </section>

      <section class="result-section">
        <h2>관리법</h2>
        <p>${result.management}</p>
      </section>

      <section class="result-section result-more-tests">
        <h2>이런 테스트도 해보세요</h2>
        <div class="result-test-links">
          <a href="./investment-test.html">투자 성향 테스트</a>
          <a href="./stock-mbti.html">주식 MBTI 16유형 해설</a>
          <a href="./tests.html">테스트 전체 보기</a>
        </div>
      </section>

      <div class="result-bottom-actions">
        <button type="button" class="share-secondary quiz-button" id="restartQuiz">테스트 다시 하기</button>
        <a class="share-ghost quiz-button" href="./tests.html">다른 테스트 보기</a>
      </div>
    </article>
  `;

  document.getElementById("shareKakao").addEventListener("click", () => {
    window.open(
      "https://sharer.kakao.com/talk/friends/picker/link?app_key=YOUR_APP_KEY&link_ver=4.0&template_id=YOUR_TEMPLATE",
      "_blank",
    );
    navigator.clipboard.writeText(`${result.title} - ${result.punchline} | moneymbti.com`).then(() => {
      document.getElementById("shareKakao").textContent = "링크 복사됨!";
    });
  });

  document.getElementById("shareCopy").addEventListener("click", () => {
    navigator.clipboard.writeText(`${result.title} - ${result.punchline} | ${window.location.href}`).then(() => {
      document.getElementById("shareCopy").textContent = "복사 완료!";
    });
  });

  quizApp.querySelector("#restartQuiz").addEventListener("click", startQuiz);
  focusQuiz();
}

function focusQuiz() {
  window.requestAnimationFrame(() => {
    quizApp.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
