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