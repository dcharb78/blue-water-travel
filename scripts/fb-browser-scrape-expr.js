/**
 * Paste into browser_cdp Runtime.evaluate on facebook.com/bluewatertvl (logged in).
 * Returns JSON string of full photo inventory from Photos grid + Albums + Tagged.
 */
(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const found = new Map();

  function mediaId(src) {
    const m = src.match(/\/(\d+_\d+_\d+_[^/?]+)/);
    return m ? m[1].replace(/\.(jpg|jpeg|png|webp)$/i, "") : null;
  }

  function scoreUrl(src, w) {
    return (
      (w || 0) +
      (src.includes("82787-15") ? 1000 : 0) +
      (src.includes("mx1440") || src.includes("mx1536") ? 500 : 0)
    );
  }

  function collectFromDom(source) {
    for (const img of document.querySelectorAll("img")) {
      if (!img.src?.includes("scontent")) continue;
      const id = mediaId(img.src);
      if (!id) continue;
      const alt = img.alt || "";
      const w = img.naturalWidth || parseInt(img.width) || 0;
      if (w > 0 && w < 80) continue;
      const prev = found.get(id);
      const sc = scoreUrl(img.src, w);
      if (!prev || sc > prev.score) {
        found.set(id, { src: img.src, alt, w, source, score: sc });
      }
    }
  }

  async function scrollUntilStable(maxIter = 60) {
    let last = 0;
    let stable = 0;
    for (let i = 0; i < maxIter; i++) {
      window.scrollTo(0, document.body.scrollHeight);
      await sleep(800);
      collectFromDom(location.href);
      const n = found.size;
      if (n === last) stable++;
      else stable = 0;
      last = n;
      if (stable >= 5) break;
    }
  }

  const sections = [
    "https://www.facebook.com/bluewatertvl/photos",
    "https://www.facebook.com/bluewatertvl/photos_albums",
    "https://www.facebook.com/bluewatertvl/photos_of",
  ];

  for (const url of sections) {
    location.href = url;
    await sleep(3000);
    collectFromDom(url);
    await scrollUntilStable(60);
  }

  // Collect album links
  const albumLinks = [...document.querySelectorAll('a[href*="/album/"], a[href*="photos_albums"]')]
    .map((a) => a.href)
    .filter((h) => h.includes("album") || h.includes("photos"));

  const uniqueAlbums = [...new Set(albumLinks)].filter(
    (h) => h.includes("bluewatertvl") && !h.includes("photos_albums")
  );

  for (const albumUrl of uniqueAlbums.slice(0, 100)) {
    location.href = albumUrl;
    await sleep(2500);
    collectFromDom(albumUrl);
    await scrollUntilStable(40);
  }

  const out = [...found.values()].map(({ src, alt, w, source }) => ({
    src,
    alt: alt === "No photo description available." ? "" : alt,
    w,
    source,
  }));

  return JSON.stringify({ count: out.length, photos: out });
})();
