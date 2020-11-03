// menu swicher

const bodyRef = document.querySelector('body');

const blackThemeChangeBtn = document.querySelector('.theme-switch__toggle');

blackThemeChangeBtn.addEventListener('change', changeBodyColor);

if (localStorage.getItem('body') === 'dark-theme') {
  body.classList.add('dark-theme');
  blackThemeChangeBtn.checked = true;
} else {
  blackThemeChangeBtn.checked = false;
}

function changeBodyColor(p) {
  bodyRef.classList.toggle('dark-theme');
  if (localStorage.getItem('body') === 'dark-theme') {
    localStorage.removeItem('body');
  } else {
    localStorage.setItem('body', 'dark-theme');
  }
}
