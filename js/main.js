(() => {
	console.log("Javascript is linked up");

	/*PLAYING AUDIO INDIVIDUALLY*/
	let aud0 = document.querySelector('#audio0'),
		aud1 = document.querySelector('#audio1'),
		aud2 = document.querySelector('#audio2'),
		aud3 = document.querySelector('#audio3'),
		aud4 = document.querySelector('#audio4'),
		aud5 = document.querySelector('#audio5'),
		play0 = document.querySelector('#string1');
		play1 = document.querySelector('#string2');
		play2 = document.querySelector('#string3');
		play3 = document.querySelector('#string4');
		play4 = document.querySelector('#string5');
		play5 = document.querySelector('#string6');

	function playAudio0() {
		aud0.currentTime = 0;
		aud0.play();
	}
	function playAudio1() {
		aud1.currentTime = 0;
		aud1.play();
	}
	function playAudio2() {
		aud2.currentTime = 0;
		aud2.play();
	}
	function playAudio3() {
		aud3.currentTime = 0;
		aud3.play();
	}
	function playAudio4() {
		aud4.currentTime = 0;
		aud4.play();
	}
	function playAudio5() {
		aud5.currentTime = 0;
		aud5.play();
	}

	play0.addEventListener("mouseover", playAudio0);
	play1.addEventListener("mouseover", playAudio1);
	play2.addEventListener("mouseover", playAudio2);
	play3.addEventListener("mouseover", playAudio3);
	play4.addEventListener("mouseover", playAudio4);
	play5.addEventListener("mouseover", playAudio5);

})();