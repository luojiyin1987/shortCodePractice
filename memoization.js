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


const add = (n) => (n)

const memoize= (fn) =>{
    let cache = {};
    return (...args)=> {
        let n = args[0];
        if( n in cache) {
            console.log('Fetching from cache');
            return cache[n]
        } else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result
        }
    }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));
console.log(memoizedAdd(3));
console.log(memoizedAdd(4));
console.log(memoizedAdd(4));