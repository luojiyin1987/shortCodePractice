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

