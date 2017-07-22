// function box(){
// 	alert('调用后执行');
// }
// box();

// function box(a){
// 	a = a + 10;
// 	return a;
// }
// var a = box(10);

// alert(a);

// function box(name,age){
// 	alert('名字是'+name+',年龄是'+age);
// }
// box("mdd",20);

// function box(){
// 	return "被调用才能执行";
// }
// alert(box());

// function box(){
// 	var sum = 0;
// 	for(var i = 0; i < arguments.length; i++){
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
// alert(box(1,2,3));

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }

// var xiaoming = {
//     name: '小明',
//     birth: 1997,
//     age: getAge
// };

// alert(xiaoming.age());;

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }

// var xiaoming = {
//     name: '小明',
//     birth: 1997,
//     age: getAge
// };

// var fn = xiaoming.age;
// alert(fun());

function myFunction(a,b){
	return a * b;
}
document.getElementById("demo").innerHTML=myFunction(4,3);