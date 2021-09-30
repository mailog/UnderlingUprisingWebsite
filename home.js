window.onload = function()
{
  var background = [];
  
  //Init Background Data
  var backgrounds = document.querySelectorAll(".background");
  
  for(var bg in backgrounds)
  {
      background.push(bg);
  }
  
  console.Log(background.length);
  
  function updateScroll()
  {
      console.Log("SCROLLLLLLLL!");
  }
  
  document.AddEventListener("scroll",updateScroll);
  updateScroll();
}
