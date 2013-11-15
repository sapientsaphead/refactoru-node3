
$(function(){
	$("#signup-form").submit(function(e){
		e.preventDefault()

		//make a post request to our /signup endpoint
		// serialize - takes form and looks through input and grabs value out of them
		$.post('/formsubmit', $(this).serialize(), function(data){
			console.log(data);

			// if there was an error, show the error
			if(data.error){
				$('#message').text(data.error)
			}
			
			// if the request returned a success message, display it.
			if(data.success){
				$('#message').text(data.success)
			}
		})
	});
});