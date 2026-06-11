const apps = [
  {
    id: 'yandex-calendar',
    name: 'Яндекс.Календарь',
    region: 'Российское',
    screenshot: 'assets/screenshots/yandex-calendar.png',
    description: 'Подходит тем, кто ведет задачи через календарь, дедлайны и расписание.',
    features: [0,1,0,1,1,1,0,1,1,0,1,0,1]
  },
  {
    id: 'weeek',
    name: 'WEEEK',
    region: 'Российское',
    screenshot: 'assets/screenshots/weeek.png',
    description: 'Универсальный вариант для личных задач, календаря и быстрых изменений планов.',
    features: [1,1,1,1,1,1,0,1,1,1,0,0,0]
  },
  {
    id: 'singularity',
    name: 'Singularity App',
    region: 'Российское',
    screenshot: 'assets/screenshots/singularity.png',
    description: 'Сильный вариант для структурированного личного планирования и прогресса.',
    features: [1,1,1,1,1,1,1,1,1,1,1,1,1]
  },
  {
    id: 'leadertask',
    name: 'LeaderTask',
    region: 'Российское',
    screenshot: 'assets/screenshots/leadertask.png',
    description: 'Подходит для задач, календаря, повторений и разделения дел по спискам.',
    features: [1,1,0,1,1,1,1,1,1,1,1,1,1]
  },
  {
    id: 'microsoft-todo',
    name: 'Microsoft To Do',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/microsoft-todo.png',
    description: 'Простой список задач с напоминаниями и удобным разделением дел.',
    features: [1,1,1,1,1,0,0,1,1,1,1,0,1]
  },
  {
    id: 'anydo',
    name: 'Any.do',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/anydo.png',
    description: 'Легкий сервис для быстрых задач, уведомлений и повседневного планирования.',
    features: [1,1,1,0,0,1,0,1,1,1,0,0,0]
  },
  {
    id: 'todoist',
    name: 'Todoist',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/todoist.png',
    description: 'Подходит для быстрого добавления задач, тегов, прогресса и повторений.',
    features: [1,0,1,0,1,0,1,1,1,1,1,0,1]
  },
  {
    id: 'ticktick',
    name: 'TickTick',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/ticktick.png',
    description: 'Сильный вариант для задач, календаря, повторений и гибкого интерфейса.',
    features: [1,1,1,0,1,1,1,1,1,1,1,1,1]
  },
  {
    id: 'notion',
    name: 'Notion',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/notion.png',
    description: 'Подходит тем, кому важны гибкая структура, списки, страницы и настройка.',
    features: [1,0,0,1,1,1,0,1,0,1,1,1,1]
  },
  {
    id: 'trello',
    name: 'Trello',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/trello.png',
    description: 'Вариант для визуального ведения задач, карточек и простого изменения планов.',
    features: [1,1,1,1,0,0,0,1,1,1,1,1,1]
  },
  {
    id: 'remember-milk',
    name: 'Remember The Milk',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/remember-milk.png',
    description: 'Подходит для задач с напоминаниями, календарем и отслеживанием дел.',
    features: [1,1,1,0,0,1,1,1,1,1,0,1,1]
  },
  {
    id: 'do-it-now',
    name: 'Do It Now',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/do-it-now.png',
    description: 'Хорош для пользователей, которым нравится игровой формат и прогресс.',
    features: [1,1,1,1,1,1,1,1,1,1,0,1,0]
  },
  {
    id: 'brite',
    name: 'Brite',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/brite.png',
    description: 'Комбинирует задачи, календарь и личное планирование в одном интерфейсе.',
    features: [1,1,1,1,1,1,0,1,1,1,0,0,0]
  },
  {
    id: 'tappsk',
    name: 'Tappsk',
    region: 'Зарубежное',
    screenshot: 'assets/screenshots/tappsk.png',
    description: 'Подходит для личных задач, привычек, повторений и ежедневного планирования.',
    features: [1,1,1,1,1,1,1,1,1,1,1,1,0]
  }
];

