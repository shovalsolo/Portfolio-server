

function apichucknorris(){
	var url = "https://api.chucknorris.io/jokes/random";
$.ajax({
	url: url,
	method: 'GET',
}).done(function(result) {	//connecting to api with ajax and the parameters

		var res = result;
		
		var value = res.value;

		$(".chucknorris").append(value);

}).fail(function(err) {
	throw err;
});
}