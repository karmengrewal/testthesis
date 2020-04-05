// var fruits = ['pear', 'apple', 'banana']
// var number = 0;




// window.onload = function(){
// for (var i=0;i<fruits.length;i++){
// 	console.log(i);
// 	var chosenFruit = fruits[i];
	
// 	$('body').append('<img src="image/'+chosenFruit+'.png">');
// }

// }






var windowWidth;
var windowHeight;
var totalFish = 10;
var pool;

window.onload = function(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	for(var i=0;i<totalFish;i++){
		var topPos = randNum(windowHeight);
		var leftPos = randNum(windowWidth);

		var fish = $('<img class="fish" src="image/fish.jpg">');


			$(fish).css('top', topPos + 'px');
			$(fish).css('left', leftPos + 'px');

		$('body').append(fish);
	}


moveFish();
}

	function moveFish(){
		$('.fish').each(function(){});
			var topPos = randNum(windowHeight);
			var leftPos = randNum(windowWidth);

			$(this).css('top', topPos + 'px');
			$(this).css('left', leftPos + 'px');



}


function randNum(value){
	var number = Math.random()*value;
	number = Math.floor(number);
	return number;
}


// window.onload = function(){
//     $('.fish').each(function(){
//         $(this).css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
// 	});
// }












