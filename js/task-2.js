class Storage {
    #items;

    constructor(addList) {
        this.#items = addList
    }

    getItems() {
        return this.#items;
    };

    addItem(newItem) {
        this.#items.push(newItem)
    };

    removeItem(itemToRemove) {
        let indexToRemove = this.#items.indexOf(itemToRemove)
        if (indexToRemove >= 0) { this.#items.splice(indexToRemove, 1); }
        else {console.log(`The ${itemToRemove} isn't in the items!`) };
    };
};

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // The Prolonger isn't in the items!