import store from './store.js';

let form = document.querySelector('form');

function handleFormSubmit(e) {
    e.preventDefault();

    let value = e.target.querySelector('input').value;

    if (value) {
        store.addItem(value);
        form.reset();
    }

}

form.addEventListener('submit', handleFormSubmit);