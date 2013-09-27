

$(document).ready(function() {

	$(".button").click(function(){
		$("body").append('<div class = "popup"> Yay, popup window!</div>');
		$(".popup").css({'margin-left':'33%', 'position':'fixed','font-weight':'bold'});
		$(".popup").append('<div class = "close"> close</div>');
			$(".close").click(function(){
				$(".popup").remove();
			});
	});


	

}); //this closes the document

