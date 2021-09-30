window.onload = function()
{
	var background = [];

	//Init Background Data
	var backgrounds = document.querySelectorAll(".background");


	function updateScroll()
	{	
		var currScroll = window.scrollY;
		for(var i = 0; i < backgrounds.length; i++)
		{
			updateBG(currScroll, backgrounds[i]);
		}
	}
	
	function updateBG(currScroll, background)
	{
		console.log("Something something scroll " + background.dataset.scrollspeed);
		var currOffset = currScroll * background.data.scrollSpeed;
		background.element.style.transform = "transform.3d(0," + currOffset + "px, 0)";
	}
  
	document.addEventListener("scroll",updateScroll);
	updateScroll();
}
