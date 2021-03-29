module.exports = {
  self: 'xroom',
  title: 'Votre espace sécurisé',
  goToDash: 'Dashboard',
  netStatus: 'Connexion',
  buttons: {
    ok: 'D\'accord',
    cancel: 'Annuler',
    yes: 'Oui',
    no: 'Non',
    chN: 'Choix %s',
    install: 'Ajouter',
    uninstall: 'Supprimer',
    details: 'Voir les détails',
    close: 'Fermer',
    next: 'Suivant',
    back: 'Retour',
    retry: 'Réessayer',
    dismiss: 'Rejeter',
    allow: 'Autoriser',
    stop: 'Arrêter',
    decideLater: 'Décider plus tard',
  },
  mbox: {
    protoExpired: 'La version est obsolète. Appuyez sur Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 pour relancer. Si vous voyez toujours ce message, merci de supprimer le cache de votre navigateur.',
    areYouSure: 'Êtes vous sur ?',
    noPermission: 'Votre navigateur ne nous donne la permission. Merci de vérifier que nous ne sommes pas bloqué.',
    mediaBlocked: 'Nous n\'avons pas accès à votre Camera. Merci de vérifier la configuration.',
    mediaError: 'Nous n\'arrivons pas à détecter le problème. Merci de vérifier les réglages de votre navigateur.',
    whatIsYourName: 'Quel est votre nom ?',
    noPeers: 'Étant donné que nous ne stockons pas vos messages, nous ne pouvons pas les délivrer après la connexion d\'un utilisateur. Vous devez le faire lorsque les utilisateurs sont présents.',
    password: 'Définissez un mot de passe',
    roomLocked: 'La salle est actuellement verrouillée. Vous pouvez demander la permission d’entrer ?',
    roomProtected: 'La salle est actuellement verrouillée avec un mot de passe. Entrez-le ci-dessous si vous le connaissez.',
    roomIsFull: 'Cette salle est pleine. Vous ne pouvez pas y accéder.',
    alreadyHosted: 'Vous êtes déjà dans une réunion. Vous avez probablement plusieurs réunions ouvertes. Voulez-vous entrer ?',
    youAreKicked: 'Vous avez été éjecté de la réunion.',
    setQFailed: 'Impossible de définir la qualité demandée. Votre matériel ou votre navigateur ne le supporte peut-être pas.',
    bookingEnded: 'Cette room est réservée pour un autre événement. Vous allez donc être redirigé vers une autre salle pour pouvoir terminer votre réunion.',
    bookingEndedHost: 'La réservation actuelle pour cette salle est bientôt terminée. Il faut maintenant faire un choix car une autre réservation a été programmée avec le même nom de salle.<br/><br/>1. Créer une nouvelle réunion. Nous vous dirigerons vers le tableau de bord pour créer une nouvelle réunion.<br/><br/>2. Rester dans la réunion. Nous allons créer une nouvelle salle pour vous permettre de terminer cet appel.',
    pluginsLoadFailed: 'Le chargement des plugins a échoué',
    roomDestroyed: 'La réunion a été supprimée. Vous allez être redirigé vers le dashboard.',
    encInfo: 'Chiffrement : bout-en-bout, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Chiffrement non supporté',
    avaTooBig: 'La taille du fichier Avatar est trop importante. Veuillez utiliser des images moins volumineuses à la place.',
    cannotLoadPlugin: 'Le plugin "%s" n\'est pas compatible avec votre navigateur.',
    confirmLeave: 'Êtes vous sûr de vouloir quitter la réunion ?',
    confirmDestroy: 'Êtes-vous sûr de vouloir mettre fin à la réunion pour tous les participants ?',
    feedbackDetected: 'Nous avons coupé automatiquement votre microphone car avons détecté des bruits parasites. Nous vous suggérons d\'utiliser des écouteurs ou de garder votre micro éteint jusqu\'à ce que vous entriez dans la réunion.',
    guestKnock: '<b>%s</b> veut entrer, l\'accepter ?<br/>Vous pouvez décider plus tard dans l\'onglet de la salle d\'attente.',
    safariNotSupported: 'Cette fonctionnalité n\'est temporairement pas prise en charge par Safari.',
    takeOverSharing: 'Si vous partagez votre écran, cela mettra fin à la session en cours de la personne qui partage actuellement.',
    p2pInfo: 'P2P mode disables the use of our centralized servers.<br/><u>Room stability will then be dependent on your network.</u><br/>Recommended for private meetings of 2 people.',
  },
  notify: {
    slowPlugins: 'Un trop grand nombre de plugins peut entraîner un ralentissement des temps de chargement. Envisagez de supprimer les plus volumineux',
    peerLost: 'Se reconnecter avec %s...',
    roomLocked: 'Réunion verrouillée 🔒',
    roomUnlocked: 'Réunion déverrouillée 🔓',
    roomPwdSet: 'Un mot de passe est défini pour la réunion 🔑',
    roomPwdReset: 'Mot de passe de la réunion supprimé',
    devicesChanged: 'Appareils modifiés',
    hostMutedAudio: 'L\'hôte a coupé votre micro',
    hostMutedVideo: 'L\'hôte a désactivé votre caméra',
    incomingFile: 'Fichier entrant...',
  },
  hint: {
    p2p: '<u>xroom.app</u> uses servers to ensure high quality transmissions during your meetings.<br/><br/>• We never have access to your communications in this mode.<br/><br/>• All data sent through our servers is encrypted and locked with keys only you and your guests have access to<br/><br/><u>If you require maximum security,</u> you may disable our servers and instead use Peer-to-Peer mode.<br/><br/>• In this mode video and audio are sent directly between you and your guests without using xroom.app servers.<br/><br/>• We recommend using peer-to-peer mode when you anticipate having a 1:1 meeting.',
  },
  modes: {
    '1': 'Conférence - Tout le monde peut participer',
    '2': 'Webinaire - Un seul présentateur, les autres écoutent',
  },
  placements: {
    '1': 'Mode Grille',
    '2': 'Mode Vignette',
    '3': 'Mettre en avant',
  },
  perm: {
    head: 'Voir les autorisations navigateur',
    video: 'Vidéo',
    audio: 'Audio',
    notif: 'Notifications',
  },
  videoMenu: {
    hint: 'Menu',
    expand: 'Agrandir',
    pip: 'Être mis en avant',
    fullscreen: 'Plein Écran',
    fullscreenOff: 'Quitter le mode plein écran',
    volume: 'Volume',
    restore: 'Restaurer',
    kick: 'Éjecter le participant',
    mute: 'Silence (seulement pour vous)',
    unmute: 'Réactiver le son',
    pm: 'Chat privé',
    makeHost: 'Désigner comme hôte',
  },
  controls: {
    sharing: 'Partager',
    cam: 'Caméra',
    mic: 'Microphone',
    chat: 'Chat',
    exit: 'Quitter',
    destroy: 'Mettre fin à la réunion',
    settings: 'Réglages',
    plugin: 'Plugins',
    dots: 'Menu',
    invite: 'Inviter',
    ss: 'Partage d\'écran',
    stopSharing: 'Arrêter le partage',
    board: 'Whiteboard',
    hand: 'Lever la main',
    lock: 'Verrouiller',
    layouts: 'Affichage',
    emoji: 'Emojis',
    attach: 'Joindre un fichier',
    setLock: 'Verrouiller la réunion',
    resetLock: 'Déverrouiller la réunion',
    setPwd: 'Définir un mot de passe',
    rotate: 'Tourner la caméra',
    more: 'Plus',
    users: 'Participants',
  },
  reactions: {
    handRaised: '%s souhaite prendre la parole 🎤',
  },
  video: {
    you: 'Vous (cliquez pour renommer)',
    sharing: 'Vous partagez votre écran',
  },
  settings: {
    tabs: {
      audio: 'Audio',
      video: 'Vidéo',
      general: 'Général',
      help: 'Aide',
      chat: 'Chat',
      peers: 'Participants',
      lobby: 'Salle d\'attente',
    },
    audioQ: 'Qualité Audio',
    videoQ: 'Qualité vidéo',
    screenQ: 'Qualité partage d\'écran',
    bandwidthQ: 'Réseau',
    soundEffects: 'Effet audio',
    audioDevices: 'Source Audio',
    videoDevices: 'Source Vidéo',
    language: 'Langue',
    theme: 'Thème',
    requestAudio: 'Permission audio requise',
    requestVideo: 'Permission vidéo requise',
    testOutput: 'Tester la sortie audio',
    flipFace: 'Effet miroir',
    requireName: 'Nom requis',
    debug: 'Debug mode',
    noPreview: 'Démarrer un chat sans aperçu',
    menuPos: 'Menu affichage',
    menuPosO: {
      '1': 'en haut',
      '2': 'en bas',
    },
  },
  home: {
    title: 'Votre salle personnelle de conférence',
    btnGo: 'Démarrer',
    nameRoom: 'nom de votre réunion :',
    placeholder: 'écrivez ici',
    rejoinRoom: 'ou rejoindre',
    poweredBy: 'Powered by <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Entrer un nom de réunion',
  },
  pre: {
    selectMode: 'Choisir le type de réunion',
    selectedMode: 'Type de réunion',
    btnGo: 'Entrer',
    btnPreview: 'Aperçu',
    avaPicker: 'Choisir un avatar (s\'affiche lorsque la vidéo est désactivée)',
    sizeLimitReached: 'Le nombre de participants est limité, la limite a été atteinte.',
    roomBooked: 'Il y aura bientôt un événement dans cette réunion: <span>%s</span>.<br/>Veuillez patienter jusqu\'a ce qu\'elle débute.',
    roomInfo: 'Infos sur la réunion',
    phInfo: 'Entrer les informations de la réunion',
    pendingAdmission: 'Veuillez attendre que l\'hôte vous laisse entrer.',
    p2pMode: 'Mode Peer-to-peer',
  },
  inviter: {
    info: 'Partagez le lien ci-dessous pour inviter d\'autres personnes à la réunion.',
    head: 'Lien de la réunion :',
    btnCopy: 'Copier le lien',
    btnShare: 'Partager le lien',
    ntfCopied: 'Le lien a été copié !',
  },
  chat: {
    publicChat: 'Chat',
    chatWith: 'Discuter avec %s',
    fileSending: 'Envoi du fichier : ',
    fileReceived: 'Fichier reçu : ',
    phInput: 'Écrire un message..',
    me: 'moi',
    dropMe: 'Glisser ici !',
    atTime: 'à %s',
  },
  peers: {
    muteOnEntry: 'Couper le micro des participants à l\'entrée',
    camsOff: 'Désactiver toutes les caméras',
    micsOff: 'Désactiver tous les micros',
  },
  knockers: {
    phEmpty: 'Si quelqu\'un souhaite rentrer dans la réunion, il apparaîtra ici, en attente de votre approbation.',
  },
  webinar: {
    peersCount: {
      one: '%s participant',
      many: '%s participants',
    },
  },
  plugins: {
    by: 'par',
    size: 'Taille : %s kB',
    phSearch: 'Rechercher...',
    source: 'Code Source : ',
    apiDocs: 'Documentation API',
    vendor: 'Éditeur :',
    btnAdd: 'Ajouter',
    add: {
      title: 'Ajouter un nouveau plugin',
      descr: '⚙️ Vous développez des plugins ? Ajoutez ici pour tester. Il ne seront pas sauvegardés, mais en cache de navigateur.',
      name: 'Quel est le nom du plugin ?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Plugin chargé !',
      loadFailed: 'Échec du chargement du plugin',
    }
  },
  help: {
    sevenTips: 'Top 7 Issues/Fixes',
    connIssues: 'Problème de connexion',
    laggyMedia: 'Audio/vidéo lent',
    unlockMedia: 'Débloquer la caméra/micro',
    faq: 'Voir la FAQ',
    submitFeature: 'Demander une fonctionnalité',
  },
}
