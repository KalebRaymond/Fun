//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		var curElem = document.getElementsByClassName("chase_img")[0].getBoundingClientRect();
		var curY = curElem.top;
		var curX = curElem.left; 
			
		curY += (event.pageY - curY) / 5;
		curX += (event.pageX - curX) / 5;
		
		//console.log("b: " + curX + ", " + curY);

		document.title = "" + event.pageX + ":" + Math.floor(curX) + " | " + event.pageY + ":" + Math.floor(curY); 
		
		document.getElementsByClassName("chase_img")[0].style.top = (curY - 200) + "px";
		document.getElementsByClassName("chase_img")[0].style.left = (curX - 650) + "px";
    }
})();