//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		var curY = document.getElementsByClassName("chase_img")[0].style.top;
		var curX = document.getElementsByClassName("chase_img")[0].style.left;
		
		console.log(curX + ", " + curY);
		
		var dX = event.pageX - curX;
		var dY = event.pageY - curY;
		var m = dY / dX;
		
		curX += /*m * Math.cos(dX)*/ 1;
		curY += /*m * Math.sin(dY)*/ 1;
		//console.log(m);
		
		document.title = "" + event.pageX + ", " + event.pageY; 
		
		
		document.getElementsByClassName("chase_img")[0].style.top = (curY - 200) + "px";
		document.getElementsByClassName("chase_img")[0].style.left = (curX - 650) + "px";
    }
})();