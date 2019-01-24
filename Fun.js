//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		document.title = "" + event.pageX + ", " + event.pageY; 
		
		document.getElementsByClassName("chase_img")[0].style.top = (event.pageY - 200) + "px";
		document.getElementsByClassName("chase_img")[0].style.left = (event.pageX - 650) + "px";
    }
})();