// This is just some stuff
var doCoolStuff = function(){
	var currentClassName=
	document.getElementById('cool').className;
	//changing classname
	if(currentClassName== 'cool'){
	document.getElementById('cool').className='cool red';
     }else{
     	document.getElementById('cool').className='cool'
     }

	}		
var sayMyName = function(name) {
	alert('My Name is:'+name);
}




var car = {
	make:'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1',
			'seat2',
			'seat3',
			'seat4',
					],
				turnOn: function (){
					this.isTurnedOn= true;
						   			},
					fly: function (){ 
						   	alert('fly');
						},
						SwitchCar: function(isOn){
						   	console.log('turn Car'+isOn)
						  if (isOn == true) {
						   			this.isTurnedOn= true;
						   }else {
						   			this.isTurnedOn	=false;
						   	}
						}
				    };
	console.log('hello there buddy');