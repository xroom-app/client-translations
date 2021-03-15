module.exports = {
  self: 'xroom',
  title: 'Your secure workspace',
  goToDash: 'Go to Dashboard',
  netStatus: 'Connection',
  buttons: {
    ok: 'Okay',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
    chN: 'Choice %s',
    install: 'Install',
    uninstall: 'Uninstall',
    details: 'View details',
    close: 'Close',
    next: 'Next',
    back: 'Back',
    retry: 'Retry',
    dismiss: 'Dismiss',
    allow: 'Allow',
    stop: 'Stop',
  },
  mbox: {
    protoExpired: 'The client version is old. Please press Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 to reload. If you then see this message again, please clear your browser\'s cache manually.',
    areYouSure: 'Are you sure?',
    noPermission: 'Cannot acquire permissions from your browser. Please ensure that they are not blocked.',
    mediaBlocked: 'Camera access is blocked. Please check that you are not using it in another browser or program.',
    mediaError: 'We could not identify the problem, but something is wrong. Please check your browser permissions.',
    whatIsYourName: 'What is your name?',
    noPeers: 'Messages do not use xroom.app servers to send and cannot be redelivered after newly added guests connect. Please wait until others have joined the conversation to send messages. ',
    password: 'Set room password',
    roomLocked: 'This room is locked. Do you want to knock to get in?',
    roomProtected: 'This room is protected with a password. Please enter it below.',
    roomIsFull: 'The room is full. You cannot enter.',
    alreadyHosted: 'You are already in the room. You are probably testing with several browser tabs open at once. Do you want to enter? Host features may not work here.',
    youAreKicked: 'You have been removed from this room.',
    setQFailed: 'Failed to set the requested quality. Your hardware or browser may not support it.',
    bookingEnded: 'This booking is now over. The room is booked for another event, so you will now be redirected to another room to be able to finish your meeting.',
    bookingEndedHost: 'The current booking for this room is soon over. A choice must now be made as another booking has been scheduled using the same room name.<br/><br/>1. Go to a new meeting. We will direct you to the dashboard to enter the meeting with a new host key.<br/><br/>2. Stay in the meeting. We will create a new room for you to finish this call.',
    pluginsLoadFailed: 'Failed loading plugins',
    roomDestroyed: 'The room has been deleted. You will be redirected to the starting page.',
    encInfo: 'Encryption: end-to-end, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Encryption not supported',
    avaTooBig: 'Avatar file size is too big. Please use simple vector images.',
    cannotLoadPlugin: 'Plugin "%s" does not support your browser',
    confirmLeave: 'Are you sure you want to leave the call?',
    confirmDestroy: 'Are you sure you would like to end the meeting for all participants?',
    feedbackDetected: 'We have detected microphone feedback noises and muted you automatically. We suggest you use headphones or that you keep your mic off until entering the room.',
    guestKnock: 'User <b>%s</b> wants to get in. Allow in?<br/>You can decide later in the waiting room tab.',
    safariNotSupported: 'This feature is temporarily not supported in Safari.',
  },
  notify: {
    slowPlugins: 'Too many plugins can cause slower loading times. Consider removing the largest.',
    peerLost: 'Reconnecting with %s...',
    roomLocked: 'Room locked 🔒',
    roomUnlocked: 'Room unlocked 🔓',
    roomPwdSet: 'Room password set 🔑',
    roomPwdReset: 'Room password cleared',
    devicesChanged: 'Devices changed',
    hostMutedAudio: 'Host muted your microphone',
    hostMutedVideo: 'Host turned off your camera',
  },
  modes: {
    1: 'Conference — everyone can speak',
    2: 'Webinar — one speaks, others listen',
  },
  placements: {
    1: 'Grid view',
    2: 'Mini-me',
    3: 'Spotlight',
  },
  perm: {
    head: 'Allow browser permissions',
    video: 'Video',
    audio: 'Audio',
    notif: 'Notifications',
  },
  videoMenu: {
    hint: 'Toggle menu',
    expand: 'Expand',
    pip: 'Keep on top',
    fullscreen: 'Full screen',
    fullscreenOff: 'Exit full screen',
    volume: 'Volume',
    restore: 'Restore',
    kick: 'Remove participant',
    mute: 'Mute (only for you)',
    unmute: 'Unmute',
    pm: 'Private chat',
    makeHost: 'Pass host role',
  },
  controls: {
    sharing: 'Sharing',
    cam: 'Camera',
    mic: 'Microphone ("m")',
    chat: 'Chat ("Enter")',
    exit: 'Leave',
    destroy: 'End meeting',
    settings: 'Settings',
    plugin: 'Plugins',
    dots: 'Context menu',
    invite: 'Invite',
    ss: 'Share screen ("s")',
    stopSharing: 'Stop sharing ("s")',
    board: 'Whiteboard',
    hand: 'Raise hand',
    lock: 'Locking',
    layouts: 'Placement',
    emoji: 'Emojis',
    attach: 'Attach a file',
    setLock: 'Lock the room',
    resetLock: 'Unlock the room',
    setPwd: 'Set a password',
    rotate: 'Back/Front camera',
    more: 'More',
    users: 'Participants',
  },
  reactions: {
    handRaised: 'User %s wants to speak 🎤',
  },
  video: {
    you: 'You (click to name)',
    sharing: 'You are sharing your screen',
  },
  settings: {
    tabs: {
      audio: 'Audio',
      video: 'Video',
      general: 'General',
      help: 'Help',
      chat: 'Chat',
      peers: 'Participants',
      lobby: 'Waiting room',
    },
    audioQ: 'Max sample rate',
    videoQ: 'Max video quality',
    screenQ: 'Max screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    soundEffects: 'Sound effects',
    audioDevices: 'Audio sources',
    videoDevices: 'Video sources',
    language: 'Language',
    theme: 'Color theme',
    requestAudio: 'Request audio permission',
    requestVideo: 'Request video permission',
    testOutput: 'Test audio output',
    flipFace: 'Mirror your camera preview',
    requireName: 'Require name',
    debug: 'Debug mode',
    noPreview: 'Start chats without preview',
    menuPos: 'Menu placement',
    menuPosO: {
      1: 'top',
      2: 'bottom',
    },
  },
  home: {
    title: 'Your personal conference room',
    btnGo: 'Go!',
    nameRoom: 'name your room:',
    placeholder: 'type here',
    rejoinRoom: 'or rejoin',
    poweredBy: 'Powered by ',
    roomHint: 'Enter room name please',
  },
  pre: {
    selectMode: 'Choose meeting type',
    selectedMode: 'Meeting type',
    btnGo: 'Get in',
    btnPreview: 'Preview',
    allSettings: 'Open all settings',
    avaPicker: 'Choose avatar (shows when video is off)',
    sizeLimitReached: 'This room is limited in size and the limit has been reached',
    roomBooked: 'There is going to be an event in this room soon: <span>%s</span>.<br/>Please stand by until the meeting begins.',
    roomInfo: 'Room info',
    phInfo: 'Enter room info',
    pendingAdmission: 'Please wait until the host lets you in.',
  },
  inviter: {
    info: 'Share the link below to invite others to the meeting.',
    head: 'Room link:',
    btnCopy: 'Copy link',
    btnShare: 'Share link',
    ntfCopied: 'The link has been copied!',
  },
  chat: {
    publicChat: 'Public chat',
    chatWith: 'Chat with %s',
    fileSending: 'Sending file: ',
    fileReceived: 'File received: ',
    phInput: 'Write a message...',
    me: 'me',
    dropMe: 'Drop me!',
    atTime: 'at %s',
  },
  peers: {
    muteOnEntry: 'Mute participants on entry',
    camsOff: 'Turn off all videos',
    micsOff: 'Mute all',
  },
  knockers: {
    phEmpty: 'If someone knocks to enter your room they will appear here, waiting for your approval.',
  },
  webinar: {
    peersCount: {
      one: '%s person is watching',
      many: '%s persons are watching',
    },
  },
  plugins: {
    by: 'by',
    size: 'Size: %s kB',
    phSearch: 'search...',
    source: 'Source code: ',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    btnAdd: 'Add own',
    add: {
      title: 'Add new plugin',
      descr: '⚙️ Developing a new plugin? Add it here to test. It is not saved anywhere, but in your browser.',
      name: 'What\'s the plugin name?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Yaay! It\'s loaded!',
      loadFailed: 'Failed loading plugin',
    }
  },
  help: {
    sevenTips: 'Top 7 Issues/Fixes',
    connIssues: 'Connection issues',
    laggyMedia: 'Laggy audio/video',
    unlockMedia: 'Unblock camera/mic',
    faq: 'Go to FAQ',
    submitFeature: 'Request a feature',
  },
}
