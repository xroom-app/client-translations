export default {
  self: 'xroom',
  on: 'ouvert',
  off: 'fermé',
  title: 'Besoin d’une salle de conférence?',
  buttons: {
    ok: 'OK',
    yes: 'Oui',
    no: 'Non',
    cancel: 'Annuler',
    retry: 'Réessayer',
    chooseWindow: 'Choisir une fenêtre',
    wholeScreen: 'L’écran au complet',
    install: 'Ajouter',
    uninstall: 'Enlever',
    send: 'Envoyer',
    close: 'Fermer',
    hide: 'Cacher',
    knock: 'Toc-Toc-Toc',
    allowIn: 'Permettre d’entrer',
    deny: 'Refuser',
    enterAnyway: 'Entrer pareil',
    details: 'Details',
  },
  mbox: {
    notSupported: 'Il semble que ce navigateur ne prenne pas en charge XROOM ou WebRTC est désactivé. 😢',
    success: 'Opération réussie',
    failure: 'Opération échouée',
    enterRoomName: 'Entrez un nom de salle s’il vous plaît',
    isCamOn: 'Est-ce que votre caméra est ouverte?',
    isCamOnText: 'Veuillez vérifier que vous n’avez pas accidentellement bloqué votre caméra / micro sur ce site et appuyez sur "Réessayer".',
    isMicOn: 'Est-ce que votre microphone est ouvert?',
    isMicOnText: 'Si vous prévoyez de parler, nous avons besoin de votre autorisation de micro. Autorisez-le sur cette page et appuyez sur "Réessayer".',
    iWillOnlyWatch: 'Je veux juste regarder',
    iWillOnlyListen: 'I veux juste écouter',
    screenSharingText: 'Le partage d’écran n’est pas autorisé. Veuillez vous assurer qu’elle n’est pas bloquée pour cette page.<br><br>Cette fonctionnalité n’est également prise en charge que par les navigateurs modernes comme Chrome ou Firefox.',
    cannotFile: 'Étant donné que nous ne touchons même pas vos fichiers, nous ne pouvons pas les livrer juste après la connexion de quelqu’un. Vous devez le faire lorsque les gens sont à l’intérieur.',
    cannotMessage: 'Étant donné que nous ne touchons même pas vos messages, nous ne pouvons pas les livrer après la connexion de quelqu’un. Vous devez le faire lorsque les gens sont à l’intérieur.',
    roomLockedText: 'Cette salle est barrée',
    oops: 'Désolé',
    kickedOutText: 'Vous avez été expulsé',
    areYouSure: 'Êtes-vous certain?',
    restartRequiredText: 'Ce paramètre affecte trop de choses, donc un rechargement est nécessaire. C’est rapide, ne vous inquiétez pas!',
    onlySafariOnIOS: 'Sur iOS, seul Safari est pris en charge. "Merci", Apple!',
    cannotLoadPlugin: 'Le plugin "% s" ne prend pas en charge votre navigateur',
    confirmFileSend: 'Voulez-vous envoyer ça?',
    whatIsYourName: 'Entrer votre nom',
    setVideoVolume: 'Ajuster le volume pour cette vidéo',
    roomLockedTryKnockText: 'La salle est actuellement verrouillée. Vous pouvez demander la permission d’entrer en "frappant" à la porte.',
    knockingFailedText: 'La tentative pour frapper à la porte a échouée',
    doYouWantToKick: 'Voulez-vous éjecter cet utilisateur?',
    deviceChanged: 'Vous avez connecté / supprimé un nouveau périphérique d’entrée. Si cela ne fonctionne pas, choisissez-le manuellement dans Paramètres.',
    allowCameraPlz: 'Après avoir appuyé sur OK, veuillez <b>autoriser</b> xroom à utiliser votre appareil photo.<br><br>Ne vous inquiétez pas! Vous pourrez le désactiver à nouveau avant d’entrer dans la pièce à partir du menu en bas si vous souhaitez rester invisible.',
    tooOldBrowser: 'Votre navigateur est trop ancien ou est produit par Microsoft. De nombreuses fonctionnalités peuvent manquer.',
    pluginsLoadFailed: 'Échec du chargement des plugins',
    protoExpired: 'Version client trop ancienne. Veuillez appuyer sur Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 pour recharger. Si vous voyez à nouveau ce message, veuillez vider manuellement le cache du navigateur.',
    peerError: 'Quelque chose s’est mal passé lors de l’échange de données avec vos pairs. Nous vous suggérons de recharger la page.',
    enterpriseOnly: 'Il s’agit d’une fonction réservée aux entreprises.',
    pluginSuggested: 'L’utilisateur %s vous a suggéré d’installer le plugin %s. Voulez-vous le faire?',
    hostRoleRequired: 'Le rôle d’hôte est requis pour cette action.',
    alreadyHosted: 'La chambre est déjà hébergée. N’entrez pas dans la même pièce à partir de 2 onglets du navigateur. 😉',
    roomLockedPassword: 'La salle est actuellement verrouillée avec un mot de passe. Entrez-le ci-dessous si vous le connaissez.',
    roomDestroyed: 'La salle a été détruite. Vous serez redirigé vers la page de démarrage.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
  },
  notify: {
    slowPlugins: 'Les plugins prennent trop de temps à charger. Pensez à retirer le plus lourd.',
  },
  home: {
    nisdos: 'Nous n’utilisons pas de cookies',
    title: 'Votre salle personnelle de conférence',
    btnGo: 'Go!',
    knowMore: 'À propos de xroom',
    nameRoom: 'nom de votre salle:',
    placeholder: 'écrivez ici',
    rejoinRoom: 'ou rejoindre',
  },
  wl: {
    poweredBy: 'Propulsé par ',
  },
  modes: {
    1: 'Conférence',
    2: 'Webinaire',
  },
  pre: {
    selectMode: 'Chosi ton type de salle',
    checkIt: 'Vérifie ton micro et ton look! ;-)',
    btnGo: 'Entrer',
    knockDenied: 'Vous ne pouvez pas entrer dans la salle. Votre demande a été refusée :(',
    knockRequested: 'En attente d’une autorisation. Les gens peuvent vous voir. 👀',
    noAudio: '⚠️ Aucun signal micro détecté',
    roomIsBusyWebinar: 'Un webinaire est en cours d’exécution (%s × 🙂)',
    roomIsBusyConference: 'Une conférence est en cours d’exécution (%s × 🙂)',
    sizeLimitReached: 'Cette salle est limitée par la taille et sa limite est atteinte',
  },
  videoMenu: {
    hint: 'Basculer le menu',
    expand: 'Étendre',
    fullscreen: 'Plein écran',
    volume: 'Volume ±',
    restore: 'Restaurer',
    kick: 'Cogner',
    mute: 'Muet',
  },
  controls: {
    ss: 'Partage %s d’écran',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Sortir',
    destroy: 'Éliminer',
    xroom: 'Propulsé par xroom',
    settings: 'Configurations',
    plugins: 'Plugins',
    media: 'Média',
    more: 'Plus',
    letMeSpeak: 'Laissez moi parler',
  },
  reactions: {
    letMeSpeak: 'Je veux parler!',
  },
  waiting: {
    invite: 'Inviter vos confrères',
    beforeCopy: 'cliquez pour copier',
    afterCopy: 'Copié. Vous pouvez partager maintenant!',
    webinar: 'Webinaire n’Est pas encore commencé',
  },
  video: {
    you: 'Vous (cliquez pour nommer)',
    someone: 'Quelqu’un',
    knocking: 'cogne pour entrer...',
    poorNet: 'connexion faible',
  },
  chat: {
    fileSending: 'Envoyer un fichier: ',
    fileReceived: 'Fichier reçu: ',
    inputPlaceholder: 'tapez un message et appuyez sur entrée ...',
    me: 'moi',
    dropMe: 'Déplace moi!',
  },
  webinar: {
    peersCount: '%s personne assistent présentement',
  },
  settings: {
    experimental: '*) experimental, works unstably',
    showCameraWithScreen: 'Afficher la caméra pendant le partage d’écran *',
    qualityLevel: 'Haute qualité (utilise plus de trafic)',
    autoGetIn: 'Démarrer des chats sans aperçu',
    soundEffects: 'Effets sonores',
    noisyBackground: 'Je suis dans une endroit bruyant',
    rtcDebug: 'Debogue RTC',
    audioDevices: 'Sources audio',
    videoDevices: 'Sources vidéo',
    language: 'Langue',
    theme: 'Couleur du thème',
    server: 'Serveur',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: 'par',
    size: 'Simension: %s kB',
    searchPlaceholder: 'cherche...',
    source: 'Code source:',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: 'Ajouter un nouveau plugin',
      descr: '⚙️ Vous développez un nouveau plugin? Ajoutez-le ici pour tester. Il n’est pas enregistré, le rechargement de la page la supprime de la mémoire.',
      name: 'Quel est le nom du plugin?',
      rootUrl: 'Ou est la racine du plugin?',
      loaded: 'SUPER!! Tout a marché!',
      loadFailed: 'Échec du chargement du plugin',
    }
  },
  tips: {
    prefix: 'Conseil du jour: ',
    lines: [
      'Désactiver / réactiver le son souvent? Il y a un raccourci "m" pour ça.',
      'Double-cliquez sur une vidéo distante pour la faire en plein écran.',
      'Besoin de verrouiller votre chambre? Ajoutez simplement le verrouillage de la pièce dans les plugins ci-dessous.',
      'Utilisez Slack et vous voulez gagner plus de temps? Essayez notre <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Slack bot</a>.',
      'Vous manquez des appels vidéo dans Telegram? Notre <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">bot Telegram</a> est là pour vous aider.',
      'Besoin de partager une image copiée? Ctrl + V dans le chat, on s’occupe reste.',
      'Cliquez sur votre nom pour le modifier localement et pour vos pairs.',
      'Avez-vous déjà eu besoin d’enregistrer votre écran en quelques clics? Essayez notre plugin d’enregistrement d’écran.',
      'Besoin d’esquisser pendant un appel - essayez le plugin d’esquisse. N’oubliez pas d’activer le partage d’écran.',
      'Cliquez sur votre nom ou "Vous" pour vous renommer pour tout le monde.',
    ]
  },
}
