export default {
  self: 'xroom',
  on: 'увімк.',
  off: 'вимкн.',
  title: 'Шукаєш конфу?',
  buttons: {
    ok: 'OK',
    yes: 'Так',
    no: 'Ні',
    cancel: 'Скасувати',
    retry: 'Повторити',
    chooseWindow: 'Оберіть вікно',
    wholeScreen: 'Увесь екран',
    install: 'Підключити',
    uninstall: 'Відключити',
    send: 'Надіслати',
    close: 'Закрити',
    hide: 'Приховати',
    knock: 'Тук-тук!',
    allowIn: 'Впустити',
    deny: 'Не впускати',
    enterAnyway: 'Все одно ввійти',
  },
  mbox: {
    notSupported: 'Схоже, цей браузер не підтримує XROOM, або WebRTC відключений. 😢',
    success: 'Операція виконана',
    failure: 'Операція не вдалася',
    enterRoomName: 'Спочатку введіть назву кімнати',
    isCamOn: 'Камера працює?',
    isCamOnText: 'Перевірте, що камера і мікрофон не заблоковані, і натисність "Повторити".',
    isMicOn: 'Мікрофон працює?',
    isMicOnText: 'Якщо будете говорити, то дозвольте доступ до мікрофону на цій сторінці і натисніть "Повторити".',
    iWillOnlyWatch: 'Я хочу просто дивитися',
    iWillOnlyListen: 'Я хочу просто слухати',
    screenSharingText: 'Скріншерінг неможливий. Будь ласка, перевірте, що він не заблокований.<br><br>Також необхідний сучасний браузер, наприклад, Chrome або Firefox.',
    cannotFile: 'Оскільки ми не чіпаємо файлів, що призначені для користувачів, то і переслати їх не можемо. Ви маєте зробити це online, коли хтось з`явиться в чаті.',
    cannotMessage: 'Оскільки ми не чіпаємо повідомлення, що призначені для користувачів, то і переслати їх не можемо. Ви маєте зробити це online, коли хтось з`явиться в чаті.',
    roomLockedText: 'Ця кімната зачинена',
    oops: 'Ой',
    kickedOutText: 'Вас видалили з кімнати',
    areYouSure: 'Ви впевнені?',
    restartRequiredText: 'Це налаштування впливає на багато речей, тому нам потрібно швидко перезавантажити сторінку.',
    onlySafariOnIOS: 'На iOS необхідний Safari. Скажіть дякую Apple.',
    cannotLoadPlugin: 'Плагін "%s" не підтримується в цьому браузері',
    confirmFileSend: 'Надіслати це?',
    whatIsYourName: 'Введіть нове ім`я',
    setVideoVolume: 'Гучність для цього відео',
    roomLockedTryKnockText: 'Кімната зачинена. Ви можете постукати в двері, щоби вас запустили.',
    knockingFailedText: 'Не вдалося постукати в двері',
    doYouWantToKick: 'Ви точно хочете вигнати цього юзера?',
    deviceChanged: 'Був доданий/прибраний пристрій введення. Якщо він не працює, зайдіть у "Налаштування" і оберіть його вручну.',
    allowCameraPlz: 'Після натискання кнопки "ОК", будь ласка, <b>дозвольте</b> xroom використовувати камеру.<br><br>Не хвилюйтесь, якщо ви не хочете, аби вас бачили, то її можна буде без проблем вимкнути у меню знизу перед входом до кімнати.',
    tooOldBrowser: 'Ваш браузер застарів чи взагалі зроблений у Microsoft. Багато функцій можуть не працювати.',
    pluginsLoadFailed: 'Не вдалося завантажити плагіни.',
    protoExpired: 'Стара версія клієнта. Будь ласка, натисніть Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 для перезавантаження сторінки. Якщо це повідомлення з’явиться знову, спробуйте очистити кеш браузера.',
    peerError: 'Щось пішло не так при обміні даними з іншими учасниками. Спробуйте перезавантажити сторінку.',
    enterpriseOnly: 'Функція доступна тільки в корпоративній версії.',
    pluginSuggested: 'Користувач %s пропонує встановити плагін %s. Встановлюємо?',
    hostRoleRequired: 'Для цієї дії необхідна роль ведучого конференції',
    alreadyHosted: 'У кімнаті вже є власник. Не намагайтеся ввійти до кімнати з двох сторінок браузера. 😉',
    roomLockedPassword: 'Кімната зачинена під паролем. Введіть його, якщо знаєте.',
    roomDestroyed: 'Кімната була видалена. Зараз ми перенаправимо вас на головну сторінку.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
  },
  notify: {
    slowPlugins: 'Завантаження плагінів займає забагато часу. Спробуйте видалити найбільш великі.',
  },
  home: {
    nisdos: 'Ми не використовуємо кукі',
    title: 'Твоя відеоконференція на максималках',
    btnGo: 'Поїхали!',
    knowMore: 'Про xroom',
    nameRoom: 'назвіть кімнату:',
    placeholder: 'впишіть тут',
    rejoinRoom: 'або перезайти до',
  },
  wl: {
    poweredBy: 'Працює на ',
  },
  modes: {
    1: 'Конференція',
    2: 'Вебінар',
  },
  pre: {
    selectMode: 'Оберіть тип кімнати',
    checkIt: 'Перевірте зачіску та мікрофон',
    btnGo: 'Увійти',
    knockDenied: 'Ваш запит відхилено. Ви не можете ввійти до кімнати. :(',
    knockRequested: 'Очікуємо на дозвіл. Люди всередині бачать вас у дверне вічко.',
    noAudio: '⚠️ Мікрофон не працює',
    roomIsBusyWebinar: 'Вже йде стрім/вебінар (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Вже йде конференція (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Ця кімната була обмежена у розмірі, і максимум вже був досягнутий.',
  },
  videoMenu: {
    hint: 'Меню',
    expand: 'Розширити',
    fullscreen: 'На весь екран',
    volume: 'Гучність ±',
    restore: 'Відновити',
    kick: 'Кікнути',
    mute: 'Беззвучне',
  },
  controls: {
    ss: 'Екран %s',
    cam: 'Відео %s',
    mic: 'Звук %s',
    chat: 'Чат %s',
    exit: 'Вийти',
    destroy: 'Видалити кімнату',
    xroom: 'Працює на xroom',
    settings: 'Налаштування',
    plugins: 'Плагіни',
    media: 'Медіа',
    more: 'Більше',
    letMeSpeak: 'Дайте сказати',
  },
  reactions: {
    letMeSpeak: 'Я хочу сказати!',
  },
  waiting: {
    invite: 'Запросити співрозмовників',
    beforeCopy: 'клікніть, аби скопіювати',
    afterCopy: 'скопійовано!',
    webinar: 'Вебінар ще не почався',
  },
  video: {
    you: 'Ти',
    someone: 'Хтось',
    knocking: 'стукає...',
    poorNet: 'поганий зв`язок',
  },
  chat: {
    fileSending: 'Відправка файлу: ',
    fileReceived: 'Отримано файл: ',
    inputPlaceholder: 'натисніть enter для відправки ...',
    me: 'я',
    dropMe: 'Дропай файл!',
  },
  webinar: {
    peersCount: '%s людей дивляться',
  },
  settings: {
    experimental: '*) експериментальна фіча, працює нестабільно',
    showCameraWithScreen: 'Камеру видно під час скріншерінгу *',
    qualityLevel: 'Висока якість (потрібен гарний інет)',
    autoGetIn: 'Заходити до чату без прев`ю',
    soundEffects: 'Звукові ефекти',
    noisyBackground: 'Я в шумному місці',
    rtcDebug: 'Налагодження RTC',
    audioDevices: 'Аудіо джерела',
    videoDevices: 'Відео джерела',
    language: 'Мова',
    theme: 'Кольорова тема',
    server: 'Сервер',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: 'від',
    size: '%s кБ',
    searchPlaceholder: 'шукати...',
    source: 'Вихідний код',
    add: {
      title: 'Додати свій плагін',
      descr: '⚙️ Разроблюєш плагін? Додай його тут для тестування. Тут він не зберігається, просто оновивши сторінку, можна вивантажити його з пам`яті. Документація на API для плагінов доступна <a href="https://github.com/xroom-app/client-plugins" target="_blank">ось тут</a>.',
      name: 'Як називається плагін?',
      rootUrl: 'Де кореневий URL?',
      loaded: 'Урааа! Завантажилось!',
      loadFailed: 'Щось пішло не так.',
    }
  },
  tips: {
    prefix: 'Порада дня: ',
    lines: [
      'Часто вмикаєте/вимикаєте звук? Спробуйте гарячу клавішу "m".',
      'Подвійний клік мишкою по відео, і воно з`явиться на повний екран.',
      'Треба зачинити кімнату? Додайте "Room locking" у плагінах знизу.',
      'Використовуєте Slack і хочете зекономити час? Спробуйте нашого <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Slack-бота</a>.',
      'Не вистачає відео в Телеграмі? Наш <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">Телеграм-бот</a> допоможе вам.',
      'Потрібно швидко поділитися зкопійованою картинкою? Ctrl+V у чаті, решту ми зробимо.',
      'Для зміни назви клікніть по ній. Нове ім`я побачать всі у кімнаті.',
      'Шукаєте програму для запису екрану в декілька кліків? Спробуйте для цього наш плагін.',
      'Потрібно щось малювати під час дзвінка? — спробуйте плагін "Sketcher". Не забувайте, звісно, розшарювати екран.',
    ]
  }
}
