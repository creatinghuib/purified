# Purified — webversie (PWA), v2: nu een echte, voorgecompileerde bundel

**Belangrijkste wijziging t.o.v. je vorige upload:** de vorige versie
vertaalde de React/JSX-code live in de browser (via Babel + een CDN-import).
Dat bleek in de praktijk breekbaar en kon blijven hangen op "wordt
geladen…". Deze versie is vooraf gecompileerd tot één zelfstandig
`app.bundle.js`-bestand (React, iconen en de hele app zitten er al in) — dat
is getest en bevestigd werkend zonder enige internetverbinding nodig te
hebben om te kunnen laden.

## Bestanden
```
index.html        ← hoofdpagina (laadt alleen app.bundle.js, verder niets bijzonders)
app.bundle.js      ← de volledige, voorgecompileerde app
manifest.json      ← app-naam, icoon, kleuren voor "installeren"
sw.js              ← service worker v2 (nieuwe cachenaam — overschrijft een eventuele kapotte oude cache)
icons/             ← app-iconen
```

## Je bestaande GitHub-repo bijwerken (belangrijk!)

Omdat je al eerder bestanden had geüpload (die mogelijk nog gecachet staan
in browsers die de site al bezocht hebben), moet je **alle bestaande
bestanden in de repo vervangen** door deze nieuwe set — niet ernaast
uploaden.

1. Ga naar je repo op GitHub, open elk bestaand bestand (`index.html`,
   `app.jsx` als dat er nog staat, `manifest.json`, `sw.js`) en verwijder
   het (potlood-icoon → prullenbak-icoon rechts, of via "Add file → Upload
   files" gewoon de nieuwe bestanden met dezelfde naam overschrijven —
   GitHub biedt dan automatisch "vervangen" aan).
2. Upload alle bestanden uit deze map (dus de inhoud van `purified-pwa-v2`,
   niet de map zelf) naar de hoofdmap van je repo.
3. Commit.
4. Open je site opnieuw, en doe een **harde refresh**: Ctrl+Shift+R
   (Windows) — dit dwingt de browser om de oude service worker/cache te
   negeren. Op iPhone: sluit het tabblad helemaal en open de link opnieuw
   (of: instellingen → Safari → geschiedenis en websitegegevens wissen, als
   een harde refresh niet lukt).
5. Als je de app al aan je beginscherm had toegevoegd: verwijder dat
   snelkoppeling-icoon en voeg 'm opnieuw toe nadat de site zelf ververst is
   — anders wijst die nog naar de oude, gecachete versie.


## 1. Publiceren (gratis, geen account bij Apple nodig)

Kies één van deze — allemaal gratis en geven een eigen `https://…`-link:

### Optie A — Netlify Drop (makkelijkst, geen account)
1. Ga naar https://app.netlify.com/drop
2. Sleep de hele map (of de inhoud ervan) erin.
3. Je krijgt direct een link, bv. `https://iets-random.netlify.app`.

### Optie B — Vercel
1. Ga naar https://vercel.com, maak gratis account.
2. "Add New Project" → upload deze map (of koppel een GitHub-repo met deze
   bestanden).

### Optie C — GitHub Pages
1. Zet deze bestanden in een GitHub-repository.
2. Repository → Settings → Pages → Deploy from branch → kies `main` en map
   `/ (root)`.
3. Je krijgt een link als `https://gebruikersnaam.github.io/repo-naam/`.

**Let op:** open `index.html` nooit rechtstreeks vanaf je harde schijf
(dubbelklikken). Browsers blokkeren dan het inladen van `app.jsx` en de
service worker. Het moet via `http://` of `https://` — dus via een van de
opties hierboven, of lokaal testen met:
```bash
cd purified-pwa
python3 -m http.server 8080
```
en dan naar `http://localhost:8080` in de browser.

## 2. Toevoegen aan beginscherm

**iOS (Safari):**
1. Open de link in Safari (moet Safari zijn, niet Chrome op iOS).
2. Tik op het deel-icoon (vierkantje met pijl omhoog).
3. Kies "Zet op beginscherm".

**Windows (Chrome/Edge):**
1. Open de link.
2. Klik op het installeer-icoontje rechts in de adresbalk (of menu → "App
   installeren").

**Android (Chrome):**
1. Open de link.
2. Menu (⋮) → "App installeren" of "Toevoegen aan startscherm".

## 3. Wat werkt er echt, en wat is nog mockup?

Dit bestand was door jou zelf al aangeduid als **browser-mockup van het
ontwerp** (zie de tekst onderaan in de app zelf). Concreet:
- ✅ Voorlezen (Voice-tab) gebruikt de **echte** spraaksynthese van de
  browser/het besturingssysteem (werkt dus echt, stemmen verschillen per
  toestel).
- ✅ Boeken zoeken in de gratis-catalogus haalt echt live resultaten op bij
  Project Gutenberg (gutendex.com).
- ⚠️ Bibliotheek-import, notities, AI-tab, stempakketten-download e.d. zijn
  **visuele simulaties** (mock-data) — er wordt nog niets echt opgeslagen
  op een server of blijvend op schijf gezet.
- YouTube-ambient/embeds vereisen dat de kijker zelf toestemming geeft voor
  het afspelen (browserbeleid), en werken alleen zolang de pagina open is.

Voor een productie-klare versie met echte opslag, accounts, betalingen etc.
is meer werk nodig — maar voor "een link sturen zodat mensen 'm kunnen
proberen en op hun scherm kunnen zetten" is dit volledig functioneel.

## 4. De losse Expo/React Native-app (in de zip) ook naar web?

Die map (`purified-app/`) is een **apart, native project** (Expo/React
Native met SQLite, PDF-lezer, etc.) — niet hetzelfde bestand als deze demo.
Dat project kan Expo zelf ook naar een statische website exporteren, maar
dat vereist een build-stap op een computer met internet (dat kan ik hier
niet voor je draaien, want deze werkomgeving heeft geen internettoegang).
Zelf doen, in 3 stappen:

```bash
cd purified-app
npm install
npx expo export --platform web
```

Dit maakt een map `dist/` met een kant-en-klare website — die map upload je
op dezelfde manier (Netlify/Vercel/GitHub Pages, zie boven) voor een eigen
link. Let op: sommige gebruikte native modules in dat project (bv.
`expo-sqlite`, `react-native-pdf`) werken niet 1-op-1 in de browser en
hebben mogelijk een web-specifiek alternatief nodig — dat vraagt extra
aanpassingen die niet automatisch gaan. Voor "een simpele link om te delen
en te pinnen" is de PWA hierboven de snelste en meest betrouwbare route.