const answerSets = {
  need: [
    { value: 0, title: 'Не нужно', description: 'Эта возможность не нужна.' },
    { value: 1, title: 'Скорее нужно', description: 'Эта возможность желательна, но не главная.' },
    { value: 2, title: 'Нужно', description: 'Эта возможность важна для выбора.' },
    { value: 3, title: 'Очень нужно', description: 'Эта возможность должна сильно влиять на рекомендацию.' }
  ],
  neededPlural: [
    { value: 0, title: 'Не нужны', description: 'Эти возможности не нужны.' },
    { value: 1, title: 'Скорее нужны', description: 'Эти возможности желательны, но не главные.' },
    { value: 2, title: 'Нужны', description: 'Эти возможности важны для выбора.' },
    { value: 3, title: 'Очень нужны', description: 'Эти возможности должны сильно влиять на рекомендацию.' }
  ],
  neededMasculine: [
    { value: 0, title: 'Не нужен', description: 'Этот элемент не нужен.' },
    { value: 1, title: 'Скорее нужен', description: 'Этот элемент желателен, но не главный.' },
    { value: 2, title: 'Нужен', description: 'Этот элемент важен для выбора.' },
    { value: 3, title: 'Очень нужен', description: 'Этот элемент должен сильно влиять на рекомендацию.' }
  ],
  neededFeminine: [
    { value: 0, title: 'Не нужна', description: 'Эта возможность не нужна.' },
    { value: 1, title: 'Скорее нужна', description: 'Эта возможность желательна, но не главная.' },
    { value: 2, title: 'Нужна', description: 'Эта возможность важна для выбора.' },
    { value: 3, title: 'Очень нужна', description: 'Эта возможность должна сильно влиять на рекомендацию.' }
  ],
  important: [
    { value: 0, title: 'Не важно', description: 'Для Вас это не имеет значения.' },
    { value: 1, title: 'Скорее важно', description: 'Желательно, но не обязательно.' },
    { value: 2, title: 'Важно', description: 'Это заметно влияет на выбор.' },
    { value: 3, title: 'Очень важно', description: 'Без этого приложение будет неудобным.' }
  ]
};

