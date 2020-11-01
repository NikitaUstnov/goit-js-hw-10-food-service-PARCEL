// menu swicher

const body = document.querySelector('body');
const onClickBlackTheme = document.querySelector('.theme-switch__toggle');
onClickBlackTheme.addEventListener('change', changeFn);
if (localStorage.getItem('body') === 'dark-theme') {
  body.classList.add('dark-theme');
  onClickBlackTheme.checked = true;
} else {
    onClickBlackTheme.checked = false;
 }
function changeFn(p) {
    body.classList.toggle('dark-theme');
if (localStorage.getItem('body') === 'dark-theme') {
  localStorage.removeItem("body");
} else {
  localStorage.setItem("body", "dark-theme");
}
}