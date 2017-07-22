// var box = new Array(
// 	'mdd',
// 	'20',
// 	'河南郑州'
// );
// alert(box[0]);

// var box = Array(10);
// box[3] = 'mdd';
// alert(box);

// var box = ['mdd',20,'郑州'];
// alert(box);

// var box = [1,2];
// alert(box.length);

// var box = ['mdd',20,'郑州',new Date()];
// alert(box);

// var box = ['mdd',20,'郑州'];
// alert(box.join('|'));

// var box = [1,2,3,4,5];
// alert(box.reverse());
// alert(box);

// var box = [4,2,7,3,1];
// box.sort();
// alert(box);

// function compare(value1,value2){
// 	if(value1 < value2){
// 		return -1;
// 	}else if(value1 > value2){
// 		return 1;
// 	}else{
// 		return 0;
// 	}
// }

// var box = [0,1,5,10,15];
// alert(box.sort(compare));

// var box = ['mdd',20,'郑州'];
// var box2 = box.concat('计算机编程');
// alert(box2);

var box = ['mdd',20,'郑州'];
var box2 = box.slice(2);
alert(box2);