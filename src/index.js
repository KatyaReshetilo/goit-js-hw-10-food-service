import './sass/main.scss';
import menu from './menu.json';
import templateMenu from './menu.hbs';

const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
const bodyHtml = document.querySelector('body');
const menuHtml = document.querySelector('.js-menu');
menuHtml.innerHTML = templateMenu(menu);

themeSwitchToggle.addEventListener('change', onSwitchChange);

function onSwitchChange(evt) {
    if (this.checked) {
        bodyHtml.classList.add('dark-theme');
        bodyHtml.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        bodyHtml.classList.remove('dark-theme');
        bodyHtml.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
};

if (localStorage.getItem('theme') === 'dark') {
    themeSwitchToggle.checked = true;
    bodyHtml.classList.add('dark-theme');
} else { bodyHtml.classList.add('light-theme'); };