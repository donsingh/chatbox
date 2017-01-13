<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title></title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/chat.css" rel="stylesheet">
  </head>
  <body>
	<div class='box'>
		<div class='in left-box'>
			<div class='block search-box'>
				
			</div>
			<div class='person-box active-person'>
				<div class='profile pull-left'>
					<img src="img/gs.png" alt="..." class="img-circle">
				</div>
				<div class='profile-name'>
					<p>&nbsp;&nbsp;<span class='box-name'>Daphne Leah Sabang</span><span class='pull-right'>1:44 PM</span></p>
					<p class='hidden user_id'>2</p>
				</div>
			</div>
			<div class='person-box'>
				<div class='profile pull-left'>
					<img src="img/gs.png" alt="..." class="img-circle">
				</div>
				<div class='profile-name'>
					<p>&nbsp;&nbsp;<span class='box-name'>Brenette Abrenica</span><span class='pull-right'>11:29 PM</span></p>
					<p class='hidden user_id'>3</p>
				</div>
			</div>
			<div class='person-box'>
				<div class='profile pull-left'>
					<img src="img/gs.png" alt="..." class="img-circle">
				</div>
				<div class='profile-name'>
					<p>&nbsp;&nbsp;<span class='box-name'>Jose Rizal</span><span class='pull-right'>6:22 AM</span></p>
					<p class='hidden user_id'>4</p>
				</div>
			</div>
		</div>
		<div class='in right-box'>
			<div class='chat-header'>
				<p>To: <span class='receipient'>Daphne Leah Sabang</span></p>
			</div>
			<div class='chat-area'>
			<!--
				<div class='from'>
					<div class='message'>
						<p>I've forgotten how it was before</p>
					</div>
				</div>
				
				<div class='to'>
					<div class='message'>
						<p>Bootstrap's JavaScript plugins</p>
					</div>
				</div>
			-->
			</div>
			<form onsubmit='return send();' autocomplete="off">
			<div class='chat-box'>
				<div class='ilad'>
					<span class='clip glyphicon glyphicon-paperclip'></span>
					
						<input type='text' id='msg'>
					
					<span class=' sm'>&#x263A;</span>
					<span class='clip glyphicon glyphicon-send'></span>
				</div>
			</div>
			</form>
		</div>
	</div>
  </body>
</html>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script>
var largest = 0;
var person = <?php echo $_GET['id'];?>;
var target = 2;
$(document).ready(function(){
	scrollDown();
	setInterval(function(){ check(); }, 500);
	
	$(".person-box").on("click", function(){
		if(!$(this).hasClass("active-person")){
			$(".active-person").removeClass("active-person");
			$(this).addClass("active-person");
			var name = $(this).find(".box-name").text();
			var t = $(this).find(".user_id").text();
			$(".receipient").text(name);
			$(".chat-area").html("");
			largest=0;
			target=t;
		}
	});
});

function send(){
	var msg = $("#msg").val();
	$.ajax({
		url:"message.php",
		cache:false,
		method:"POST",
		data:{ 
			send : msg,
			id : <?php echo $_GET['id'];?>,
			to: target
		},
		success:function(data){
			insert(msg,person);
			largest = data;
			scrollDown();
		}
	});
	$("#msg").val("");
	return false;
}

function check()
{
	$.ajax({
		url:"message.php",
		cache:false,
		method:"POST",
		data:{ 
			fetch:largest
		},
		success:function(data){
			block = JSON.parse(data);
			for(var x=0; x<block.length;x++){
				insert(block[x][4],block[x][2]);
				largest=block[x][0];
			}
			if(block.length!=0){
				scrollDown();
			}
		}
	});
}

function insert(msg, dir)
{
	var per = (dir==person) ? "to" : "from";
	var obj = "<div class='"+per+"'><div class='message'><p>"+msg+"</p></div></div>";
	$(".chat-area").append(obj);
}

function scrollDown()
{
	var hey = $('.chat-area')[0].scrollHeight;
	$('.chat-area').animate({scrollTop: hey}, 500);
}


</script>