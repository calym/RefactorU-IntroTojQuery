

//var formInput = [
// 	{"author1": ["quote1", "quote2", "quote3"]},
// 	{"author2": ["quote1", "quote2", "quote3"]}
// ];


$(document).ready(function() {
	$("#text").click(function() {
		console.log("hey, button clicked!");
		$("p").text("I'm text added with the .text() method!");
	});

		$("#header").click(function() {
		console.log("hey, header 1 clicked!");
		$("body").append("<h1>I'm a new Header1!</h1>")

		//To do this by assigning the header value to a variable first:
		// var newheader = $("<h1>I'm a new Header1!</h1>");
		// $("body").append(newheader);
	});

		$("#list").click(function() {
		console.log("hey, list button clicked!");
		$("body").append("<ul><li>kittens</li><li>puppies</li><li>hedgehogs</li></ul>")
	});	

		// var newparagraph = $("<p>I'm a new paragraph added to the body with .append(), yay!</p>");
		// $("body").append(newparagraph);



	



}); //this closes the document

// <form>
// Quote: <input type="text" name="quote"><br>
// Author: <input type="text" name="author"><br>
// <input type="submit" value="Submit">
// </form>