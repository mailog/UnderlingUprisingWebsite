window.onload = function()
{
  var background = [];
  
  //Init Background Data
  var backgrounds = Document.querySelectorAll(".background");
  
  for(var bg in backgrounds)
  {
      background.push(bg);
  }
  
  Console.Log(background.length);
  
  function updateScroll()
  {
      Console.Log("SCROLLLLLLLL!");
  }
  
  document.AddEventListener("scroll",updateScroll);
  updateScroll();
}
