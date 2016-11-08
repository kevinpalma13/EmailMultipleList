$(document).ready(function(){

	$("#inputEmail").keyup(function(event) {
  		var inputText = $("#inputEmail").val();
  		var lastChar = inputText.substr(inputText.length - 1);
  		if(event.keyCode == 188 && lastChar == ','){ //KEYCODE 188 -> ','
	  		if(validateEmail(inputText)){
	  			var emailtext = inputText.split(",", 1);
	  			$("#listEmails").append("<div id='"+emailtext+"' class='emailtext'>"+emailtext+"<div id='emailtext-del'>X</div></div>");
	  			$("#inputEmail").val("");

				$("#listEmails #emailtext-del").click(function(){
					$(this).parent().remove();
				});
	  			
				$("#inputEmail").attr("style","color:black");
	  		}
	  		else{
	  			$("#inputEmail").val(inputText.split(",", 1));
	  			$("#inputEmail").attr("style","color:red");
	  		}
	  	}
	});

})

function validateEmail(inputEmail) {
	var res = inputEmail.split(";", 1);
  	var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return filter.test(res);
}



