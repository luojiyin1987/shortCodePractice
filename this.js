function foo() {
    "use strict"
    console.log("simple function call")
    console.log(this === global)
}

let user = {
    count: 10,
    foo: foo,
    foo1: function() {
        console.log(this === global)
    }
}


user.foo()
let fun1 = user.foo1
fun1()
user.foo1()


function run(param) {
    console.log(param, this.id)
}

const obj = {id: "welcome"};

[1, 2, 3].forEach( run, obj );
