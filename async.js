function asyncUpperCase(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item.toUpperCase())
        }, Math.floor(Math.random() * 1000))

    })
}

async function uppercaseItems() {
    const items = ['a', 'b', 'c'];
    for (item of items) {
        console.log('uppercaseItems' ,await asyncUpperCase(item));
    }

    console.log('Items 1 processed')
}



const asyncUpperCase2 = (item) => {
    return  new Promise(resolve => {
        setTimeout(() => {
            resolve(item.toUpperCase())
        }, Math.floor(Math.random() * 1000))

    })
}

function uppercaseItems2() {
    const items = ['a', 'b', 'c'];
    return Promise.all(
        items.map(async item => {
            const uppercaseItems  = await asyncUpperCase2(item);
            console.log('uppercaseItems2',uppercaseItems);
        })
    )

    console.log('Items 2  processed')
}

uppercaseItems();
uppercaseItems2();