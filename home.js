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
		background.style.top = currOffset;
		background.style.bottom = -currOffset;
	}
  
	window.addEventListener("scroll",updateScroll);
}
