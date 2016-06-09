$( document ).ready(function() {

var list = ['batman', 'superman', 'captainamerica', 'spiderman', 'ironman', 'hulk', 'thor', 'windersoldier', 'greenlantern', 'deadpool']

for(i=0; i<list.length; i++){
	
	var newButton = $('<button>' + list[i] + '</button>');

	

	$('#list').append(newButton);
}















    
});