const criteria = [
  {
    id: 'tasks',
    name: 'Есть возможность постановки задачи',
    userLabel: 'Отдельные задачи',
    question: 'Нужно ли быстро фиксировать отдельные задачи, а не только события в календаре?',
    answerSet: 'need',
    positive: 'Можно быстро создавать отдельные задачи',
    negative: 'Может быть неудобно быстро фиксировать отдельные задачи'
  },
  {
    id: 'reminders',
    name: 'Уведомления или напоминания о дедлайнах',
    userLabel: 'Напоминания о сроках',
    question: 'Насколько нужны уведомления или напоминания о дедлайнах?',
    answerSet: 'neededPlural',
    positive: 'Есть уведомления или напоминания о дедлайнах',
    negative: 'Напоминаний о дедлайнах может не хватить'
  },
  {
    id: 'fast-add',
    name: 'Скорость добавления задачи',
    userLabel: 'Быстрое добавление задач',
    question: 'Насколько важно добавлять новую задачу за пару действий?',
    answerSet: 'important',
    positive: 'Новую задачу можно добавить быстро',
    negative: 'Добавление задач может занимать больше времени'
  },
  {
    id: 'free',
    name: 'Бесплатное использование',
    userLabel: 'Бесплатное использование',
    question: 'Насколько важно, чтобы приложение можно было полноценно использовать бесплатно?',
    answerSet: 'important',
    positive: 'Есть бесплатное использование',
    negative: 'Часть нужных возможностей может быть платной'
  },
  {
    id: 'no-vpn',
    name: 'Работа без VPN',
    userLabel: 'Работа без VPN',
    question: 'Насколько важно, чтобы приложение стабильно работало без VPN?',
    answerSet: 'important',
    positive: 'Приложение рассчитано на работу без VPN',
    negative: 'Могут быть ограничения при использовании без VPN'
  },
  {
    id: 'calendar',
    name: 'Наличие календаря',
    userLabel: 'Календарь',
    question: 'Нужен ли встроенный календарь или календарное представление?',
    answerSet: 'neededMasculine',
    positive: 'Есть календарь или календарное представление',
    negative: 'Календарный вид может отсутствовать'
  },
  {
    id: 'progress',
    name: 'Инструменты отслеживания прогресса',
    userLabel: 'Отслеживание прогресса',
    question: 'Нужны ли инструменты для отслеживания прогресса выполнения задач?',
    answerSet: 'neededPlural',
    positive: 'Можно отслеживать прогресс выполнения задач',
    negative: 'Отслеживание прогресса может быть ограничено'
  },
  {
    id: 'easy-change',
    name: 'Простота изменения планов',
    userLabel: 'Изменение планов',
    question: 'Насколько важно быстро переносить, редактировать и менять планы?',
    answerSet: 'important',
    positive: 'Планы удобно переносить и редактировать',
    negative: 'Перенос и изменение планов могут быть не самыми удобными'
  },
  {
    id: 'recurring',
    name: 'Автоматическая постановка рутинных задач',
    userLabel: 'Повторяющиеся задачи',
    question: 'Нужна ли автоматическая постановка повторяющихся или рутинных задач?',
    answerSet: 'neededFeminine',
    positive: 'Можно настроить повторяющиеся задачи',
    negative: 'Повторяющиеся задачи могут быть реализованы слабо или отсутствовать'
  },
  {
    id: 'folders',
    name: 'Возможность разделить задачи по папкам / добавить теги',
    userLabel: 'Папки, списки или теги',
    question: 'Нужно ли разделять личные, учебные и рабочие задачи по папкам, спискам или тегам?',
    answerSet: 'need',
    positive: 'Задачи можно разделять по папкам, спискам или тегам',
    negative: 'Разделение задач по папкам, спискам или тегам может быть ограничено'
  },
  {
    id: 'no-ads',
    name: 'Отсутствие рекламы',
    userLabel: 'Без рекламы',
    question: 'Насколько важно отсутствие рекламы?',
    answerSet: 'important',
    positive: 'Нет рекламы',
    negative: 'В приложении может встречаться реклама'
  },
  {
    id: 'custom',
    name: 'Настройка форматирования задач под себя',
    userLabel: 'Настройка под себя',
    question: 'Насколько нужна настройка внешнего вида и формата задач под себя?',
    answerSet: 'neededFeminine',
    positive: 'Можно настраивать внешний вид и формат задач',
    negative: 'Настройка внешнего вида и формата задач может быть ограничена'
  },
  {
    id: 'desktop',
    name: 'Есть версия на ПК',
    userLabel: 'Версия на ПК',
    question: 'Насколько нужна версия приложения на ПК?',
    answerSet: 'neededFeminine',
    positive: 'Есть версия приложения на ПК',
    negative: 'Версии на ПК может не быть'
  }
];

const regionOptions = [
  { id: 'ru-only', title: 'Только российское', description: 'В подборе будут использоваться только российские приложения.', region: 'Российское', mode: 'only' },
  { id: 'ru-prefer', title: 'Российское желательно', description: 'Российские приложения будут рассматриваться в первую очередь.', region: 'Российское', mode: 'prefer' },
  { id: 'neutral', title: 'Страна не важна', description: 'Российские и зарубежные приложения будут рассматриваться на равных.', region: null, mode: 'none' },
  { id: 'foreign-prefer', title: 'Зарубежное желательно', description: 'Зарубежные приложения будут рассматриваться в первую очередь.', region: 'Зарубежное', mode: 'prefer' },
  { id: 'foreign-only', title: 'Только зарубежное', description: 'В подборе будут использоваться только зарубежные приложения.', region: 'Зарубежное', mode: 'only' }
];

