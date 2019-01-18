//Report cursor position to document title.
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
		document.title = "" + event.pageX + ", " + event.pageY; 
		/*document.getElementById("cic1").style.top = event.pageY + "px";
		document.getElementById("cic1").style.left = event.pageX + "px";
		document.getElementById("cic1").style.borderColor = #FFFFFF;*/
		document.getElementsByClassName("chase_img")[0].style.borderColor = "white";
		document.getElementsById("main").style.top = parseInt(event.pageY) + "px";
		document.getElementsById("main").style.left = parseInt(event.pageX) + "px";
    }
})();