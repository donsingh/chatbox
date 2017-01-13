<?php
	$sql = mysqli_connect("localhost", "root","","chatbox");
	
	$q = "SELECT * FROM messages";
	
	$res = mysqli_query($sql, $q);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title></title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<style>
	.box{
		height:500px;
		border: 1px solid black;
		width:800px;
		margin:5% auto;
	}
	.in{
		height:100%;
		float:left;
	}
	.left-box{
		border-right:1px solid #00bcd4;
		width:40%;
	}
	.right-box{
		width:60%;
		position: relative;
	}
	.block{
	}
	.search-box{
		height:20%;
	}
	.person-box{
		height:13%;
	}
	.active-person{
		background-color:#00b1ff;
	}
	.profile{
		width:20%;
		height:100%;
		text-align:right;
		vertical-align:middle;
	}
	.img-circle{
		position:relative;
		height:65%;
		margin-top:16.25%;
	}
	.profile-name{
		padding:5%;
	}
	.active-person .profile-name{
		font-weight:600;
		color:white;
	}
	.chat-header{
		background-color:#eee;
		height:10%;
		width:100%;
		font-weight:bold;
	}
	.chat-header p{
		padding:15px;
	}
	.chat-box{
		height:15%;
		width:100%;
		position:absolute;
		bottom:0px;
	}
	.chat-area{
		position:relative;
		width:100%;
		height:70%;
		overflow-y: scroll;
		overflow-x: hidden;
		
	}
	.from{
		width:100%;
		text-align:left;
		padding:3px;
	}
	.to{
		width:100%;
		text-align:right;
		padding:3px;
	}
	.message{
		border-radius:10px;
		display:inline-block;
	}
	.from .message{
		color:white;
		background-color:#00b1ff;
		margin-left:25px;
	}
	.to .message{
		background-color:#eaeef3;
		margin-right:25px;
	}
	.message p{
		margin:10px 15px;
	}
	.ilad{
		width:80%;
		margin:0 auto;
		height:70%;
		background-color:#e9eff3;
		border:1px solid #e8eced;
		vertical-align:middle;
	}
	.clip{
		height:50%;
		margin-top:2%;
		font-size:1.5em;
		opacity:0.6;
		margin-left:6px;
	}
	.ilad input{
		border: 0;
		background: transparent;
		font-size:1.2em;
		width:70%;
		margin-top:-15px;
	}
	.ilad input:focus{
		outline: none;
	}
	.sm{
		font-size:30px;
	}
	</style>
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
					<p class=''>&nbsp;&nbsp;Daphne Leah Sabang<span class='pull-right'>1:44 PM</span></p>
				</div>
			</div>
			<div class='person-box'>
				<div class='profile pull-left'>
					<img src="img/gs.png" alt="..." class="img-circle">
				</div>
				<div class='profile-name'>
					<p class=''>&nbsp;&nbsp;Brenette Abrenica<span class='pull-right'>11:29 PM</span></p>
				</div>
			</div>
			<div class='person-box'>
				<div class='profile pull-left'>
					<img src="img/gs.png" alt="..." class="img-circle">
				</div>
				<div class='profile-name'>
					<p class=''>&nbsp;&nbsp;Jose Rizal<span class='pull-right'>6:22 AM</span></p>
				</div>
			</div>
		</div>
		<div class='in right-box'>
			<div class='chat-header'>
				<p>To: Daphne Leah Sabang</p>
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
			<?php
			$largest = 0;
			if($res){
				while($row = mysqli_fetch_array($res)){
					$dir = ($_GET['id']==$row['blame']) ? "to" : "from";
					echo 	"<div class='".$dir."'>
								<div class='message'>
									<p>".$row['message']."</p>
								</div>
							</div>";
					$largest = $row[0];
				}
			}
			?>
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
var largest = <?php echo $largest;?>;
var person = <?php echo $_GET['id'];?>;
setInterval(function(){ check(); }, 500);
function send(){
	var div = $('.chat-area');
    var height = div.height();
	var msg = $("#msg").val();
	$.ajax({
		url:"message.php",
		cache:false,
		method:"POST",
		data:{ 
			send : msg,
			id : <?php echo $_GET['id'];?>
		},
		success:function(data){
			largest = data;
			var obj = "<div class='to'><div class='message'><p>"+msg+"</p></div></div>";
			$(".chat-area").append(obj);
			div.animate({scrollTop: height}, 500);
			height += div.height();
		}
	});
	
	$("#msg").val("");
	return false;
}

function check()
{
	var div = $('.chat-area');
    var height = div.height();
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
				var dir = (block[x][2]==person) ? "to" : "from";
				var obj = "<div class='"+dir+"'><div class='message'><p>"+block[x][4]+"</p></div></div>";
				$(".chat-area").append(obj);
				largest=block[x][0];
				div.animate({scrollTop: height}, 500);
				height += div.height();
			}
		}
	});
}
</script>