$(function(){
	var tosave = $('.tosave');
	var textareabox = $('.form-control');
	var modal = $('#modal');
	var undo = $('.undo');
	var triangle = $('.triangle');
    var undo = $('.undo');
    var wrapper = $('.wrapper');
    var circle = $('.circle');
    var data = "";
    var arrow = $('#arrow');




    tosave.hover(function(){
    circle.css("display", "block");
    tosave.css("color","white");
    arrow.css("color","white");
    }, function(){
    circle.css("display", "none");
     tosave.css("color","#4285F4");
     arrow.css("color","#4285F4")
     });



    arrow.hover(function(){
    	circle.css("display", "block");
		circle.css("left", "38px");
		arrow.css("color","white");
	},
	function(){
    circle.css("display", "none");
     arrow.css("color","#4285F4");
     circle.css("left", "210px");
 });




 	

	tosave.click(function(){
			data = textareabox.val();
			circle.css("display", "none");
			tosave.css("display","none");
			arrow.css("display"," none");
			textareabox.css("background-color","#4285F4");
			textareabox.prop('readonly',true);
			modal.css("background-color","#D3D3D3");
			undo.css("display","block");
			wrapper.css("display","block");
			
			triangle.css("border-bottom","60px solid #4285F4")
			textareabox.val('');
			textareabox.removeAttr('placeholder');
			

	});


	undo.click(function(){
		textareabox.css("background-color","white");
		textareabox.prop('readonly',false);
		modal.css("background-color","#4285F4");
		triangle.css("border-bottom","60px solid white")
		undo.css("display","none");
		wrapper.css("display","none");
		tosave.css("display","block");
		arrow.css("display"," inline");
		if(data == ""){
		textareabox.attr("placeholder","Begin your masterpiece...");
	    }
	    else 
	    {
	    	textareabox.val(data);
	    }
	});


	
})