//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		var curElem = document.getElementsByClassName("chase_img")[0].getBoundingClientRect();
		var curY = curElem.top;
		var curX = curElem.left; 
		
		console.log("a: " + curX + ", " + curY);
		
		if(event.pageY > curY)
		{
			curY++;
		}
		else if(event.pageY < curY)
		{
			curY--;
		}
		
		if(event.pageX > curX)
		{
			curX++;
		}
		else if(event.pageX < curX)
		{
			curX--;
		}
		
		console.log("b: " + curX + ", " + curY);

		document.title = "" + event.pageX + ", " + event.pageY; 
		
		document.getElementsByClassName("chase_img")[0].style.top = (curY - 200) + "px";
		document.getElementsByClassName("chase_img")[0].style.left = (curX - 650) + "px";
    }
})();