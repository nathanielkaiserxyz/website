const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

const icons = {
  light: 'moon.svg', // show moon icon when in light mode
  dark: 'sun.svg'    // show sun icon when in dark mode
};

function updateIcon(theme) {
  if (icon) icon.src = icons[theme];
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = prefersDark ? 'dark' : 'dark';
  root.setAttribute('data-theme', initialTheme);
  updateIcon(initialTheme);
}

toggleBtn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});