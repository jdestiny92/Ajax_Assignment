$( document ).ready(function() {

var list = ['batman', 'superman', 'captainamerica', 'spiderman', 'ironman', 'hulk', 'thor', 'windersoldier', 'greenlantern', 'deadpool'];

for(i=0; i<list.length; i++){
	
	var newButton = $('<button>' + list[i] + '</button>');

	$('#list').append(newButton);
};


$('#submit').on('click', function(){

	var searchTerm = $('#text').val();

	$.ajax({url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC", method: 'GET'})
 	.done(function(response) {
   		console.log(response) // the json object that came back from the api
 	});

});












//end of document ready    
});