# Rocket Goal

3D car soccer for phones and computers that puts prayer first: ranked 1v1, 2v2 and 3v3 from Bronze to Supersonic Legend (a separate rank for each), casual games up to 4v4, an optional 2 or 3 balls just for fun, 34 training levels with an aerial coach, separate saved players, and a garage of unlockable cars and parts.

The whole game is one self-contained `index.html` (three.js r128 and the fonts are embedded), plus a web app manifest, icons and a service worker so it installs to a phone's home screen and plays offline after the first visit.

## Prayer first

- Prayer times are worked out on the device for the chosen city (or the phone's GPS in the installed app), with the usual calculation methods (Muslim World League, Egyptian, Umm al-Qura, ISNA and others) and Standard or Hanafi Asr. They follow the phone's clock, so they update every day and with daylight saving.
- At every adhan the game stops, even mid-match, and locks for a prayer break (10 to 30 minutes; at least 40 minutes for Jumu'ah on Friday). The match waits and nobody loses rank for it.
- Before playing, each player is asked whether they have prayed the current prayer. "Not yet" means: go pray first, then come back.
- Every game starts with a Bismillah card: a reminder from the Quran or authentic hadith, the next prayer time, and a line that the game must never take prayer time.
- At the adhan the game plays the full recorded adhan (`adhan.mp3`). It can be made silent but not skipped, and the game stays locked until it finishes.
- Goals show dhikr on screen (Masha'Allah, SubhanAllah, Alhamdulillah); conceding shows "Khayran in sha' Allah" and "Qaddara Allahu wa ma sha'a fa'al".

## Install on a phone

- iPhone (Safari): open the site, tap Share, then **Add to Home Screen**.
- Android (Chrome): open the site, open the menu, then **Install app**.

Turn the phone's rotation lock off so the game can switch between portrait and landscape.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The game |
| `adhan.mp3` | The adhan played at every prayer time |
| `sw.js` | Offline cache: newest version when online, saved copy when offline |
| `manifest.webmanifest` | Home-screen name, icon and full-screen mode |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |
