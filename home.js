window.onload = function()
{
  var background = [];
  
  //Init Background Data
  var backgrounds = document.querySelectorAll(".background");

  for(var bg in backgrounds)
  {
    console.log("Speed " + bg.dataset.scrollSpeed");
  }
  
  function updateScroll()
  {
      console.log("SCROLLLLLLLL!");
  }
  
  document.addEventListener("scroll",updateScroll);
  updateScroll();
}
