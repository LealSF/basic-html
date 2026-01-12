const btnCloseCookie = document.getElementById('btn-close-cookies');
const btnAcceptionCookie = document.querySelector('.btn-cookie');
let sectionCookies = document.querySelector('.cookies');

const executeCookie = () => {
    if(document.cookie.includes('true')) {
        sectionCookies.classList.add('hidden');
        return;
    };

    btnCloseCookie.addEventListener('click', () => {
        sectionCookies.classList.toggle('hidden');
    });

    btnAcceptionCookie.addEventListener('click', () => {
        console.log('Cookies')
        //set cookie for 60 = 1 minute, 60 = 1 hour, 24 = 1 day, 30 = 1 Month
        document.cookie = "cookieAccpted=true; max-age" + 60 * 60 * 24 * 30;
        sectionCookies.classList.toggle('hidden');
    });
};

window.addEventListener('load', executeCookie);