const root = document.documentElement;
const btn = document.getElementById('themeBtn');
const label = document.getElementById('themeLabel');
const THEMES = ['auto', 'light', 'dark'];
function setTheme(mode) {
  if (mode === 'auto') {
    root.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    label.textContent = 'Auto';
  } else {
    root.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    label.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
  }
}
let saved = localStorage.getItem('theme') || 'auto';
let i = THEMES.indexOf(saved);
setTheme(saved);
btn.addEventListener('click', () => {
  i = (i + 1) % THEMES.length;
  setTheme(THEMES[i]);
});
document.getElementById('year').textContent = new Date().getFullYear();