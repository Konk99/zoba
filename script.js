const dialog = document.querySelector('dialog');
const test = document.querySelector('img');

test.addEventListener('click', () => {
    dialog.showModal();
})

dialog.addEventListener('click', () => {
    dialog.close();
})