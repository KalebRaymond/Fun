//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		document.title = "" + event.pageX + ", " + event.pageY; 
		document.getElementById("ci1").style.top = event.pageY + "px";
		document.getElementById("ci1").style.left = event.pageX + "px";
		document.getElementById("ci1").style.borderColor = #FFFFFF;
    }
})();