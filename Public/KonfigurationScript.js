var RGBChange = function() {
	$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
};


// With JQuery
$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
    console.log("Hallo")
    let x = '"width:' + slideEvt.data-slider-value + '%"'
	$("#ex6SliderVal").style(x);
});


