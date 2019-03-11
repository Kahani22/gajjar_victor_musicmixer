(() => {
	console.log("Javascript is linked up");

	/*let strings = document.querySelectorAll('.eadgbe');

	function guitarStrumming() {
		strings.querySelectorAll('.eadgbe').forEach(div => {
			div.addEventListener("dragstart", function(e) {
				console.log('draggin...')
			e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}*/

	/*var audio = document.getElementById(".eadgbe");*/

	/*var strings = [0, 1, 2, 3, 4, 5]

	var strings = document.querySelectorAll(".eadgbe");

	strings.addEventListener("click", playAudio)
		console.log("WUBDFAOUBFOANF");
		function playAudio() {
	  audio.play();
	};*/
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
		aud0.play();
	}
	function playAudio1() {
		aud1.play();
	}
	function playAudio2() {
		aud2.play();
	}
	function playAudio3() {
		aud3.play();
	}
	function playAudio4() {
		aud4.play();
	}
	function playAudio5() {
		aud5.play();
	}

	play0.addEventListener("click", playAudio0);
	play1.addEventListener("click", playAudio1);
	play2.addEventListener("click", playAudio2);
	play3.addEventListener("click", playAudio3);
	play4.addEventListener("click", playAudio4);
	play5.addEventListener("click", playAudio5);

})();