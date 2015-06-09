import stylesheet from './src/stylesheet.js';
import store from './src/store.js';
import todoItem from './src/todoItem.js';
import './src/form.js';

let todoList = document.getElementById('todo-items');

let todoElements = store.getState().map(text => new todoItem(text));

todoElements.forEach(elem => {
    todoList.appendChild(elem);
});

function removeCb() {
    // loop over all the dom elements in the list, remove any that are no longer in the state array
    let todoItems = todoList.querySelectorAll('li');
    let state = store.getState();
    let invalidItems = [].filter.call(todoItems, item => state.indexOf(item.data) === -1);
    [].forEach.call(invalidItems, elem => elem.parentNode.removeChild(elem));
}

store.on('itemRemoved', removeCb);

function addCb() {
    let state = store.getState();
    let text = state[state.length-1]; // the new item will always be the last item
    todoList.appendChild(new todoItem(text));
}

store.on('itemAdded', addCb);