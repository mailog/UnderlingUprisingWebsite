var rosecard;
var angelcard;
var deckstercard;
var boogiecard;
var roseselect;
var angelselect;
var decksterselect;
var boogieselect;

var selectedOpacity = 1;
var unselectedOpacity = 0.5;

window.onload = function()
{
	rosecard = document.getElementById('rosecard');
	angelcard = document.getElementById('angelcard');
	deckstercard = document.getElementById('deckstercard');
	boogiecard = document.getElementById('boogiecard');
	
	roseselect = document.getElementById('roseselect');
	angelselect = document.getElementById('angelselect');
	decksterselect = document.getElementById('decksterselect');
	boogieselect = document.getElementById('boogieselect');
	
	showrose();
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
	rosecard.style.display = "block";
	angelcard.style.display = "none";
	deckstercard.style.display = "none";
	boogiecard.style.display = "none";
	
	roseselect.style.opacity = selectedOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogiecard.style.opacity = unselectedOpacity;
}
function showangel()
{
	rosecard.style.display = "none";
	angelcard.style.display = "block";
	deckstercard.style.display = "none";
	boogiecard.style.display = "none";
	
	roseselect.style.opacity = unselectedOpacity;
	angelselect.style.opacity = selectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogiecard.style.opacity = unselectedOpacity;
}
function showdeckster()
{
	rosecard.style.display = "none";
	angelcard.style.display = "none";
	deckstercard.style.display = "block";
	boogiecard.style.display = "none";
	
	roseselect.style.opacity = unselectedOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = selectedOpacity;
	boogiecard.style.opacity = unselectedOpacity;
}

function showboogie()
{
	rosecard.style.display = "none";
	angelcard.style.display = "none";
	deckstercard.style.display = "none";
	boogiecard.style.display = "block";
	
	roseselect.style.opacity = unselectOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogiecard.style.opacity = selectedOpacity;
}
