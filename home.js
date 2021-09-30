window.onload = function()
{
  var background = [];
  
  //Init Background Data
  var backgrounds = document.querySelectorAll(".background");
	for(var i = 0; i < backgrounds.length; i++)
  {
	    console.log("Speed " + backgrounds[i].dataset.scrollspeed); 
  }
  
  function updateScroll()
  {
      console.log("SCROLLLLLLLL!");
  }
  
  document.addEventListener("scroll",updateScroll);
  updateScroll();
}
