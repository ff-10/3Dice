(function () {
	//define variables
	let rotateY = 0, rotateX = 0;

    		// keydowns
	 	document.onkeydown = function (e) {
	 		if (e.keyCode === 37/*LEFT*/) rotateY -= 5
	 		else if (e.keyCode === 38/*TOP*/) rotateX += 5
	 		else if (e.keyCode === 39/*RIGHT*/) rotateY += 5
	 		else if (e.keyCode === 40/*BOTTOM*/) rotateX -= 5

	 		//Add degrees to transform:
	 		document.querySelector('.dice').style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
	 	}
})();
