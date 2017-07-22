// var box = {
// 	name : 'mdd',
// 	age : 20
// };
// alert(box.name);

// function objrun(){
// 	return '123';
// }

// var box = new Object();
// box.namne = 'mdd';
// box.age = 20;
// box.run = objrun;
// alert(box.run());

// var box = {
// 	name : 'mdd',
// 	age : 20,
// 	run : function (){
// 		return '123';
// 	}
// };
// alert(box.run());

// var box = {
// 	name : 'mdd',
// };
// alert(box.name);
// delete box.name;
// alert(box.mame);

function box(obj){
	alert(obj.name);
	alert(obj.age);
}

var obj = {
	name : 'mdd',
	age : 20,
	height : 180,
	adress : '河南郑州'
};

box(obj);