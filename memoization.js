class MyObject {
    constructor(data) {
        this.data = data;
        this.data[this.data.length - 1] = { value: 'Non-energy' };
    }

    firstNonEmptyItem() {
        return this.data.find(v => !!v.value)
    }

    firstNonEmptyItemMemo() {
        if (!this.firstNonEmpty) {
            this.firstNonEmpty = this.data.find(v => !!v.value)
        }

        return this.firstNonEmpty
    }
}

const myObject = new MyObject(Array(2000).fill({ value: null }))

console.time()
for (let i = 0; i < 2000; i++) {
    myObject.firstNonEmptyItem()
}

console.timeEnd()


console.time()
for (let i = 0; i < 2000; i++) {
    myObject.firstNonEmptyItemMemo()
}

console.timeEnd()
