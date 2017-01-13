$(document).ready(function(){
	$("*").dblclick(function(e){
		e.preventDefault();
	});
	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches
	
	
	
	//platforms
	var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="row"><hr><div class="col-md-6"><input type="text" class="form-control" name="platforms[]" placeholder="Problem Area"></div><div class="col-md-5"><textarea class="form-control" name="platDescript[]"   placeholder="Description"></textarea>				</div><div class="col-md-1">				<button class="btn btn-danger remove_field"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"></span></button></div></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    });
	
	//educational
	var max_fields2      = 10; //maximum input boxes allowed
    var wrapper2         = $(".input_fields_wrap2"); //Fields wrapper
    var add_button2      = $(".add_field_button2"); //Add button ID
    
    var x2 = 1; //initlal text box count
    $(add_button2).click(function(e){ //on add input button click
        e.preventDefault();
        if(x2 < max_fields2){ //max input box allowed
            x2++; //text box increment
            $(wrapper2).append('<div class="row"><div class="col-md-4">	<input type="text" class="form-control" name="school[]" placeholder="Name of School or Institution"></div><div class="col-md-3">		<input type="text" class="form-control" name="schoolProgram[]" placeholder="Course/Program"></div><div class="col-md-2"><input type="text" class="form-control" name="schoolTo[]" placeholder="From"></div>	<div class="col-md-2"><input type="text" class="form-control" name="schoolFrom[]" placeholder="Until"></div><div class="col-md-1"><button class="btn btn-danger remove_field2"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div></div>'); //add input box
        }
    });
    
    $(wrapper2).on("click",".remove_field2", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x2--;
    });
	
	//training
	var max_fields3      = 10; //maximum input boxes allowed
    var wrapper3         = $(".input_fields_wrap3"); //Fields wrapper
    var add_button3      = $(".add_field_button3"); //Add button ID
    
    var x3 = 1; //initlal text box count
    $(add_button3).click(function(e){ //on add input button click
        e.preventDefault();
        if(x3 < max_fields3){ //max input box allowed
            x3++; //text box increment
            $(wrapper3).append('<div class="row"><div class="col-md-4">	<input type="text" class="form-control" name="train[]" placeholder="Name of Training"></div><div class="col-md-3"><input type="text" class="form-control" name="trainWhere[]" placeholder="Place of Training"></div><div class="col-md-2"><input type="text" class="form-control" name="trainTo[]" placeholder="From"></div><div class="col-md-2">	<input type="text" class="form-control" name="trainFrom[]" placeholder="Until">	</div>	<div class="col-md-1"><button class="btn btn-danger remove_field3"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div></div>'); //add input box
        }
    });
    
    $(wrapper3).on("click",".remove_field3", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x3--;
    });
	
	//children
	var max_fields4      = 10; //maximum input boxes allowed
    var wrapper4         = $(".input_fields_wrap4"); //Fields wrapper
    var add_button4      = $(".add_field_button4"); //Add button ID
    
    var x4 = 1; //initlal text box count
    $(add_button4).click(function(e){ //on add input button click
        e.preventDefault();
        if(x4 < max_fields4){ //max input box allowed
            x4++; //text box increment
            $(wrapper4).append('<div class="input_fields_wrap4"><div class="row"><div class="col-md-4"><input type="text" class="form-control" name="childrenLast[]" placeholder="Last Name" required="required"></div><div class="col-md-4"><input type="text" class="form-control" name="childrenFirst[]" placeholder="First Name"  required="required"></div><div class="col-md-3"><input type="text" class="form-control" name="childrenMiddle[]" placeholder="Middle Name"  required="required"></div><div class="col-md-1"><button class="btn btn-danger remove_field4"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div>	</div></div>');
        }
    });
    
    $(wrapper4).on("click",".remove_field4", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x4--;
    });
	
	//organization sheet
	var max_fields5      = 10; //maximum input boxes allowed
    var wrapper5         = $(".input_fields_wrap5"); //Fields wrapper
    var add_button5      = $(".add_field_button5"); //Add button ID
    
    var x5 = 1; //initlal text box count
    $(add_button5).click(function(e){ //on add input button click
        e.preventDefault();
        if(x5 < max_fields5){ //max input box allowed
            x5++; //text box increment
            $(wrapper5).append('<div class="row"><div class="col-md-6"><input type="text" class="form-control" name="org[]" placeholder="Name of Organization">	</div><div class="col-md-3"><input type="text" class="form-control" name="orgPos[]" placeholder="Position"></div><div class="col-md-2">				<input type="text" class="form-control" name="memSince[]" placeholder="Member Since"></div><div class="col-md-1"><button class="btn btn-danger remove_field5"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div></div>');
        }
    });
    
    $(wrapper5).on("click",".remove_field5", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x5--;
    });
	
	//awards
	var max_fields6      = 10; //maximum input boxes allowed
    var wrapper6         = $(".input_fields_wrap6"); //Fields wrapper
    var add_button6      = $(".add_field_button6"); //Add button ID
    
    var x6 = 1; //initlal text box count
    $(add_button6).click(function(e){ //on add input button click
        e.preventDefault();
        if(x6 < max_fields6){ //max input box allowed
            x6++; //text box increment
            $(wrapper6).append('<div class="row"><div class="col-md-5"><input type="text" class="form-control" name="award[]" placeholder="Award"></div>		<div class="col-md-4"><input type="text" class="form-control" name="awardFrom[]" placeholder="Awarding Organization / Office"></div><div class="col-md-2"><input type="text" class="form-control" name="dateAward[]" placeholder="Date of Award"></div><div class="col-md-1">				<button class="btn btn-danger remove_field6"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button>					</div></div>');
        }
    });
    
    $(wrapper6).on("click",".remove_field6", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x6--;
    });
	
	//previous positions
	var max_fields7      = 10; //maximum input boxes allowed
    var wrapper7         = $(".input_fields_wrap7"); //Fields wrapper
    var add_button7      = $(".add_field_button7"); //Add button ID
    
    var x7 = 1; //initlal text box count
    $(add_button7).click(function(e){ //on add input button click
        e.preventDefault();
        if(x7 < max_fields7){ //max input box allowed
            x7++; //text box increment
            $(wrapper7).append('<div class="row"><div class="col-md-3"><input type="text" class="form-control" name="ppTitle[]" placeholder="Position Title"></div><div class="col-md-4"><input type="text" class="form-control" name="ppCompany[]" placeholder="Company / Organization Name">	</div>	<div class="col-md-2"><input type="text" class="form-control" name="ppFrom[]" placeholder="From (year)"></div><div class="col-md-2"><input type="text" class="form-control" name="ppUntil[]" placeholder="Until (year)"></div><div class="col-md-1"><button class="btn btn-danger remove_field7"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div></div>');
        }
    });
    
    $(wrapper7).on("click",".remove_field7", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x7--;
    });
	
	//sources
	var max_fields8      = 50; //maximum input boxes allowed
    var wrapper8      = $(".input_fields_wrap8"); //Fields wrapper
    var add_button8      = $(".add_field_button8"); //Add button ID
    
    var x8 = 1; //initlal text box count
    $(add_button8).click(function(e){ //on add input button click
        e.preventDefault();
        if(x8 < max_fields8){ //max input box allowed
            x8++; //text box increment
            $(wrapper8).append('<div class="row"><div class="col-md-6"><input type="text" class="form-control" name="sourceName[]" placeholder="Source Name"></div><div class="col-md-5"><input type="text" class="form-control" name="sourceLink[]" placeholder="Source Link (if any)"></div><div class="col-md-1"><button class="btn btn-danger remove_field8"><span class="glyphicon glyphicon-remove" style="font-size:1.3em;"> </span></button></div></div>');
        }
    });
    
    $(wrapper8).on("click",".remove_field8", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x8--;
    });
	
	$(".next").click(function(){
		if(check()){
			
			if(animating) return false;
			animating = true;
			current_fs = $(this).parent();
			next_fs = $(this).parent().next();
			
			//activate next step on progressbar using the index of next_fs
			$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
			
			//show the next fieldset
			next_fs.show(); 
			//hide the current fieldset with style
			current_fs.animate({opacity: 0}, {
				step: function(now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale current_fs down to 80%
					scale = 1 - (1 - now) * 0.2;
					//2. bring next_fs from the right(50%)
					left = (now * 50)+"%";
					//3. increase opacity of next_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({'transform': 'scale('+scale+')'});
					next_fs.css({'left': left, 'opacity': opacity});
				}, 
				duration: 800, 
				complete: function(){
					current_fs.hide();
					animating = false;
				}, 
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
			
		}
		
	});

	$(".previous").click(function(){
		
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		
		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		
		//show the previous fieldset
		previous_fs.show();
		
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});

	$(".submit").click(function(){
		return false;
	})
	$("input, textarea").keyup(function(){
		if($(this).val()!=""){
			$(this).removeClass("error");
		}
	});
	$("input[type='date']").change(function(){
		if($(this).val()!=""){
			$(this).removeClass("error");
		}
	});
});
function check()
{
	var page = 0;
	$("fieldset").each(function(){
		page++;
		if($(this).is(":visible")){
			return false;
		}
	});
	var err = 0;
	$(".val-"+page).each(function(i){
		if($(this).val()==""){
				$(this).addClass("error");
				err++;
		}
	});
	if(err!=0){
		alert("Please complete all required fields!");
	}else{
		page++;
	}
	return (err===0);
}