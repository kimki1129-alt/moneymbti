const questions = [
  {
    text: "통장 잔액을 확인하는 빈도는?",
    answers: [
      { label: "거의 매일. 안 보면 불안하다.", scores: { balance: 2 } },
      { label: "월급날이나 큰 지출 있을 때만.", scores: { compare: 1 } },
      { label: "잘 안 본다. 보면 더 불안할 것 같아서.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "돈 걱정이 머릿속에 떠오르는 시간은?",
    answers: [
      { label: "자려고 누웠을 때 특히 심하다.", scores: { balance: 2 } },
      { label: "주변에서 돈 얘기 나올 때.", scores: { compare: 2 } },
      { label: "별로 없다. 그냥 흘려보낸다.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "친구가 비싼 여행 사진을 올렸다.",
    answers: [
      { label: "나도 저렇게 살고 싶은데... 상대적 박탈감이 온다.", scores: { compare: 2 } },
      { label: "좋겠다. 그냥 넘긴다.", scores: { avoid: 1 } },
      { label: "저 돈 어디서 났을까 궁금하다.", scores: { balance: 1, compare: 1 } },
    ],
  },
  {
    text: "노후 준비에 대해 생각하면?",
    answers: [
      { label: "불안하다. 얼마나 있어야 하는지 모르겠다.", scores: { balance: 2 } },
      { label: "하긴 해야 하는데 아직 안 하고 있다.", scores: { avoid: 1, balance: 1 } },
      { label: "일단 지금 살고 보자.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "예상치 못한 지출(수리비, 병원비 등)이 생기면?",
    answers: [
      { label: "당황스럽고 며칠 동안 신경 쓰인다.", scores: { balance: 2 } },
      { label: "비상금으로 해결. 불편하지만 큰 불안은 없다.", scores: { compare: 1 } },
      { label: "일단 카드로 긁는다. 나중에 생각하자.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "돈 이야기가 나오는 모임이나 대화가?",
    answers: [
      { label: "불편하다. 내 상황이 비교될 것 같다.", scores: { compare: 2 } },
      { label: "괜찮다. 정보 얻는 자리로 생각한다.", scores: { balance: 1 } },
      { label: "그냥 듣는 편. 크게 신경 안 쓴다.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "이달 지출이 예산을 초과했다. 나는?",
    answers: [
      { label: "다음 달까지 불편한 마음이 지속된다.", scores: { balance: 2 } },
      { label: "어디서 줄일지 파악하고 다음 달 계획을 세운다.", scores: { balance: 1, compare: 1 } },
      { label: "다음 달은 나아지겠지 하고 넘긴다.", scores: { avoid: 2 } },
    ],
  },
  {
    text: "돈에 대한 내 솔직한 감정은?",
    answers: [
      { label: "늘 부족하다는 느낌. 얼마가 있어도 불안하다.", scores: { balance: 2 } },
      { label: "있으면 좋고 없으면 불편하지만 크게 집착하진 않는다.", scores: { compare: 1 } },
      { label: "잘 모르겠다. 그냥 살고 있다.", scores: { avoid: 2 } },
    ],
  },
];

const results = {
  balance: {
    type: "balance",
    emoji: "🔴",
    title: "통장 잔액 공포형",
    punchline: "잔액이 줄면 심장도 같이 줄어드는 타입",
    description:
      "돈에 대한 불안이 높고, 현재의 재정 상태에 대한 통제 욕구가 강한 유형입니다. 꼼꼼한 관리는 장점이지만 과도한 불안이 일상을 방해할 수 있습니다.",
    caution: "숫자를 자주 확인할수록 불안이 더 커지는 역설에 주의.",
    management: "잔액 확인을 주 2회로 제한하기. 비상금 목표액 설정으로 '안전 기준선' 만들기.",
    percent: 38,
    color: "coral",
  },
  compare: {
    type: "compare",
    emoji: "🟡",
    title: "비교 불안형",
    punchline: "남의 통장이 내 불안의 기준인 타입",
    description:
      "주변과의 비교에서 돈 불안이 촉발되는 유형입니다. 절대적인 금액보다 상대적 위치에 민감합니다. SNS나 모임에서 비교 상황이 생기면 불안이 커집니다.",
    caution: "SNS를 볼수록 비교 불안이 강해질 수 있음.",
    management: "나만의 재정 목표 설정. 비교 기준을 '남'이 아닌 '작년의 나'로 바꾸기.",
    percent: 34,
    color: "gold",
  },
  avoid: {
    type: "avoid",
    emoji: "🟢",
    title: "돈 회피형",
    punchline: "모르면 걱정도 없다는 마음으로 사는 타입",
    description:
      "돈에 대해 생각하는 걸 피하는 유형입니다. 불안이 없어 보이지만 사실은 불안을 직면하지 않는 방식으로 대처하는 경우가 많습니다. 준비 없이 지내다가 큰 지출이 생겼을 때 당황할 수 있습니다.",
    caution: "회피가 길어질수록 실제 재정 상황이 나빠질 수 있음.",
    management: "월 1회 재정 점검 '데이' 캘린더에 고정. 한 번에 다 하려 하지 말고 잔액 확인만부터.",
    percent: 28,
    color: "green",
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
  scores = { balance: 0, compare: 0, avoid: 0 };
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
      <p class="tap-hint">가까운 답을 누르면 바로 다음 질문으로 넘어갑니다.</p>
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
        <h2>나는 이런 돈 불안 유형이에요</h2>
        <p>${result.description}</p>
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
          <a href="./consume-test.html">소비 심리 테스트</a>
          <a href="./investment-test.html">투자 성향 테스트</a>
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
