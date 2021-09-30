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
		var currOffset = currScroll * background.dataset.scrollspeed;
		background.style.transform = "transform.3d(0," + currOffset + "px, 0)";
		console.log(Date.now() + " Window - " + currScroll + " - Scroll Offset " + background.dataset.scrollspeed + ": " + currOffset);
	}
  
	document.addEventListener("scroll",updateScroll);
}
