export default {
  self: 'xroom',
  on: 'på',
  off: 'av',
  title: 'Behövs ett konferensrum?',
  buttons: {
    ok: 'OK',
    yes: 'Ja',
    no: 'Nej',
    cancel: 'Avbryt',
    retry: 'Igen',
    chooseWindow: 'Välj ett fönster',
    wholeScreen: 'Förstora skärmen',
    install: 'Lägg till',
    uninstall: 'Ta bort',
    send: 'Skicka',
    close: 'Stäng',
    hide: 'Dölj',
    knock: 'Knack knack',
    allowIn: 'Släpp in',
    deny: 'Neka',
    enterAnyway: 'Gå in ändå',
    enterHost: 'Gå in som värd',
    details: 'Detaljer',
    stay: 'Stanna kvar',
    remain: 'Återbli',
  },
  mbox: {
    notSupported: 'Det verkar inte som att denna webbläsare stödjer XROOM eller så är WebRTC inaktiverat. 😢',
    success: 'Åtgärden lyckades',
    failure: 'Åtgärden misslyckades',
    enterRoomName: 'Vänligen ange rumsnamnet',
    isCamOn: 'Är kameran på?',
      isCamOnText: 'Kontrollera att du inte har oavsiktligt blockerat din kamera / mikrofon på den här sidan och tryck sedan på "Igen".',
    isMicOn: 'Är mikrofonen på?',
    isMicOnText: 'Om du vill prata behöver vi ha tillgång till din mikrofon. Ta bort blockeringen på denna sida och tryck sedan på "Igen".',
    iWillOnlyWatch: 'Jag ska bara titta',
    iWillOnlyListen: 'Jag ska bara lyssna',
    screenSharingText: 'Skärmdelning är inte tillåtet. Se till att det inte är blockerat för den här sidan.<br><br>Viktigt: funktionen stöds endast av moderna webbläsare som Chrome eller Firefox.',
    cannotFile: 'Eftersom vi inte ens rör dina filer kan vi inte leverera dem till någon efter de ansluter. Du behöver göra det när de är online.',
    cannotMessage: 'Eftersom vi inte ens rör dina meddelanden kan vi inte leverera dem till någon efter de ansluter. Du behöver göra det när de är online.',
    roomLockedText: 'Det här rummet är tyvärr låst.',
    oops: 'Oops',
    kickedOutText: 'Du har blivit borttagen från det här rummet.',
    areYouSure: 'Är du säker?',
    restartRequiredText: 'Denna inställning påverkar så mycket att sidan behöver laddas om. Det går snabbt, vi lovar!',
    onlySafariOnIOS: 'På iOS stöds endast via Safari.',
    cannotLoadPlugin: 'Plugin "%s" stöds inte i din webbläsare',
    confirmFileSend: 'Vill du skicka detta?',
    whatIsYourName: 'Ange ett nytt namn',
    setVideoVolume: 'Ställ in ljudnivån',
    roomLockedTryKnockText: 'Rummet är låst. Du kan be om att få gå in genom att "knacka".',
    knockingFailedText: 'Knackningsförsöket misslyckades',
    doYouWantToKick: 'Vill du ta bort den här användaren?',
    deviceChanged: 'Du har anslutit eller tagit bort en input-enhet. Om den inte fungerar, kolla gärna dina inställningar.',
    allowCameraPlz: 'Efter du har tryckt på OK, <b>låt</b> xroom använda din kamera.<br><br>Oroa dig inte, du kan stänga av den igen innan du går in i rummet, i menyn längst ner om du vill vara osynlig.',
    tooOldBrowser: 'Din webbläsare är för gammal eller tillverkad av Microsoft. Många funktioner kommer saknas.',
    pluginsLoadFailed: 'Det gick inte att ladda plugin',
    protoExpired: 'För gammal klientversion. Tryck på Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 för att ladda om. Om du ser detta meddelande igen, rensa webbläsarens cache manuellt, tack.',
    peerError: 'Något gick fel när du utbytte data med andra. Vi föreslår att du laddar om sidan.',
    enterpriseOnly: 'Det här är bara en Enterprise funktion.',
    pluginSuggested: 'Användare %s föreslog att du installerar plugin %s. Vill du göra det?',
    hostRoleRequired: 'Värd-roll krävs för den här åtgärden.',
    alreadyHosted: 'Rummet har redan en värd. Gå inte in i samma rum från två webbläsarflikar. 😉',
    roomLockedPassword: 'Rummet är låst med ett lösenord. Ange det nedan.',
    roomDestroyed: 'Rummet är borttaget. Du kommer att omdirigeras till startsidan.',
    roomBooked: 'Rummet är bokat och kan inte skapas genom UI fram tills att bokningen löper ut.',
    nameRequired: 'Rumvärden kräver att du anger ditt namn först.',
    pipNotSupported: 'Din webbläsare stöder "bild-i-bild" -läge men funktionen är inaktiverad någonstans i dina inställningar.',
    copyFailed: 'Kopieringen misslyckades. Detta kan vara pga. dina enhetsbegränsningar.',
    noCryptoWarning: 'Denna webbläsare stöder inte kryptografi. Det är inte pålitligt att fortsätta.',
    bigFileDecryptWarn: 'Nedladdningen har startat. Det kan ta några sekunder att dekryptera filen.',
    noSTUN: 'We have detected that you were unable to connect to your meeting. This is likely due to a local connection or firewall issue. Our systems are validated as currently working. Try to test using another browser, use incognito mode or switch to another network before reconnecting.<br><br>Please read the <a href="https://xroom.app/en/blog/2020-08-07-experiencing-network-or-connection-issues" target="_blank">following article</a> for more information here.',
  },
  notify: {
    slowPlugins: 'Pluginladdning tar för lång tid. Tänk på att ta bort den/de plugins som är tyngst.',
  },
  home: {
    nisdos: 'Inga "cookies" används här',
    title: 'Ditt personliga konferensrum',
    btnGo: 'Kör!',
    knowMore: 'Om xroom.app',
    nameRoom: 'namnge rummet:',
    placeholder: 'skriv här',
    rejoinRoom: 'eller återvänd till',
  },
  wl: {
    poweredBy: 'Drivs av ',
  },
  modes: {
    1: 'Konferens',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Välj rumstyp',
    checkIt: 'Ser du bra ut?',
    btnGo: 'Starta',
    knockDenied: 'Din knackförfrågan har nekats. Du kan inte komma in i rummet. :(',
    knockRequested: 'Vänta på tillstånd. Andra kan se dig genom ett kikhål. 👀',
    noAudio: '⚠️ Vi hittar inte din mikrofon',
    roomIsBusyWebinar: 'En webinar/stream pågår redan (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Ett samtal pågår redan (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Rummets kapacitet har uppnått sin begränsning.',
    roomBooked: 'Ett event kommer att starta i detta rum vid: <b>%s</b>, var god vänta.',
  },
  videoMenu: {
    hint: 'Meny',
    expand: 'Förstora',
    pip: 'Behåll högsts upp',
    fullscreen: 'Fullskärm',
    volume: 'Ljudnivå ±',
    restore: 'Återställ',
    kick: 'Ta bort',
    mute: 'Mute',
  },
  controls: {
    ss: 'Skärmdeln. %s',
    cam: 'Kam %s',
    mic: 'Mik %s',
    chat: 'Chatt %s',
    exit: 'Avsluta',
    destroy: 'Radera rummet',
    xroom: 'Drivs av xroom',
    settings: 'Inställn.',
    plugins: 'Plug-in',
    media: 'Media',
    more: 'Mer',
    letMeSpeak: 'Jag vill prata',
    lock: 'Låsning',
  },
  lockStatus: {
    locked: 'Rummet är stängt',
    open: 'Rummet är öppet',
    protected: 'Rummet är skyddat med ett lösenord',
    placeholder: 'rumslösenord',
  },
  reactions: {
    letMeSpeak: 'Jag vill prata!',
  },
  waiting: {
    invite: 'Bjud in dina kollegor',
    beforeCopy: 'Klicka för att kopiera',
    afterCopy: 'Kopierat. Dela nu!',
    webinar: 'Webinar har inte startat än',
  },
  video: {
    you: 'Du (klicka för att namnge)',
    someone: 'Någon',
    knocking: 'knackar...',
    poorNet: 'dålig anslutning',
  },
  chat: {
    fileSending: 'Skickar en fil: ',
    fileReceived: 'En fil har tagits emot: ',
    inputPlaceholder: 'skriv ett meddelande ...',
    me: 'jag',
    dropMe: 'Släpp mig!',
  },
  webinar: {
    peersCount: '%s personer tittar',
  },
  settings: {
    experimental: '*) experimentellt, fungerar ostabilt',
    screenFace: 'Använd kameran under skärmdelning (BETA)',
    flipFace: 'Spegelvänd din kamera förhandsgranskning',
    audioQ: 'Ljudkvalitet',
    videoQ: 'Videokvalitet',
    screenQ: 'Skärmdelningskvalitet',
    bandwidthQ: 'Bandwidth profil',
    autoGetIn: 'Starta chattar utan förhandsgranskning',
    soundEffects: 'Ljudeffekter',
    noisyBackground: 'Jag är på en högljudd plats',
    rtcDebug: 'Felsök RTC',
    audioDevices: 'Audiokällor',
    videoDevices: 'Videokällor',
    language: 'Språk',
    theme: 'Färgtema',
    server: 'Server',
    keepControls: 'Håll menyn synlig',
  },
  plugins: {
    by: 'av',
    size: 'Storlek: %s kB',
    searchPlaceholder: 'söka...',
    source: 'Källkod:',
    apiDocs: 'API dok.',
    vendor: 'Skapare:',
    add: {
      title: 'Lägg till en ny plugin',
      descr: '⚙️ Utvecklar du en ny plugin? Lägg till det här för att testa. Det sparas endast i den här webbläsaren.',
      name: 'Vad heter din plugin?',
      rootUrl: 'Vad är URL-adressen för din plugin?',
      loaded: 'Yaay! Den är laddad!',
      loadFailed: 'Det gick inte att ladda din plugin',
    }
  },
}
