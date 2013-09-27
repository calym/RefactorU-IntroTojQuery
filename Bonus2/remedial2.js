

$(document).ready(function() {

	$("p").mouseover(function(){
		$(this).css ('color','pink');
	});

	$("h1").mouseover(function(){
		$("h1").append("!");
	});

	$("h2").mouseover(function(){
		$("h2").append("!");
	});
	
	$("h3").mouseover(function(){
		$("h3").append("!");
	});

	$("a").click(function(){								
		var stay = confirm("Are you sure you want to leave?");	
		if (stay ==false) {
			$(this).remove();
			return false;
			
		}
	}); 


}); //this closes the document

