# Rocket Goal

3D car soccer for phones and computers: ranked 1v1 from Bronze to Supersonic Legend, 34 training levels with an aerial coach, separate saved players, and a garage of unlockable cars and parts.

The whole game is one self-contained `index.html` (three.js r128 and the fonts are embedded), plus a web app manifest, icons and a service worker so it installs to a phone's home screen and plays offline after the first visit.

## Install on a phone

- iPhone (Safari): open the site, tap Share, then **Add to Home Screen**.
- Android (Chrome): open the site, open the menu, then **Install app**.

Turn the phone's rotation lock off so the game can switch between portrait and landscape.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The game |
| `sw.js` | Offline cache: newest version when online, saved copy when offline |
| `manifest.webmanifest` | Home-screen name, icon and full-screen mode |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |
