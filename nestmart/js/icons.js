/* ===== Icônes SVG Qui Market ===== */
const ICONS = {
  basket:'<path d="M4 9h16l-1.5 11h-13L4 9z"/><path d="M8 9l4-6 4 6M9 13v4M12 13v4M15 13v4"/>',
  compare:'<path d="M12 3v18M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zm14 0l-2.5 6a3 3 0 0 0 5 0L19 7zM8 21h8"/>',
  heart:'<path d="M12 20s-7-4.5-9-9c-1.2-2.8.6-6 3.8-6 2 0 3.5 1.2 5.2 3.2C13.7 6.2 15.2 5 17.2 5c3.2 0 5 3.2 3.8 6-2 4.5-9 9-9 9z"/>',
  cart:'<circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2l2.4 11h10.2l2-8H6"/>',
  user:'<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.5-3.5 4.3-5 7.5-5s6 1.5 7.5 5"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
  home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
  bag:'<path d="M5 8h14l-1.2 12H6.2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  store:'<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/>',
  pencil:'<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"/>',
  faq:'<path d="M21 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  headset:'<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="2"/><rect x="17" y="13" width="4" height="6" rx="2"/><path d="M20 17a4 4 0 0 1-4 3h-2"/>',
  pin:'<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  phone:'<path d="M5 4h4l1.5 4-2 1.5a12 12 0 0 0 6 6L16 13.5l4 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  eye:'<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>',
  trash:'<path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',
  check:'<path d="M4 12.5l5 5L20 6.5"/>',
  ticket:'<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4V8z" transform="rotate(0)"/><path d="M13 6v2M13 11v2M13 16v2"/>',
  box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  truck:'<path d="M1 5h13v11H1zM14 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
  gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8s-4 0-4-3 4-1 4-1 4-2 4 1-4 3-4 3z"/>',
  ret:'<path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/>',
  tag:'<path d="M3 12V4h8l9 9-8 8-9-9z"/><circle cx="8" cy="9" r="1.5"/>',
  wave:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v5M10 11V4.5a1.5 1.5 0 0 1 3 0V11M13 11V6a1.5 1.5 0 0 1 3 0v6M16 12v-1a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L4.5 15a1.6 1.6 0 0 1 2.4-2.1L7 13"/>',
  arrowL:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  bookmark:'<path d="M6 3h12v18l-6-4-6 4V3z"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
  star:'<path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.5 5.8 20.9l1.4-6.9L2 9.3l7-.8z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
  bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c1.2-3 3.6-4.5 6.5-4.5s5.3 1.5 6.5 4.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16 15.7c2.6.3 4.6 1.7 5.5 4.3"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  text:'<path d="M5 5h14M12 5v14M9 19h6"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  doc:'<path d="M6 2h8l4 4v16H6V2z"/><path d="M14 2v4h4M9 12h6M9 16h6"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  home2:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>'
};
function ic(n, size=18, color="currentColor"){
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-4px">${ICONS[n]||""}</svg>`;
}
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("[data-ic]").forEach(el=>{
    el.innerHTML = ic(el.dataset.ic, el.dataset.size||20, el.dataset.color||"currentColor");
  });
});
