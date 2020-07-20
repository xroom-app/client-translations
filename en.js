export default {
  self: 'xroom',
  on: 'on',
  off: 'off',
  title: 'Need a conf room?',
  buttons: {
    ok: 'OK',
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    retry: 'Retry',
    chooseWindow: 'Choose a window',
    wholeScreen: 'Whole screen',
    install: 'Add',
    uninstall: 'Remove',
    send: 'Send',
    close: 'Close',
    hide: 'Hide',
    knock: 'Knock-knock',
    allowIn: 'Allow in',
    deny: 'Deny',
    enterAnyway: 'Enter anyway',
  },
  mbox: {
    notSupported: 'It looks like this browser does not support XROOM or WebRTC is disabled. 😢',
    success: 'Operation succeeded',
    failure: 'Operation failed',
    enterRoomName: 'Enter a room name please',
    isCamOn: 'Is camera on?',
    isCamOnText: 'Please check that you have not accidentally blocked your camera/mic on this site and press "Retry".',
    isMicOn: 'Is microphone on?',
    isMicOnText: 'If you plan to talk we need your mic permission. Allow it on this page and press "Retry".',
    iWillOnlyWatch: 'I will watch only',
    iWillOnlyListen: 'I will listen only',
    screenSharingText: 'Screen sharing is not allowed. Please ensure it is not blocked for this page.<br><br>Also this feature is only supported by modern browsers like Chrome or Firefox.',
    cannotFile: 'Since we don\'t even touch your files we cannot deliver them after someone connects. You need to do it when people are in.',
    cannotMessage: 'Since we don\'t even touch your messages we cannot deliver them after someone connects. You need to do it when people are in.',
    roomLockedText: 'This room is locked',
    oops: 'Sorry',
    kickedOutText: 'You have been kicked out',
    areYouSure: 'Are you sure?',
    restartRequiredText: 'This setting affects too much stuff, a so a reload is required. That\'s quick, don\'t worry!',
    onlySafariOnIOS: 'On iOS only Safari is supported. "Thank you", Apple!',
    cannotLoadPlugin: 'Plugin "%s" does not support your browser',
    confirmFileSend: 'Do you want to send this?',
    whatIsYourName: 'Enter your name',
    setVideoVolume: 'Set volume for this video',
    roomLockedTryKnockText: 'Room is currently locked. You can ask for a permission to enter by "knocking" the door.',
    knockingFailedText: 'Knocking attempt failed',
    doYouWantToKick: 'Do you want to kick this user?',
    deviceChanged: 'You have attached/removed a new input device. If it does not work choose it manually from Settings.',
    allowCameraPlz: 'After you press OK please <b>allow</b> xroom to use your camera.<br><br>Don\'t worry! You will be able to turn it off again before entering the room from the menu at the bottom if you want to stay invisible.',
    tooOldBrowser: 'Your browser is too old or is produced by Microsoft. Many features may be missing.',
    pluginsLoadFailed: 'Failed loading plugins',
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 to reload. If you then see this message again please clear browser cache manually.',
    peerError: 'Something went wrong when exchanging data with your peers. We suggest reloading the page.',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'User %s suggested you to install plugin %s. Do you wish to do it?',
    hostRoleRequired: 'Host role is required for this action.',
    alreadyHosted: 'Room is already hosted. Do not enter the same room from 2 browser tabs. 😉',
    roomLockedPassword: 'Room is currently locked with a password. Enter it below if you know it.',
    roomDestroyed: 'Room has been destroyed. You will be redirected to the starting page.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
  },
  notify: {
    slowPlugins: 'Plugins take too much time to load. Consider removing the heaviest.',
  },
  home: {
    nisdos: 'We do not use cookies',
    title: 'Your personal conference room',
    btnGo: 'Go!',
    knowMore: 'About xroom',
    nameRoom: 'name your room:',
    placeholder: 'type here',
    rejoinRoom: 'or rejoin',
  },
  wl: {
    poweredBy: 'Powered by ',
  },
  modes: {
    1: 'Conference',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Choose room type',
    checkIt: 'Check your mic and haircut',
    btnGo: 'Get in',
    knockDenied: 'Your knock request has been denied. You can\'t enter the room. :(',
    knockRequested: 'Awaiting for a permission. People can see you through a peephole. 👀',
    noAudio: '⚠️ No mic signal detected',
    roomIsBusyWebinar: '<span>A webinar/stream is now running</span> <span>(%s×🙂 / %s×🤖)</span>',
    roomIsBusyConference: '<span>A conference is now running</span> <span>(%s×🙂 / %s×🤖)</span>',
    sizeLimitReached: 'This room was limited by size and the limit is reached',
  },
  videoMenu: {
    hint: 'Toggle menu',
    expand: 'Expand',
    fullscreen: 'Full screen',
    volume: 'Volume ±',
    restore: 'Restore',
    kick: 'Kick',
    mute: 'Mute',
  },
  controls: {
    ss: 'Screen sharing %s',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Exit',
    destroy: 'Destroy',
    xroom: 'Powered by xroom',
    settings: 'Settings',
    plugins: 'Plugins',
    media: 'Media',
    more: 'More',
    letMeSpeak: 'Let me speak',
  },
  reactions: {
    letMeSpeak: 'I want to speak!',
  },
  waiting: {
    invite: 'Invite your colleagues',
    beforeCopy: 'click to copy',
    afterCopy: 'Copied. Now share it!',
    webinar: 'Webinar not started yet',
  },
  video: {
    you: 'You (click to name)',
    someone: 'Someone',
    knocking: 'is knocking...',
    poorNet: 'poor connection',
  },
  chat: {
    fileSending: 'Sending file: ',
    fileReceived: 'File received: ',
    inputPlaceholder: 'type a message and press enter ...',
    me: 'me',
    dropMe: 'Drop me!',
  },
  webinar: {
    peersCount: '%s people are watching',
  },
  settings: {
    experimental: '*) experimental, works unstably',
    showCameraWithScreen: 'Show camera during screen sharing *',
    qualityLevel: 'High quality (uses more traffic)',
    autoGetIn: 'Start chats without preview',
    soundEffects: 'Sound effects',
    noisyBackground: 'I am in a noisy place',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Audio sources',
    videoDevices: 'Video sources',
    language: 'Language',
    theme: 'Color theme',
    server: 'Server',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: 'by',
    size: 'size: %s kB',
    searchPlaceholder: 'search...',
    source: 'Source code',
    add: {
      title: 'Add new plugin',
      descr: '⚙️ Developing a new plugin? Add it here to test. It is not saved anywhere but in your browser. Plugins API manual is available <a href="https://github.com/xroom-app/client-plugins" target="_blank">here</a>.',
      name: 'What\'s the plugin name?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Yaay! It\'s loaded!',
      loadFailed: 'Failed loading plugin',
    }
  },
  tips: {
    prefix: 'Tip of the day: ',
    lines: [
      'Mute/unmute often? There\'s a hot key "m" for that.',
      'Double click a remote video to make it full screen.',
      'Need to lock your room? Just add the room locking in plugins below.',
      'Use Slack and want to save more time? Try out our <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Slack bot</a>.',
      'Miss video calls in Telegram? Our <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">Telegram bot</a> is there to help.',
      'Need to share a copied image? Ctrl+V in the chat, we\'ll cover the rest.',
      'Click your name to change it both locally and for your peers.',
      'Ever needed to record your screen with just a few clicks? Try our screen recording plugin.',
      'Need to sketch during a call — try out the sketching plugin. Don\'t forget to turn on screen sharing.',
      'Click your name or "You" to rename yourself for everyone.',
      'Click peer names to adjust their volume level.'
    ]
  },
}
