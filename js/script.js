

function apichucknorris(){
    var url = "https://api.chucknorris.io/jokes/random"; //
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {	//connecting to api with ajax and the parameters
	 
    // remove any div with class of article to not add for each change of category
	//   $( ".article" ).remove();

      var res = result;
      console.log(res);
      
      var value = res.value;
    //   var icon = res.icon_url;

      $(".chucknorris").append(value);


	}).fail(function(err) {
	  throw err;
	});
	
}