const state = {
  regionChoice: 'neutral',
  weights: Array(criteria.length).fill(1),
  currentQuestion: 0,
  currentInterfacePair: 0,
  interfacePairs: [],
  interfaceChoices: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function getRegionOption() {
  return regionOptions.find(option => option.id === state.regionChoice) || regionOptions[2];
}

function getSelectedInterfaceIds() {
  return new Set(state.interfaceChoices.filter(Boolean));
}

function setScreen(name) {
  $$('.wizard-screen').forEach(screen => screen.classList.remove('active'));
  $(`#screen-${name}`).classList.add('active');
  const stepIndex = { region: 0, criteria: 1, interface: 2, result: 3 }[name];
  $$('.progress-step').forEach((step, index) => step.classList.toggle('active', index <= stepIndex));
  keepWorkAreaCentered(name);
}

function keepWorkAreaCentered() {
  // Автопрокрутка отключена: страница не двигается сама при переходе между этапами.
}

function renderRegionOptions() {
  const wrap = $('#region-options');
  wrap.innerHTML = regionOptions.map(option => `
    <article class="choice-card ${option.id === state.regionChoice ? 'selected' : ''}" data-region-id="${option.id}">
      <h3>${option.title}</h3>
      <p>${option.description}</p>
    </article>
  `).join('');

  wrap.querySelectorAll('.choice-card').forEach(card => {
    card.addEventListener('click', () => {
      state.regionChoice = card.dataset.regionId;
      state.interfaceChoices = [];
      state.interfacePairs = [];
      renderRegionOptions();
    });
  });
}

function renderQuestion() {
  const index = state.currentQuestion;
  const criterion = criteria[index];
  const options = answerSets[criterion.answerSet] || answerSets.important;

  $('#question-title').textContent = criterion.question;
  $('#criterion-label').textContent = criterion.userLabel;
  $('#question-counter').textContent = `${index + 1} / ${criteria.length}`;
  $('#prev-question').disabled = false;
  $('#prev-question').textContent = index === 0 ? 'Назад к стране' : 'Назад';
  $('#next-question').textContent = index === criteria.length - 1 ? 'К интерфейсам' : 'Дальше';

  $('#importance-options').innerHTML = options.map(option => `
    <article class="importance-card ${state.weights[index] === option.value ? 'selected' : ''}" data-value="${option.value}">
      <h3>${option.title}</h3>
      <p>${option.description}</p>
    </article>
  `).join('');

  $('#importance-options').querySelectorAll('.importance-card').forEach(card => {
    card.addEventListener('click', () => {
      state.weights[index] = Number(card.dataset.value);
      state.interfaceChoices = [];
      state.interfacePairs = [];
      renderQuestion();
    });
  });

  keepWorkAreaCentered('criteria');
}

function getCandidateApps() {
  const region = getRegionOption();
  if (region.mode === 'only') {
    return apps.filter(app => app.region === region.region);
  }
  return [...apps];
}

function scoreApp(app) {
  const region = getRegionOption();
  let earned = 0;
  let max = 0;

  criteria.forEach((criterion, index) => {
    const weight = state.weights[index];
    if (weight > 0) {
      max += weight;
      if (app.features[index] === 1) earned += weight;
    }
  });

  if (region.mode === 'prefer') {
    max += 3;
    if (app.region === region.region) earned += 3;
  }


  if (max === 0) return { earned: 0, max: 0, percent: 0 };
  return { earned, max, percent: Math.round((earned / max) * 100) };
}

function compareRank(a, b) {
  if (b.score.earned !== a.score.earned) return b.score.earned - a.score.earned;
  if (b.score.percent !== a.score.percent) return b.score.percent - a.score.percent;
  return a.name.localeCompare(b.name, 'ru');
}

function getRankedApps() {
  return getCandidateApps()
    .map(app => ({ ...app, score: scoreApp(app) }))
    .sort(compareRank);
}

function buildInterfacePairs() {
  const ranked = getRankedApps();
  const pairs = [];

  function addPair(leftIndex, rightIndex, label, resultPlace) {
    const left = ranked[leftIndex];
    const right = ranked[rightIndex];
    if (!left || !right) return;
    pairs.push({ left, right, label, resultPlace });
  }

  if (ranked.length >= 6) {
    addPair(4, 5, '5 и 6', 3);
    addPair(2, 3, '3 и 4', 2);
    addPair(0, 1, '1 и 2', 1);
  } else if (ranked.length >= 4) {
    addPair(2, 3, '3 и 4', 2);
    addPair(0, 1, '1 и 2', 1);
  } else if (ranked.length >= 2) {
    addPair(0, 1, '1 и 2', 1);
  }

  return pairs;
}

function prepareInterfaceStep() {
  state.interfacePairs = buildInterfacePairs();
  state.interfaceChoices = Array(state.interfacePairs.length).fill(null);
  state.currentInterfacePair = 0;
  renderInterfacePair();
}

function renderInterfacePair() {
  const pairs = state.interfacePairs.length ? state.interfacePairs : buildInterfacePairs();
  state.interfacePairs = pairs;
  const pair = pairs[state.currentInterfacePair];
  if (!pair) {
    const ranked = getRankedApps();
    const firstApp = ranked[0];
    $('#interface-counter').textContent = '0 / 0';
    $('#interface-pair-title').textContent = 'Интерфейс выбирать не нужно';
    $('#screenshot-options').innerHTML = firstApp ? `
      <article class="shot-card selected">
        <img src="${firstApp.screenshot}" alt="Превью интерфейса ${firstApp.name}">
        <div class="shot-body">
          <div class="shot-title">
            <h3>${firstApp.name}</h3>
            <span class="region-tag">${firstApp.region}</span>
          </div>
          <p>${firstApp.description}</p>
          <div class="shot-score">По Вашим ответам найден один основной вариант. Остальные рекомендации будут подобраны из ближайших.</div>
        </div>
      </article>
    ` : '<p class="screen-text">Точных вариантов перед этапом интерфейса нет. Будут показаны 3 ближайшие рекомендации.</p>';
    $('#prev-interface').textContent = 'Назад к критериям';
    $('#next-interface').textContent = 'Показать рекомендации';
    $('#next-interface').disabled = false;
    return;
  }

  $('#interface-counter').textContent = `${state.currentInterfacePair + 1} / ${pairs.length}`;
  $('#interface-pair-title').textContent = 'Какой интерфейс Вам больше нравится?';
  $('#prev-interface').textContent = state.currentInterfacePair === 0 ? 'Назад к критериям' : 'Назад';
  $('#next-interface').textContent = state.currentInterfacePair === pairs.length - 1 ? 'Показать рекомендации' : 'Дальше';
  $('#next-interface').disabled = !state.interfaceChoices[state.currentInterfacePair];

  $('#screenshot-options').innerHTML = [pair.left, pair.right].map(app => `
    <article class="shot-card ${state.interfaceChoices[state.currentInterfacePair] === app.id ? 'selected' : ''}" data-app-id="${app.id}">
      <img src="${app.screenshot}" alt="Превью интерфейса ${app.name}">
      <div class="shot-body">
        <div class="shot-title">
          <h3>${app.name}</h3>
          <span class="region-tag">${app.region}</span>
        </div>
        <p>${app.description}</p>
      </div>
    </article>
  `).join('');

  $('#screenshot-options').querySelectorAll('.shot-card').forEach(card => {
    card.addEventListener('click', () => {
      state.interfaceChoices[state.currentInterfacePair] = card.dataset.appId;
      renderInterfacePair();
    });
  });

  keepWorkAreaCentered('interface');
}

function getMatched(app) {
  return criteria
    .map((criterion, index) => ({ text: criterion.positive, weight: state.weights[index], has: app.features[index] === 1 }))
    .filter(item => item.weight > 0 && item.has)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5)
    .map(item => item.text);
}

