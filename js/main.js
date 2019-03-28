(() => {
	console.log("Ready to jam!!!");

	let		drumsticks  = document.querySelector(".drumsticks");
        dropzones   = document.querySelector(".dropzones");
      	audio	     	= document.querySelector(".audio");
      	audio2      = document.querySelector(".audio2");
        audio3      = document.querySelector(".audio3");
        audio4      = document.querySelector(".audio4");
        audio5      = document.querySelector(".audio5");
        audio6      = document.querySelector(".audio6");
        audio7      = document.querySelector(".audio7");
        audio8      = document.querySelector(".audio8");
        audio9      = document.querySelector(".audio9");
        audio10      = document.querySelector(".audio10");

  let crashDropzone 	   = document.querySelector('#crash');
  	  hiTomDropzone 	   = document.querySelector('#hi-tom');
      snareDropzone      = document.querySelector('#snare');
      medTomDropzone     = document.querySelector('#med-tom');
      floorTomDropzone   = document.querySelector('#floor-tom');
      bassDrumDropzone   = document.querySelector('#bass-drum');
      crash2Dropzone     = document.querySelector('#crash2');
      rideDropzone     = document.querySelector('#ride');
      openHatDropzone     = document.querySelector('#open-hat');
      kickDropzone     = document.querySelector('#kick');

  /*function createDrumstick(drumstick) {
    let newDrumstick = `<img draggable id="drumstick1" class="drumstick" src="images/drumstick1.svg" alt="drumstick">`;

        drumsticks.innerHTML += newDrumstick;

    initDrag();
  } */

  function initDrag() {
    drumsticks.querySelector('img');
    img.addEventListener("dragstart", function(e) {
      console.log('about to make some noise!')
    });
  }

  dropzones.addEventListener("dragover", function(e) {
      e.preventDefault();
      console.log("that's the beat!");
  });

  crashDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio.currentTime = 0;
      audio.play();
  });

  hiTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio2.currentTime = 0;
      audio2.play();
  });

  snareDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio3.currentTime = 0;
      audio3.play();
  });

  medTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio4.currentTime = 0;
      audio4.play();
  });

  floorTomDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio5.currentTime = 0;
      audio5.play();
  });

  bassDrumDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio6.currentTime = 0;
      audio6.play();
  });

  crash2Dropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio7.currentTime = 0;
      audio7.play();
  });

  rideDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio8.currentTime = 0;
      audio8.play();
  });

  openHatDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio9.currentTime = 0;
      audio9.play();
  });

  kickDropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log("nice!");
      audio10.currentTime = 0;
      audio10.play();
  });

  /*createDrumstick(0);*/

})();