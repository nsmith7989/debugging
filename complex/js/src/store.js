import {EventEmitter} from 'events';
import assign from 'object.assign';
import storage from './localstorage.js';
import sendData from './ajax.js';

class Store extends EventEmitter {

    constructor(cachedItems) {
        super();
        this.items = cachedItems || []; // will read from localstorage
    }

    addItem(item) {
        this.items.push(item);
        storage.set(this.items);
        sendData(item); // fire and forget
        this.emit('itemAdded');
    }

    removeItem(item) {
        // delete item from state
        this.items.splice(this.items.indexOf(item), 1);
        storage.set(this.items);
        this.emit('itemRemoved');
    }

    getState() {
        return this.items;
    }

}

export default new Store(storage.get());