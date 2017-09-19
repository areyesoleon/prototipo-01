var mix = $("#mix");
var message = ['Hola','Welcome','¿Quienes somos?','¿About us?'];
var init = 0;
mix.text(message[0]);
setInterval(function(){
	init++;
	if(init >= message.length){
		init = 0;
	}
	mix.shuffleLetters({
		"text": message[init]
	});
},2000);
