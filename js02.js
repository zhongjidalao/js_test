/**
 * Created by dan on 17-4-21.
 */
function A() {

}
A.prototype.sayHello = function () {
    console.log("Hello js");
}
A.sayHi = function () {
    console.log("Hello word");
}

var a = new A();
a.sayHello();
A.sayHi();

function B() {

}
B.prototype = new A();

var b = new B();
b.sayHello();