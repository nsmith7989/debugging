const storageKey = 'myTodoItems';

class LocalStorage {
    constructor() {
        this.key = storageKey;
    }

    get() {
        return JSON.parse(window.localStorage.getItem(this.key));
    }

    set(obj) {
        window.localStorage.setItem(this.key, JSON.stringify(obj));
    }

}

export default new LocalStorage();