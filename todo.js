$(document).ready(function(){
	var buttoncount = 0;
	//$("#submit").on("click", submitButton);
	$(document).on("click", "#submit", function(){
        buttoncount++;
        submitButton(buttoncount);
        
        var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	console.log(r,g,b)
	$(this).css("background-color", 'rgb('+ r +','+g+','+b+')');
        
    });
    
    $(document).on("click", "#deletebutton", function(){
        $(this).parent().fadeOut();
        
    });
	
});


function submitButton(buttoncount){
	console.log(buttoncount);
	var input = $("#input").val();
	console.log(input);
	if (input ==""){
		alert("Please Input Text")
	}else{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	$("#list").prepend('<li style = "background: rgb('+ r +','+g+','+b+')">' + input + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
	+ '<button id = deletebutton>'+'X </button></li>');
	console.log(r,g,b)
	}
}



//rgb('+ r +','+g+','+b+')'
