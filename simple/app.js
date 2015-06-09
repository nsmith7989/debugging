(function app() {
    'use strict';

    //module state
    var todoData = [];

    // grab references
    var form = document.querySelector('form'),
        todoItems = document.querySelector('#todo-items');

    //make a stylesheet
    var styleSheet = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        return style.sheet;
    })();

    //add the strikethrough rule for completed
    styleSheet.insertRule(".complete { text-decoration: line-through; color: green }", 0);

    //add cursor pointer
    styleSheet.insertRule("span {cursor: pointer}", 0);


    // add event listener on the form
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // keep page from refreshing

        //grab the value of `#add-to-do`
        var inputValue = e.target.querySelector('#add-to-do').value;
        if (inputValue) {
            addTodoItem(inputValue);
        }

    });

    function addRemoveClickHandler(element) {
        element.addEventListener('click', removeTodoItem);
    }

    function removeTodoItem(e) {
        // find the parent, remove from dom
        var todoItemLi = e.target.parentNode, // li
            list = todoItems.querySelector('ul');

        //remove it from the internal state
        todoData.splice(todoData.indexOf(todoItemLi.data), 1);
        //persist to local storage
        persistData();

        list.removeChild(todoItemLi);

        // clean up click handlers
        todoItemLi.querySelector('span').removeEventListener('click', removeTodoItem);
        todoItemLi.querySelector('input').removeEventListener('click', addCompleteHandler);

    }

    function addCompleteHandler(element) {
        element.addEventListener('click', toggleComplete);
    }

    function toggleComplete(e) {
        var todoItem = e.target.parentNode; // li

        todoItem.classList.toggle('complete');

    }

    function addTodoItem(itemText) {
        // list is ul inside of `todoItems`
        var list = todoItems.querySelector('ul'),
            listItem = document.createElement('li'),
            removeIcon = document.createElement('span'),
            completeIcon = document.createElement('input');

        completeIcon.type = 'checkbox';

        // add event listener to removeIcon
        addRemoveClickHandler(removeIcon);
        addCompleteHandler(completeIcon);

        removeIcon.innerHTML = ' \u2716';

        listItem.innerHTML = itemText; //set the text
        listItem.data = itemText;

        listItem.appendChild(removeIcon);
        listItem.insertBefore(completeIcon, listItem.firstChild);

        list.appendChild(listItem); // append into document
        todoData.push(itemText); // add to internal state
        persistData(itemText); // save that state to local storage
        form.reset();
    }

    function persistData() {
        //add that to localstorage
        window.localStorage.setItem('myTodos', todoData);
    }

    function readFromLocalStorage() {
        // check if the value exists in local storage,
        // if yes grab those items and render to page
        var todoItems = window.localStorage.getItem('myTodos') || [];

        todoItems.forEach(function(text) {
            addTodoItem(text);
        });
    }

    readFromLocalStorage();

})();