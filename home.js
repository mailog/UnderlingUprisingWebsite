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

	}
  
	document.addEventListener("scroll",updateScroll);
	updateScroll();
}
