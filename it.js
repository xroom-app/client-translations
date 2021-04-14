module.exports = {
  self: 'xroom',
  title: 'Il tuo spazio di lavoro protetto',
  goToDash: 'Vai alla dashboard',
  netStatus: 'Connessione',
  buttons: {
    ok: 'Ok',
    cancel: 'Annulla',
    yes: 'Sì',
    no: 'No',
    chN: 'Scegli %s',
    install: 'Aggiungi',
    uninstall: 'Rimuovi',
    details: 'Vedi dettagli',
    close: 'Chiudi',
    next: 'Avanti',
    back: 'Indietro',
    retry: 'Riprova',
    dismiss: 'Ignora',
    allow: 'Consenti',
    stop: 'Interrompi',
    decideLater: 'Decidi in seguito',
  },
  mbox: {
    protoExpired: 'La versione del client è troppo vecchia. Premi Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 per ricaricare. Se visualizzi di nuovo questo messaggio, svuota manualmente la cache del browser.',
    areYouSure: 'Sei sicuro?',
    noPermission: 'Impossibile acquisire le autorizzazioni dal tuo browser. Assicurati che non siano bloccate.',
    mediaBlocked: 'L\'accesso alla telecamera è bloccato. Assicurati di non utilizzarla in un altro browser o programma.',
    mediaError: 'Non è stato possibile identificare il problema, ma qualcosa non funziona. Verifica le autorizzazioni del tuo browser.',
    whatIsYourName: 'Inserisci il tuo nome',
    noPeersP2P: 'I messaggi non utilizzano i server di xroom.app per L\'invio e non possono essere ricevuti dai nuovi ospiti aggiunti successivamente. Attendi che altri si siano uniti alla conversazione per inviare messaggi.',
    noPeers: 'I messaggi inviati ora non possono essere ricevuti dai nuovi ospiti aggiunti successivamente. Attendi che altri si siano uniti alla conversazione per inviare messaggi.',
    password: 'Imposta una password per la stanza',
    roomLocked: 'Questa stanza è bloccata. Vuoi tentare L\'accesso?',
    roomProtected: 'Questa stanza è protetta da una password. Inseriscila qui di seguito.',
    roomIsFull: 'La stanza è piena. Non puoi entrare.',
    alreadyHosted: 'Sei già presente nella stanza. Probabilmente stai provando con diverse schede del browser aperte contemporaneamente. Vuoi accedere? Le funzionalità delL\'host potrebbero non funzionare qui.',
    youAreKicked: 'Sei stato buttato fuori da questa stanza.',
    setQFailed: 'Impossibile impostare la qualità richiesta. Il tuo hardware o browser potrebbe non supportarla.',
    bookingEnded: 'Questa prenotazione è terminata. La stanza è prenotata per un altro evento, quindi ora verrai reindirizzato a un\'altra stanza per poter terminare la riunione.',
    bookingEndedHost: 'L\'attuale prenotazione per questa stanza terminerà a breve. Si prega di scegliere una delle seguenti opzioni poichè è stata programmata un\'altra prenotazione utilizzando lo stesso nome della camera.<br/><br/>1. Vai a una nuova riunione. Verrai indirizzato alla dashboard per accedere alla riunione con una nuova chiave delL\'host.<br/><br/>2. Resta in riunione. Verrà creata una nuova stanza per farti terminare questa chiamata.',
    pluginsLoadFailed: 'Caricamento plug-in non riuscito',
    roomDestroyed: 'La stanza è stata eliminata. Verrai reindirizzato alla pagina iniziale.',
    encInfo: 'Crittografia: end-to-end, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Crittografia non supportata',
    avaTooBig: 'Le dimensioni del file avatar sono troppo grandi. Utilizza invece semplici immagini vettoriali.',
    cannotLoadPlugin: 'Il plug-in "%s" non supporta il tuo browser',
    confirmLeave: 'Sei sicuro di voler abbandonare la chiamata?',
    confirmDestroy: 'Sei sicuro di voler terminare la riunione per tutti i partecipanti?',
    feedbackDetected: 'Sono stati rilevati alcuni rumori dal feedback audio del tuo microfono ed è disattivato automaticamente. Ti consigliamo di utilizzare le cuffie o di tenere spento il microfono finchè non entri nella stanza.',
    guestKnock: 'L\'utente <b>%s</b> vuole accedere. Consentire?<br/>Puoi decidere in seguito nella scheda della sala d\'attesa.',
    safariNotSupported: 'Questa funzione non è temporaneamente supportata da Safari',
    p2pNotSupported: 'Questa funzione è disabilitata in modalità peer-to-peer.',
    takeOverSharing: 'La condivisione dello schermo terminerà ora L\'attuale sessione di condivisione dello schermo.',
    p2pInfo: 'La modalità P2P disabilita L\'uso dei nostri server centralizzati.<br/><u>La stabilità della stanza dipenderà quindi dalla rete.</u><br/>Consigliata per riunioni private di 2 persone.',
    confirmKick: 'Sei sicuro di voler rimuovere %s da questa stanza?',
    comingSoon: 'Questa funzione sarà presto disponibile.',
    audioChanged: 'Dispositivo di input audio aggiunto. Vuoi selezionare quale usare adesso?',
  },
  notify: {
    slowPlugins: 'Troppi plugin possono causare tempi di caricamento piu\' lenti. Considera L\'idea di rimuovere i piu\' grandi.',
    peerLost: 'Riconnessione a %s...',
    roomLocked: 'Stanza bloccata 🔒',
    roomUnlocked: 'Stanza aperta 🔓',
    roomPwdSet: 'Password della stanza impostata 🔑',
    roomPwdReset: 'Password della stanza cancellata',
    devicesChanged: 'Dispositivi modificati',
    hostMutedAudio: 'L\'host ha disattivato il microfono',
    hostMutedVideo: 'L\'host ha disattivato la videocamera',
    incomingFile: 'File in arrivo...',
  },
  hint: {
    p2p: '<u>Xroom.app</u> utilizza server per garantire trasmissioni di alta qualità durante le tue riunioni.<br/><br/>• Non avremo mai accesso alle tue comunicazioni in questa modalità.<br/><br/>• Tutti i dati inviati tramite i nostri server sono crittografati e bloccati con chiavi a cui solo tu e i tuoi ospiti avete accesso.<br/><br/><u>Se vuoi avere la massima sicurezza,</u> puoi disabilitare i nostri server e utilizzare invece la modalità peer-to-peer.<br/><br/>• In questa modalità video e audio vengono inviati direttamente a te e ai tuoi ospiti senza utilizzare i server di Xroom.app.<br/><br/>• Consigliamo di utilizzare la modalità peer-to-peer quando prevedi di avere una riunione 1:1.',
  },
  modes: {
    '1': 'Conferenza: tutti possono parlare',
    '2': 'Webinar: uno parla, gli altri ascoltano',
  },
  placements: {
    '1': 'Visualizza griglia',
    '2': 'Minimizza',
    '3': 'In evidenza',
  },
  perm: {
    head: 'Consenti autorizzazioni browser',
    video: 'Video',
    audio: 'Audio',
    notif: 'Notifiche',
  },
  videoMenu: {
    hint: 'Menu contestuale',
    expand: 'Espandi',
    pip: 'Tieni in primo piano',
    fullscreen: 'Schermo intero',
    fullscreenOff: 'Esci dallo schermo intero',
    volume: 'Volume',
    restore: 'Ripristina',
    kick: 'Rimuovi partecipante',
    mute: 'Disattiva il microfono (solo per te)',
    unmute: 'Attiva il microfono',
    pm: 'Chat privata',
    makeHost: 'Passa il ruolo delL\'host',
  },
  controls: {
    sharing: 'Condivisione in corso',
    cam: 'Videocamera',
    mic: 'Microfono',
    chat: 'Chat',
    exit: 'Esci',
    destroy: 'Termina riunione',
    settings: 'Impostazioni',
    plugin: 'Plugin',
    dots: 'Menu contestuale',
    invite: 'Invita',
    ss: 'Condividi schermo',
    stopSharing: 'Interrompi condivisione',
    board: 'Lavagna',
    hand: 'Richiedi di parlare',
    lock: 'Blocca',
    layouts: 'Posizione',
    emoji: 'Emoji',
    attach: 'Allega un file',
    setLock: 'Blocca la stanza',
    resetLock: 'Apri la stanza',
    setPwd: 'Imposta una password',
    rotate: 'Videocamera posteriore / anteriore',
    more: 'Altro',
    users: 'Partecipanti',
  },
  reactions: {
    handRaised: 'L\'utente %s vuole parlare 🎤',
  },
  video: {
    you: 'Tu (clicca per inserire un nome)',
    sharing: 'Stai condividendo il tuo schermo',
  },
  settings: {
    tabs: {
      audio: 'Audio',
      video: 'Video',
      general: 'Generali',
      help: 'Aiuto',
      chat: 'Chat',
      peers: 'Partecipanti',
      lobby: 'Sala d\'attesa',
    },
    audioQ: 'Massimizza la frequenza di campionamento',
    videoQ: 'Massimizza la qualità video',
    screenQ: 'Massimizza la qualità di condivisione dello schermo',
    bandwidthQ: 'Profilo delL\'ampiezza di banda',
    soundEffects: 'Effetti sonori',
    audioDevices: 'Sorgenti audio',
    videoDevices: 'Sorgenti video',
    language: 'Lingua',
    theme: 'Tema colore',
    requestAudio: 'Richiedi autorizzazione audio',
    requestVideo: 'Richiedi autorizzazione video',
    testOutput: 'Prova uscita audio',
    flipFace: 'Mostra L\'anteprima della videocamera',
    requireName: 'Richiedi nome',
    debug: 'Modalità debug',
    noPreview: 'Avvia chat senza anteprima',
    menuPos: 'Posizione del menu',
    menuPosO: {
      '1': 'Parte superiore',
      '2': 'Parte inferiore',
    },
  },
  home: {
    title: 'La tua sala riunioni personale',
    btnGo: 'Vai!',
    nameRoom: 'Inserisci il nome della tua stanza:',
    placeholder: 'digita qui',
    rejoinRoom: 'o riunisciti a',
    poweredBy: 'Offerto da <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Inserisci il nome della tua stanza',
  },
  pre: {
    selectMode: 'Scegli il tipo di riunione',
    selectedMode: 'Tipo di riunione',
    btnGo: 'Accedi',
    btnPreview: 'Anteprima',
    avaPicker: 'Scegli L\'avatar (viene visualizzato quando il video è disattivato)',
    sizeLimitReached: 'Questa stanza ha una capacità limitata ed è stato raggiunto il limite',
    roomBooked: 'Ci sarà presto un evento in questa stanza: <span>%s</span>.<br/>Attendi fino alL\'inizio della riunione.',
    roomInfo: 'Informazioni della stanza',
    phInfo: 'Inserisci le informazioni della stanza',
    pendingAdmission: 'Attendi finchè L\'host non ti farà accedere.',
    p2pMode: 'Modalità peer-to-peer',
    btnGoHome: 'Go to start page',
  },
  inviter: {
    info: 'Condividi il link sottostante per invitare altri alla riunione.',
    head: 'Link della stanza:',
    btnCopy: 'Copia link',
    btnShare: 'Condividi link',
    ntfCopied: 'Il link è stato copiato!',
  },
  chat: {
    publicChat: 'Chat pubblica',
    chatWith: 'Chatta con %s',
    fileSending: 'Invio file in corso: ',
    fileReceived: 'File ricevuto: ',
    phInput: 'Scrivi un messaggio...',
    me: 'Io',
    dropMe: 'Scrivimi!',
    atTime: 'in %s',
    recvProgress: 'ricezione di dati crittografati: %s%...',
  },
  peers: {
    muteOnEntry: 'Disattiva L\'audio dei partecipanti alL\'accesso',
    camsOff: 'Disattiva il video a tutti',
    micsOff: 'Disattiva L\'audio a tutti',
  },
  knockers: {
    phEmpty: 'Se qualcuno richiede L\'accesso alla tua stanza, apparirà qui in attesa della tua approvazione.',
  },
  webinar: {
    peersCount: {
      one: '%s persona sta guardando',
      many: '%s persone stanno guardando',
    },
  },
  plugins: {
    by: 'da',
    size: 'Dimensione: %s kB',
    phSearch: 'Cerca...',
    source: 'Codice sorgente: ',
    apiDocs: 'Documentazione API',
    vendor: 'Sviluppatore:',
    btnAdd: 'Aggiungi il tuo',
    add: {
      title: 'Aggiungi nuovo plugin',
      descr: '⚙️ Stai sviluppando un nuovo plugin? Aggiungilo qui per provarlo. Non viene salvato da nessuna parte, ma nel tuo browser.',
      name: 'Qual è il nome del plugin?',
      rootUrl: 'Dov\'è la root del plugin?',
      loaded: 'Evviva! Caricamento riuscito!',
      loadFailed: 'Caricamento plugin non riuscito',
    }
  },
  help: {
    sevenTips: 'Top 7 problemi / soluzioni',
    connIssues: 'Problemi di connessione',
    laggyMedia: 'L\'audio / Il video lagga',
    unlockMedia: 'Consentire la videocamera / il microfono',
    faq: 'Vai alle FAQ',
    submitFeature: 'Richiedi una funzione',
  },
}