function getMissing(app) {
  return criteria
    .map((criterion, index) => ({ text: criterion.negative, weight: state.weights[index], has: app.features[index] === 1 }))
    .filter(item => item.weight > 0 && !item.has)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 4)
    .map(item => item.text);
}

function getScoredAppById(id) {
  const app = apps.find(item => item.id === id);
  return app ? { ...app, score: scoreApp(app) } : null;
}

function getAllRankedApps() {
  return apps
    .map(app => ({ ...app, score: scoreApp(app) }))
    .sort(compareRank);
}

function buildFinalRecommendations() {
  const resultSlots = Array(3).fill(null);
  const used = new Set();

  function placeInSlot(app, slotIndex) {
    if (!app || used.has(app.id) || slotIndex < 0 || slotIndex >= resultSlots.length) return;
    used.add(app.id);
    resultSlots[slotIndex] = app;
  }

  function addToFirstFreeSlot(app) {
    if (!app || used.has(app.id)) return;
    const freeIndex = resultSlots.findIndex(item => item === null);
    if (freeIndex === -1) return;
    used.add(app.id);
    resultSlots[freeIndex] = app;
  }

  state.interfacePairs.forEach((pair, index) => {
    const chosenId = state.interfaceChoices[index];
    if (!chosenId) return;
    const chosenApp = getScoredAppById(chosenId);
    placeInSlot({ ...chosenApp, source: 'chosen' }, pair.resultPlace - 1);
  });

  const rankedCandidates = getRankedApps().map(app => ({ ...app, source: 'closest' }));
  const rankedAll = getAllRankedApps().map(app => ({ ...app, source: 'closest' }));

  rankedCandidates.forEach(addToFirstFreeSlot);
  rankedAll.forEach(addToFirstFreeSlot);

  return resultSlots.filter(Boolean).slice(0, 3);
}

