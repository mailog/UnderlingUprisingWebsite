var rosecard = document.getElementById('rosecard');
var angelcard = document.getElementById('angelcard');
var deckstercard = document.getElementById('deckstercard');
var boogiecard = document.getElementById('boogiecard');

window.onload = function()
{
	var background = [];

	var docHeight = document.body.scrollHeight;

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
		if (currOffset < docHeight / 4)
		{
			background.style.transform = "translate3d(0, " + currOffset + "px, 0)";
        }
	}
  
	document.addEventListener("scroll", updateScroll, false);
	updateScroll();
}

function showrose()
{
	rosecard.element.style.visibility = "visible";
	angelcard.element.style.visibility = "hidden";
	deckstercard.element.style.visibility = "hidden";
	boogiecard.element.style.visibility = "hidden";
	console.log('rose');
}
function showangel()
{
	rosecard.element.style.visibility = "hidden";
	angelcard.element.style.visibility = "visible";
	deckstercard.element.style.visibility = "hidden";
	boogiecard.element.style.visibility = "hidden";
	console.log('angel');
}
function showdeckster()
{
	rosecard.element.style.visibility = "hidden";
	angelcard.element.style.visibility = "hidden";
	deckstercard.element.style.visibility = "visible";
	boogiecard.element.style.visibility = "hidden";
	console.log('deckster');
}
function showboogie()
{
	rosecard.element.style.visibility = "hidden";
	angelcard.element.style.visibility = "hidden";
	deckstercard.element.style.visibility = "hidden";
	boogiecard.element.style.visibility = "visible";
	console.log('boogie');
}
