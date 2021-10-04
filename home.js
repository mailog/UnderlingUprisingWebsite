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
	rosecard.style.visibility = "visible";
	angelcard.style.visibility = "hidden";
	deckstercard.style.visibility = "hidden";
	boogiecard.style.visibility = "hidden";
	console.log('rose');
}
function showangel()
{
	rosecard.style.visibility = "hidden";
	angelcard.style.visibility = "visible";
	deckstercard.style.visibility = "hidden";
	boogiecard.style.visibility = "hidden";
	console.log('angel');
}
function showdeckster()
{
	rosecard.style.visibility = "hidden";
	angelcard.style.visibility = "hidden";
	deckstercard.style.visibility = "visible";
	boogiecard.style.visibility = "hidden";
	console.log('deckster');
}
function showboogie()
{
	rosecard.style.visibility = "hidden";
	angelcard.style.visibility = "hidden";
	deckstercard.style.visibility = "hidden";
	boogiecard.style.visibility = "visible";
	console.log('boogie');
}
