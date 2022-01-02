(function () {

	//define values
	var rotateY = 0,
	 	  rotateX = 0;

    // keydown eventhandler
	 	document.onkeydown = function (e) {

	 		if (e.keyCode === 37/*LEFT*/) rotateY -= 5
	 		else if (e.keyCode === 38/*TOP*/) rotateX += 5
	 		else if (e.keyCode === 39/*RIGHT*/) rotateY += 5
	 		else if (e.keyCode === 40/*BOTTOM*/) rotateX -= 5

	 		//Add degrees to transform:;
	 		document.querySelector('.dice').style.transform =
	 		'rotateY(' + rotateY + 'deg)'+'rotateX(' + rotateX + 'deg)';

	 	}
})();

let dice = document.querySelector('.dice');

function auto__mode__on() {
  dice.style.animationName = "auto_rotate";
}
function auto__mode__off(){
  dice.style.animationName = "";
}
