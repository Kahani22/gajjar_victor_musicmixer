(() => {
	console.log('fired'); 
	// simple test to see if js works 
	// set up the puzzle pieces and boards
	// need refrences to drag what (drag from)
	const thePieces = ("topLeft", "topRight", "bottomLeft", "bottomRight");
	//get reference for where to put it (drag to)
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get reference for buttons (action)
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	function createPuzzlePieces(pictureIndex) {
		//generate images and put them in the container in respective places
		// debugger;
		// loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = 'img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg alt="puzzle piece">';
			
			piecesBoard.innerHTML += newPuzzlePiece; 
		});
	}



	function resetPuzzlePieces() {
		//for when the bg changes when you click each puzzle (basically reset)
   		// debugger;
   		// change and reset the puzzle pieces
   		piecesBoard.innerHTML += "";

   		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling goes here, at last
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);


	
})();
