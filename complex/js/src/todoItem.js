import store from './store.js';

class todoItem {

    removeItem(e) {
        // get the data off the item
        store.removeItem(e.target.parentNode.data);
        this.removeIcon.removeEventListener(this.removeListener);
        this.completeIcon.removeEventListener(this.completeListener);
    }

    completeItem(e) {
        e.target.parentNode.classList.toggle('complete');
    }

    // create todoItem add event listeners and return it
    constructor(itemText) {

        this.todoItem = document.createElement('li');
        //associate data
        this.todoItem.data = itemText;
        this.todoItem.innerHTML = itemText;

        this.removeIcon = document.createElement('span');
        this.completeIcon = document.createElement('input');

        this.completeIcon.type = 'checkbox';

        this.removeIcon.innerHTML = ' \u2716';

        this.todoItem.appendChild(this.removeIcon);
        this.todoItem.insertBefore(this.completeIcon, this.todoItem.firstChild);

        this.removeListener = this.removeItem.bind(this);
        this.completeListener = this.completeItem.bind(this);

        this.removeIcon.addEventListener('click', this.removeListener);
        this.completeIcon.addEventListener('click', this.completeListener);

        return this.todoItem;

    }

}

export default todoItem;