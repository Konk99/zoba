const dialog = document.querySelector('dialog');
const test = document.querySelector('img');

test.addEventListener('click', () => {
    dialog.showModal();
})

dialog.addEventListener('click', () => {
    dialog.close();
})

const buttons = document.querySelectorAll('.button');

buttons[0].classList.add('firstOne')
buttons[1].classList.add('secondOne')

const main = document.querySelector('.main');
const news = document.querySelector('.news');
const body = document.body;

if(body.style.width < 450) {
    buttons[0].addEventListener('click', () => {
        buttons[1].classList.remove('opaque');
        buttons[1].classList.remove('right');
        buttons[0].classList.add('opaque');
        buttons[0].classList.add('left');
        main.setAttribute('data-active', 'true');
        news.setAttribute('data-active', 'false');
    })
    
    buttons[1].addEventListener('click', () => {
        buttons[1].classList.add('opaque');
        buttons[1].classList.add('right');
        buttons[0].classList.remove('opaque');
        buttons[0].classList.remove('left');
        main.setAttribute('data-active', 'false');
        news.setAttribute('data-active', 'true');
    })
}

if(main.getAttribute('data-active') == 'true' && body.style.width < 450) {
    buttons[1].classList.remove('right');
}else if(news.getAttribute('data-active') == 'true' && body.style.width < 450) {
    buttons[0].classList.remove('left')
}