const body = document.querySelector('body');
const onClickBlackTheme = document.querySelector('.theme-switch__control');

onClickBlackTheme.addEventListener('change', changeFn)

if (localStorage.getItem('body') == 'dark-theme') {
body.classList.add('dark-theme');

}
function changeFn(p) {
    body.classList.toggle('dark-theme');
if (localStorage.getItem('body') == 'dark-theme') {
localStorage.removeItem("body", "dark-theme");
} else {
localStorage.setItem("body", "dark-theme");
}
}