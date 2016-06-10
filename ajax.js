$( document ).ready(function() {

var list = ['batman', 'superman', 'captainamerica', 'spiderman', 'ironman', 'hulk', 'thor', 'blackwidow', 'greenlantern', 'deadpool'];

function sort(){
for(i=0; i<list.length; i++){
	
	var newButton = $('<button class="heroes">' + list[i] + '</button>');

	newButton.attr('value', list[i]);

	$('#list').append(newButton);
};
};

sort();

$('#submit').on('click', function(){

	var searchTerm = $('#text').val();

	list.push(searchTerm);

	$('#list').html('');

	sort();

	$('#text').val('');

});

$('.heroes').on('click', function(){

	var value = this.value;

	console.log(value);
	
	$('#gifContainer').html('');

	$.ajax({url: "http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=dc6zaTOxFJmzC", method: 'GET'})
 	.done(function(response) {
   		console.log(response) // the json object that came back from the api

   			for(i=0; i<10; i++){
 				var randomImage = response.data[i].images.fixed_height.url;
 				var randomRating = response.data[i].rating;
 				console.log(randomRating);
 				console.log(randomImage);
 				
 				var newImage = $('<img src="' + randomImage + '" />');

 				var rating = $('<h3>' + 'Rating: ' + randomRating + '</h3>');

 				$('#gifContainer').append(rating);
 				$('#gifContainer').append(newImage);
 		};
 	
 		});

   

});










//end of document ready    
});