# Purified — Changelog

Bijgehouden per upgrade-ronde, zodat we niet kwijtraken wat al gedaan is.

## ✅ Afgerond

- App omgezet van demo naar werkende PWA (installeerbaar, GitHub Pages hosting)
- Nep-telefoonscherm-mockup verwijderd, echte edge-to-edge layout
- Auteursrecht: betaalde/beschermde boeken vervangen door publiek domein
- Video/audio-upload foutmeldingen tonen nu echt gedetecteerd bestandstype
- Audio-afspeelbug (AudioContext bleef hangen) gefixt
- YouTube-achtergrondgeluid: enkele tik = direct geluid (geen aparte "unmute"-stap meer)
- EPUB-parser gebouwd (eigen zip/tekst-extractie, geen externe library nodig)
- PDF-tekstextractie via pdf.js — zelfde functies (notities/highlight/voorlezen) als EPUB
- "iOS Bestanden/Drive/Dropbox"-knoppen vervangen door echte bestandskiezer
- Volledig scherm-knop gefixt (zat achter de notch)
- Alle schermteksten naar het Engels (tabbalk blijft per-taal wisselbaar)
- Zin-granulariteit i.p.v. hele tekstblokken, met nummering
- Woord/zinsdeel-highlighten via native tekstselectie + zwevend menu
- Terug/sluit-knop in de lezer
- Leespositie onthouden per boek (binnen dezelfde sessie)
- Haptic feedback toegevoegd (highlighten/opslaan/undo) — werkt niet op iOS Safari (Apple-beperking)
- Laatst gebruikte thema wordt onthouden (localStorage)
- Cherry Oak-thema: houtnerf-textuur + sierlijst
- 17 lettertypes (incl. dyslexie/low-vision-vriendelijk)
- Sunset Orange als standaard-accentkleur i.p.v. geel
- Ingebouwde muziekbibliotheek (gospel-instrumental + piano-instrumental, rechtenvrij, streaming)
- Meer natuurgeluiden (8 stuks, echte opnames, geen synthese)
- **Audioboeken-sectie**: aparte "Books"/"Audiobooks"-koppen in Bibliotheek, met 2 ingebouwde publiek-domein audioboeken (LibriVox, direct mp3, geen download nodig)
- **Gratis boeken openen nu écht in de lezer**: klikken haalt de echte tekst op (Project Gutenberg via Gutendex), parseert 'm net als EPUB/PDF, en opent 'm meteen in de lezer (notities/highlight/voorlezen werken erop). Boek wordt bewaard in een nieuwe **"Downloaded — ready to read"**-sectie zodat heropenen daarna instant gaat, zonder opnieuw te downloaden.
- **Lang-indrukken-menu op boeken/audioboeken in de Bibliotheek** (#17, deels): een boek een fractie van een seconde ingedrukt houden (of rechtermuisknop op desktop) opent nu een menu met "Open" en, voor je eigen toegevoegde of gedownloade boeken, "Remove from Library" — inclusief haptic feedback op ondersteunde apparaten.
- **Bug gevonden en gefixt: gratis boeken openden niet op echte iPhone/Windows**. Oorzaak: CORS bleek onbetrouwbaar bij zowel Gutenberg als Archive.org (bevestigd), én de terugval-poging (extern openen na een mislukte download) werd door Safari/sommige Windows-browsers stilletjes geblokkeerd als pop-up, omdat 'ie niet meer direct aan je tik gekoppeld was. Fix: er wordt nu synchroon, direct bij je tik, een leeg tabblad geopend — dat wordt daarna gevuld met óf de echte boektekst (als downloaden lukt) óf de Gutenberg-pagina (als het niet lukt). Bevestigd getest met gesimuleerd CORS-falen: opent nu altijd betrouwbaar iets.
- **Bibliotheek visueel vernieuwd**: elke sectie (Downloaded / Books / Audiobooks) is nu een horizontaal scrollende rij i.p.v. een lang verticaal grid — alles past meteen zichtbaar op het scherm, minder scrollen nodig, oogt netter en herkenbaarder (mogelijk hiermee ook de "geen audioboeken zichtbaar"-klacht opgelost, als dat kwam door niet ver genoeg naar beneden scrollen).
- **Audioboeken hebben nu een eigen "Listen"-tabblad** (was voorheen alleen een sectie ín Bibliotheek — nu een volwaardig apart tabblad met eigen icoon). Bevestigd: 2 echte publiek-domein audioboeken (LibriVox) staan erin en spelen af.
- **Meeleestekst ("read-along") bij audioboeken**: bij de 2 ingebouwde titels kun je nu de bijbehorende, echte boektekst tonen terwijl je luistert. Eerlijkheidshalve: dit is **niet woord-voor-woord gesynchroniseerd** met het geluid (dat zou echte spraakherkenning vereisen — een veel groter apart project, zie punt #14/15 hieronder) — het is de echte, volledige tekst om in je eigen tempo mee te volgen.
- **Europese radiospeler** (#20): in het Muziek-tabblad, 5 landen met échte, live directe streams van publieke omroepen — 🇬🇧 Classic FM, 🇫🇷 France Inter, 🇩🇪 Deutschlandfunk, 🇧🇪 VRT Klara, 🇳🇱 NPO Radio 2. Getest: correcte stream-URL per land, wisselt goed tussen stations. Eerlijkheidshalve: sommige stations leveren zelf alleen http (niet https) — dat ligt aan de bron, niet aan de app; browser kan een melding tonen maar zou het geluid alsnog moeten afspelen.
- **Notities-scherm herzien** (#18): nu écht gescheiden secties "Notes" en "Highlights" (i.p.v. één platte lijst), elk met eigen aantal en lege-staat-melding — zelfde patroon als de Bibliotheek.
- **Nieuw: woordenboek-functie** (op eigen verzoek toegevoegd aan de lijst): selecteer een woord in de lezer → tik het boek-icoontje in het zwevende menu → toont definitie + uitspraak, via de gratis, meertalige dictionaryapi.dev (geen sleutel nodig). Zoekt automatisch in de taal die de app-interface op dat moment heeft staan, met terugval naar Engels als dat woord er niet in staat. Getest met gesimuleerde API-respons: werkt correct end-to-end.
- **#21/22 Boeken vertalen naar elke Europese taal**: in Leesopties → "Translate this book", kies een van de 8 talen. Gebruikt de gratis MyMemory-vertaal-API (geen sleutel, CORS-vriendelijk). Werkt op zowel de ingebouwde voorbeeldtekst als elk geopend boek; wissel je terug naar Engels dan verschijnt gewoon weer de originele tekst (geen opnieuw vertalen nodig). Getest met gesimuleerde API-respons: vertalen en terugschakelen werken beide correct.
  - **Eerlijke beperking**: de gratis MyMemory-laag staat zo'n 5.000 tekens per dag per bezoeker toe (ca. een hoofdstuk of twee) — geen onbeperkt hele boeken per dag. Bij het bereiken van die grens verschijnt een duidelijke melding i.p.v. een stille mislukking.

## ⏳ Nog te doen (uit de laatste lijst van de gebruiker)

14. Audioboek-video's toevoegen van mensen + realtime synchroon met boek op scherm — groot apart project (spraakherkenning/forced alignment)
15. Voorlezer zoeken → automatisch koppelen aan boek + synchroon meebewegen — zelfde grote project als #14
16. Highlighter per letter/woord (nu: per zin/zinsdeel via tekstselectie — al een grote sprong t.o.v. per-blok, echte losse per-letter-precisie nog niet)
17. Haptic feedback + lang-indrukken-menu's op meer plekken (nu: alleen in de lezer; nog niet op boeken in bibliotheek etc.)
18. Aparte notities-toolbar/zijbalk across de hele app (nu: alleen gescheiden headers in Bibliotheek gedaan, notities-tab zelf nog niet herzien)
19. ~~Gratis muziekbibliotheek~~ deels gedaan (2 tracks) — meer genres/tracks kan nog
20. Europese radiospeler met diverse landen — nog niet gedaan
~~21. Boeken automatisch vertalen per boek naar elke Europese taal~~ ✅ gedaan
~~22. Boeken aanbieden in elke taal~~ ✅ gedaan (via de vertaalfunctie hierboven — elk boek kan nu naar elke taal, i.p.v. een vaste vertaling per boek)
23. Woordenboek-taaldekking verifiëren voor alle 8 talen (en/nl/de/fr/es/it/pt/pl) — de gebruikte API ondersteunt bevestigd Engels/Frans/Duits/Spaans/Italiaans/Portugees; Nederlands en Pools nog niet met zekerheid bevestigd, valt dan terug op Engels

## ❌ Kan niet (technische/platformgrenzen)

- Haptic feedback op iPhone/Safari — Apple heeft dit nooit geïmplementeerd
- Gescande PDF's (afbeeldingen) lezen — vereist OCR
- Entertainment-links (Netflix, YouTube-hoofdsite) embedden in de app — die sites blokkeren dit zelf
