function blowBalloonn(){
	var width = $('.balloonn').width();
	var height = $('.balloonn').height();

	width = width + 1;
	height = height + 1;

	$('.balloonn').css('width', width);
	$('.balloonn').css('height', height);
	$('.balloonn').css('border-radius', width/2);
}

function popBalloonn(){
	$('.balloonn').css('width', 0);
	$('.balloonn').css('height', 0);
	$('.balloonn').css('border-radius', 0);
}

window.onload = function(){
	setInterval(blowBalloonn, 10);
	$('.balloonn').click(popBalloonn);
}