function getScoreClass(percent) {
  if (percent >= 80) return 'score-high';
  if (percent >= 55) return 'score-mid';
  return 'score-low';
}

function renderResults() {
  const recommendations = buildFinalRecommendations();

  if (!recommendations.length) {
    $('#result-list').innerHTML = `
      <article class="result-card">
        <div>
          <h3>Рекомендации не сформированы</h3>
          <p>Вернитесь к вопросам и немного измените ответы, чтобы получить варианты для сравнения.</p>
        </div>
      </article>
    `;
    return;
  }

  $('#result-list').innerHTML = recommendations.map((app, index) => {
    const matched = getMatched(app);
    const missing = getMissing(app);

    return `
      <article class="result-card">
        <img src="${app.screenshot}" alt="Превью интерфейса ${app.name}">
        <div>
          <h3>${index + 1}. ${app.name}</h3>
          <div class="result-meta">
            <span class="score ${getScoreClass(app.score.percent)}">Совпадение: ${app.score.percent}%</span>
            <span class="badge">${app.region}</span>
          </div>
          <p>${app.description}</p>
          <div class="match-columns">
            <div class="match-box good-box">
              <h4>Что хорошо подходит</h4>
              <ul>
                ${matched.length ? matched.slice(0, 4).map(item => `<li>${item}</li>`).join('') : '<li>Основные пожелания не были выделены, поэтому вариант подобран по общей близости к ответам.</li>'}
              </ul>
            </div>
            <div class="match-box caution-box">
              <h4>Что лучше проверить</h4>
              <ul>${missing.length ? missing.map(item => `<li>${item}</li>`).join('') : '<li>По выбранным ответам заметных ограничений не найдено.</li>'}</ul>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function attachEvents() {
  $('#to-criteria').addEventListener('click', () => {
    setScreen('criteria');
    renderQuestion();
  });

  $('#prev-question').addEventListener('click', () => {
    if (state.currentQuestion > 0) {
      state.currentQuestion -= 1;
      renderQuestion();
    } else {
      setScreen('region');
    }
  });

  $('#next-question').addEventListener('click', () => {
    if (state.currentQuestion < criteria.length - 1) {
      state.currentQuestion += 1;
      renderQuestion();
    } else {
      prepareInterfaceStep();
      setScreen('interface');
    }
  });

  $('#prev-interface').addEventListener('click', () => {
    if (state.currentInterfacePair > 0) {
      state.currentInterfacePair -= 1;
      renderInterfacePair();
    } else {
      state.currentQuestion = criteria.length - 1;
      setScreen('criteria');
      renderQuestion();
    }
  });

  $('#next-interface').addEventListener('click', () => {
    if (state.interfacePairs.length && !state.interfaceChoices[state.currentInterfacePair]) {
      return;
    }
    if (state.currentInterfacePair < state.interfacePairs.length - 1) {
      state.currentInterfacePair += 1;
      renderInterfacePair();
    } else {
      renderResults();
      setScreen('result');
    }
  });

  $('#back-to-interface').addEventListener('click', () => {
    if (!state.interfacePairs.length) prepareInterfaceStep();
    state.currentInterfacePair = Math.max(0, state.interfacePairs.length - 1);
    renderInterfacePair();
    setScreen('interface');
  });

  $('#restart').addEventListener('click', () => {
    state.regionChoice = 'neutral';
    state.weights = Array(criteria.length).fill(1);
    state.currentQuestion = 0;
    state.currentInterfacePair = 0;
    state.interfacePairs = [];
    state.interfaceChoices = [];
    renderRegionOptions();
    setScreen('region');
  });

}

renderRegionOptions();
attachEvents();
