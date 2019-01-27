//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		var i;
		for(i = 0; i < 9; i++)
		{
			var curElem = document.getElementsByClassName("chase_img")[4].getBoundingClientRect();
			var curY = curElem.top;
			var curX = curElem.left; 
				
			curY += ((event.pageY - curY) / 5)
			curX += ((event.pageX - curX) / 5)
			
			//console.log("b: " + curX + ", " + curY);


			document.title = "" + event.pageX + ":" + Math.floor(curX) + " | " + event.pageY + ":" + Math.floor(curY); 
			
			document.getElementsByClassName("chase_img")[i].style.top = (curY - 350) + "px";
			document.getElementsByClassName("chase_img")[i].style.left = (curX - 825) + "px";
		}
    }
})();