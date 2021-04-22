module.exports = {
  self: 'xroom',
  title: 'Turvallinen työpisteesi',
  goToDash: 'Jatka ohjauspaneeliin',
  netStatus: 'Yhteys',
  buttons: {
    ok: 'Ok',
    cancel: 'Peruuta',
    yes: 'Kyllä',
    no: 'Ei',
    chN: 'Valinta %s',
    install: 'Lisää',
    uninstall: 'Poista',
    details: 'Näytä lisätietoja',
    close: 'Sulje',
    next: 'Seuraava',
    back: 'Takaisin',
    retry: 'Yritä uudelleen',
    dismiss: 'Hylkää',
    allow: 'Salli',
    stop: 'Lopeta',
    decideLater: 'Päätä myöhemmin',
    knock: 'Koputtaa',
    leave: 'Poistu',
  },
  mbox: {
    notSupported: 'It looks like this browser does not support xroom.app or WebRTC is disabled. 😢',
    protoExpired: 'Käyttäjän versio on liian vanha. Paina Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 ladataksesi uudelleen. Jos haluat nähdä tämän viestin uudelleen, tyhjää selaimesi välimuisti manuaalisesti.',
    areYouSure: 'Oletko varma?',
    noPermission: 'Lupaa selaimellesi ei voitu myöntää. Tarkista estot lupa-asetuksistasi.',
    mediaBlocked: 'Kameran käyttö estetty. Tarkista, ettei kamerasi ole aktiivinen toisessa ohjelmassa tai selaimessa.',
    mediaError: 'You provided access to your hardware devices, but a local problem in your system prevented your device from being used. Please try another browser or another device.',
    whatIsYourName: 'Mikä sinun nimesi on?',
    noPeersP2P: 'Viestit eivät käytä xroom.app-palvelimia, eikä niitä voida toimittaa vasta lisättyjen asiakkaiden yhteyden muodostamisen jälkeen. Lähettääksesi viestejä, odota, kunnes muut ovat liittyneet keskusteluun.',
    noPeers: 'Messages cannot be redelivered after newly added guests connect. Please wait until others have joined the conversation to send messages.',
    password: 'Lisää huoneellesi salasana',
    roomLocked: 'Huone on suljettu. Haluatko koputtaa päästäksesi sisään?',
    roomProtected: 'Tämä huone on suojattu salasanalla. Kirjaudu sisään syöttämällä salasana.',
    roomIsFull: 'Pääsy estetty, koska huone on täynnä.',
    alreadyHosted: 'Olet jo huoneessa. Olet todennäköisesti testaamassa useita selainvälilähtejä kerralla. Haluatko sisään? Järjestäjäominaisuudet eivät välttämättä toimi.',
    youAreKicked: 'Sinut on poistettu huoneesta.',
    setQFailed: 'Pyydetyn laadun asettaminen epäonnistui. Laitteisto tai selain ei ehkä tue sitä.',
    bookingEnded: 'Tämä varaus on ohi. Huone on varattu toiseen tapahtumaan, joten sinut ohjataan toiseen huoneeseen, jotta voit jatkaa kokoustasi.',
    bookingEndedHost: 'Tämän huoneen nykyinen varaus on loppumassa. Valinta tehtävä nyt, koska toinen varaus on ajoitettu samalla huoneen nimellä. <br/> <br/> 1. Mene uuteen kokoukseen. Ohjaamme sinut ohjauspaneeliin päästäksesi kokoukseen uudella järjestäjäavaimella. <br/> <br/> 2. Pysy kokouksessa. Luomme sinulle uuden huoneen tämän puhelun lopettamiseksi.',
    pluginsLoadFailed: 'Latausten kytkeminen epäonnistui.',
    roomDestroyed: 'Huone on poistettu. Sinut uudelleenohjataan aloitussivulle.',
    encInfo: 'Encryption: end-to-end, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Salausta ei tueta.',
    avaTooBig: 'Avatar-tiedoston koko on liian suuri. Käytä sen sijaan yksinkertaisia vektorikuvia.',
    cannotLoadPlugin: 'Selaimesi ei tue "%s" kytkentää',
    confirmLeave: 'Oletko varma, että haluat lopettaa tapaamisen?',
    confirmDestroy: 'Oletko varma, että haluat lopettaa tapaamisen kaikilta osallistujilta?',
    feedbackDetected: 'Olemme havainneet mikrofonissa tausaääniä ja mykistäneet sinut automaattisesti. Suosittelemme, että käytät kuulokkeita tai pidät mikrofonisi pois päältä, kunnes astut huoneeseen.',
    guestKnock: 'Käyttäjä <b>%s</b> haluaa liittyä kokoukseen. Päästä sisään?<br/>Voit päättää myöhemmin odotushuoneen välilehdellä',
    safariNotSupported: 'Tätä ominaisuutta ei tällä hetkellä tueta Safari-selaimessasi.',
    p2pNotSupported: 'This feature is disabled in peer-to-peer mode.',
    takeOverSharing: 'Näytön jakaminen nyt päättää nykyisen näytön jakamisen.',
    p2pInfo: 'P2P-tila estää keskitettyjen palvelimiemme käytön. <br/> <u> Huoneen vakaus riippuu verkostasi. </u> <br/> Suositellaan kahden hengen yksityisiin kokouksiin.',
    confirmKick: 'Are you sure you wish to remove %s from this room?',
    comingSoon: 'This feature is coming soon.',
    audioChanged: 'Audio input device added. Do you want to select which one to use now?',
  },
  notify: {
    slowPlugins: 'Liian moni samanaikainen kytkentä hidastaa lataamisaikaa. Harkitse poistavasi suurin kytkentä',
    peerLost: 'Uudelleenyhdistää %s kanssa...',
    roomLocked: 'Huone suljettu 🔒',
    roomUnlocked: 'Huone avattu 🔓',
    roomPwdSet: 'Huoneen salasana asetettu 🔑',
    roomPwdReset: 'Huoneen salasana tyhjennetty',
    devicesChanged: 'Laitteet muutettu',
    hostMutedAudio: 'Isäntä mykisti mikrofonisi',
    hostMutedVideo: 'Isäntä sulki kamerasi',
    incomingFile: 'Saapuva tiedosto...',
  },
  hint: {
    p2p: '<u>xroom.app</u> käyttää palvelimia varmistaakseen korkealaatuiset lähetykset kokoustesi aikana.<br/><br/> • Emme voi koskaan käyttää viestejäsi tässä tilassa. <br/> <br/> • Kaikkien palvelimiemme kautta lähetetyt tiedot on salattu ja lukittu avaimilla, joihin vain sinulla ja vieraillasi on pääsy. <br/> <br/> <u> Jos tarvitset maksimaalista suojausta, </u> voit poistaa palvelimemme käytöstä, ja käyttää sen sijaan vertaistilaa. <br/> <br/> • Tässä tilassa video ja ääni lähetetään suoraan sinun ja vieraidesi välillä ilman xroom.app-palvelimia. <br/> <br/> • Suosittelemme käyttämään vertaisverkkotilaa, kun aiot pitää kahdenkeskisen kokouksen.',
  },
  modes: {
    '1': 'Konferenssi. Kuka tahansa voi puhua',
    '2': 'Webinaari. Yksi puhuu, muut kuuntelevat',
  },
  placements: {
    '1': 'Ruudukkonäkymä',
    '2': 'Pienoiskuva',
    '3': 'Valokeila',
  },
  perm: {
    head: 'Salli selaimen käyttöoikeudet',
    video: 'Video',
    audio: 'Ääni',
    notif: 'Ilmoitukset',
  },
  videoMenu: {
    hint: 'Kontekstivalikko',
    expand: 'Laajenna',
    pip: 'Pidä valittuna',
    fullscreen: 'Koko näyttö',
    fullscreenOff: 'Poistu koko näytöltä',
    volume: 'Äänenvoimakkuus',
    restore: 'Palauta',
    kick: 'Poista osallistuja',
    mute: 'Mykistä (vain sinulle)',
    unmute: 'Poista mykistys',
    pm: 'Yksityinen keskustelu',
    makeHost: 'Ohita isäntärooli',
  },
  controls: {
    sharing: 'Jakaminen',
    cam: 'Kamera',
    mic: 'Mikrofoni',
    chat: 'Keskustelu',
    exit: 'Poistu',
    destroy: 'Lopeta kokous',
    settings: 'Asetukset',
    plugin: 'Laajennukset',
    dots: 'Pikavalikko',
    invite: 'Kutsu',
    ss: 'Jaa näyttö',
    stopSharing: 'Lopeta ruudun jakaminen',
    board: 'Whiteboard',
    hand: 'Nosta käsi',
    lock: 'Lukitus',
    layouts: 'Sijoittelu',
    emoji: 'Hymiöt',
    attach: 'Liitä tiedosto',
    setLock: 'Sulje huone',
    resetLock: 'Avaa huone',
    setPwd: 'Aseta salasana',
    rotate: 'Etu/takakamera',
    more: 'Lisää',
    users: 'Osallistujat',
  },
  reactions: {
    handRaised: 'Käyttäjä %s haluaa puhua 🎤', 
  },
  video: {
    you: 'Sinä (klikkaa nimeä)',
    sharing: 'Jaat näyttösi',
  },
  settings: {
    tabs: {
      audio: 'Ääni',
      video: 'Video',
      general: 'Yleisasetukset',
      help: 'Apua',
      chat: 'Keskustelu',
      peers: 'Osallistujat',
      lobby: 'Odotushuone',
    },
    audioQ: 'Max sample rate',
    videoQ: 'Videon laatu on hyvä',
    screenQ: 'Näytön jakamisen enimmäismäärä on hyvä',
    bandwidthQ: 'Kaistanleveysprofiili',
    soundEffects: 'Ääniefektit',
    audioDevices: 'Äänilähteet',
    videoDevices: 'Videolähteet',
    language: 'Kieliasetukset',
    theme: 'Väriteema',
    requestAudio: 'Pyydä äänen jakamisen lupaa',
    requestVideo: 'Pyydä videon jakamisen lupaa',
    testOutput: 'Testaa äänen tulo',
    flipFace: 'Peilaa kameran esikatselu',
    requireName: 'Vaadi nimi',
    debug: 'Debug-tila',
    noPreview: 'Aloita keskustelut ilman esikatselua',
    menuPos: 'Valikon sijoittelu',
    menuPosO: {
      '1': 'ylös',
      '2': 'alas',
    },
    name: 'Aseta/muuta näyttönimesi',
    phName: 'nimesi',
  },
  home: {
    title: 'Sinun henkilökohtainen konferenssihuoneesi',
    btnGo: 'Siirry',
    nameRoom: 'Nimeä huoneesi:',
    placeholder: 'Kirjoita tähän',
    rejoinRoom: 'tai liity uudelleen',
    poweredBy: 'Powered by <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Ole hyvä ja lisää huoneen nimi',
  },
  pre: {
    selectMode: 'Valitse kokoustyyppi',
    selectedMode: 'Kokoustyyppi',
    btnGo: 'Mene sisään',
    btnPreview: 'Esikatsele',
    avaPicker: 'Valitse avatar (näkyy kun video on suljettuna)',
    sizeLimitReached: 'Tämän huoneen koko on rajoitettu ja raja on saavutettu',
    roomBooked: 'Tässä huoneessa alkaa tapahtuma pian. <span>%s</span>.<br/>Odota, kunnes kokous alkaa.',
    roomInfo: 'Huoneen tiedot',
    phInfo: 'Lisää huonetiedot',
    pendingAdmission: 'Odota, kunnes isäntä päästää sinut sisään.',
    p2pMode: 'Peer-to-peer tila',
    btnGoHome: 'Go to start page',
    roomLocked: 'This room is locked by the host.<br/>Please knock to enter.',
    roomLockedInfo: 'Please enter your name.<br/>Otherwise the host might not allow you into the meeting.',
  },
  inviter: {
    info: 'Kutsu muita kokoukseen jakamalla alla oleva linkki.',
    head: 'Huoneen linkki:',
    btnCopy: 'Kopioi linkki',
    btnShare: 'Jaa linkki',
    ntfCopied: 'Linkki on kopioitu',
  },
  chat: {
    publicChat: 'Julkinen keskustelu',
    chatWith: 'Keskustele %s :n kanssa',
    fileSending: 'Lähettää tiedostoa: ',
    fileReceived: 'Tiedosto vastaanotettu: ',
    phInput: 'Kirjoita viesti...',
    me: 'minä',
    dropMe: 'pudota minut!',
    atTime: 'klo %s',
    recvProgress: 'salattujen tietojen vastaanottaminen: %s%...',
  },
  peers: {
    muteOnEntry: 'Mykistä osallistujat saapuessa',
    camsOff: 'Sulje kaikki videot',
    micsOff: 'Mykistä kaikki',
  },
  knockers: {
    phEmpty: 'Jos joku koputtaa saapuakseen huoneeseen, he ilmestyvät tänne odottaen sinun hyväksyntääsi.',
  },
  webinar: {
    peersCount: {
      one: '%s henkilö katsoo',
      many: '%s henkilöt katsovat',
    },
  },
  plugins: {
    by: 'mennessä',
    size: 'koko: %s kB',
    phSearch: 'etsi...',
    source: 'Lähdekoodi: ',
    apiDocs: 'API-koodit',
    vendor: 'Myyjä:',
    btnAdd: 'Lisää oma',
    add: {
      title: 'Lisää uusi laajennus',
      descr: '⚙️ Kehitetäänkö uusi laajennus? Lisää se testattavaksi. Sitä ei tallenneta mihinkään, vaan se lisäytyy selaimeesi.',
      name: 'Mikä on laajennuksen nimi?',
      rootUrl: 'Missä on laajenukksen juuri',
      loaded: 'Yaay! Se on ladattu!',
      loadFailed: 'Lataaminen epäonnistui',
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
