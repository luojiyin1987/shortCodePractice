const asyncUpperCase = (item) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item.toUpperCase())
        }, Math.floor(Math.random() * 1000))

    })
}

const uppercaseItems = async () => {
    const items = ['a', 'b', 'c'];
    for (item of items) {
        console.log(await asyncUpperCase(item));
    }

    console.log('Items processed')
}

uppercaseItems();