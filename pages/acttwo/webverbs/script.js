
  $(function() {
    $( "#piece1" ).draggable({stack: 'piece1'});
    $('#piece1').draggable({containment: "parent" });

  });

    $(function() {
    $( "#piece1, #piece2, #piece3, #piece4, #piece5, #piece6, #piece7, #piece8, #piece9, #piece10, #piece11, #piece12, #piece13, #piece14, #piece15, #piece16, #piece17, #piece18, #piece19, #piece20, #piece21, #piece22, #piece23, #piece24, #piece25, #piece26, #piece27, #piece28, #piece29, #piece30" ).draggable({stack: '#piece1, #piece2, #piece3, #piece4, #piece5, #piece6, #piece7, #piece8, #piece9, #piece10, #piece11, #piece12, #piece13, #piece14, #piece15, #piece16, #piece17, #piece18, #piece19, #piece20, #piece21, #piece22, #piece23, #piece24, #piece25, #piece26, #piece27, #piece28, #piece29, #piece30'});
    $('#piece1, #piece2, #piece3, #piece4, #piece5, #piece6, #piece7, #piece8, #piece9, #piece10, #piece11, #piece12, #piece13, #piece14, #piece15, #piece16, #piece17, #piece18, #piece19, #piece20, #piece21, #piece22, #piece23, #piece24, #piece25, #piece26, #piece27, #piece28, #piece29, #piece30').draggable({containment: "space" });

  });

window.onload = function(){
    $('.pieces').each(function(){
        $(this).css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
	});
}



