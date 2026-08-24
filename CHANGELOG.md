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

## ⏳ Nog te doen (uit de laatste lijst van de gebruiker)

14. Audioboek-video's toevoegen van mensen + realtime synchroon met boek op scherm — groot apart project (spraakherkenning/forced alignment)
15. Voorlezer zoeken → automatisch koppelen aan boek + synchroon meebewegen — zelfde grote project als #14
16. Highlighter per letter/woord (nu: per zin/zinsdeel via tekstselectie — al een grote sprong t.o.v. per-blok, echte losse per-letter-precisie nog niet)
17. Haptic feedback + lang-indrukken-menu's op meer plekken (nu: alleen in de lezer; nog niet op boeken in bibliotheek etc.)
18. Aparte notities-toolbar/zijbalk across de hele app (nu: alleen gescheiden headers in Bibliotheek gedaan, notities-tab zelf nog niet herzien)
19. ~~Gratis muziekbibliotheek~~ deels gedaan (2 tracks) — meer genres/tracks kan nog
20. Europese radiospeler met diverse landen — nog niet gedaan
21. Boeken automatisch vertalen per boek naar elke Europese taal — nog niet gedaan (vereist vertaal-API)
22. Boeken aanbieden in elke taal — nog niet gedaan

## ❌ Kan niet (technische/platformgrenzen)

- Haptic feedback op iPhone/Safari — Apple heeft dit nooit geïmplementeerd
- Gescande PDF's (afbeeldingen) lezen — vereist OCR
- Entertainment-links (Netflix, YouTube-hoofdsite) embedden in de app — die sites blokkeren dit zelf
