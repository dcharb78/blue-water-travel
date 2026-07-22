export function galleryPlaceholderSvg(title: string, colors: [string, string]): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors[0]}"/>
      <stop offset="100%" style="stop-color:${colors[1]}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="650" cy="120" r="80" fill="white" opacity="0.15"/>
  <circle cx="120" cy="480" r="120" fill="white" opacity="0.1"/>
  <text x="400" y="300" text-anchor="middle" fill="white" font-family="Georgia, serif" font-size="32" font-weight="600">${title}</text>
  <text x="400" y="340" text-anchor="middle" fill="white" font-family="system-ui, sans-serif" font-size="16" opacity="0.8">Replace with your photo</text>
</svg>`;
}
