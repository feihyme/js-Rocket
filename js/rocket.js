var timer= null;
var countdownNumber=10;

var changeState = function(state) {
	document.body.className	='body-state' + state;
		clearInterval(timer);
		countdownNumber= 10;
		document.getElementById(
			'Countdown').innerHTML= countdownNumber;

		// countdown
	if(state==2) {
		timer= setInterval(function (){
			countdownNumber=countdownNumber-1;
			document.getElementById(
			'Countdown').innerHTML= countdownNumber;
			

			if (countdownNumber>4 && countdownNumber<= 7){
				//be nervous
				document.getElementById('nervous').className='nervous show';
			}else{
				document.getElementById('nervous').className='nervous ';
			}
			if (countdownNumber<=4 && countdownNumber>1){
				//can't wait
				document.getElementById('cant-wait').className='cant-wait show';
			}else{
				document.getElementById('cant-wait').className='cant-wait';
			}


			if(countdownNumber <=0){
			changeState(3);
			};
		// This is where the Rocket Speed is managed:
		},500); 
		//Right Above	
	} else if (state==3){
		var success = setTimeout(function()
		{
			var randomNumber =Math.round(Math.random()*10);

			console.log('randomNumber:', randomNumber)
			//Succes//
			if (randomNumber > 5) {
				changeState(4);
			}else{
				changeState(5); //Oh no! The rocket...
			}
		}, 2000);
	};
};