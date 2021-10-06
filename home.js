var rosecard, angelcard, deckstercard, boogiecard;
var roseselect, angelselect, decksterselect, boogieselect;
var rosearrow, angelarrow, decksterarrow, boogiearrow;

var selectedOpacity = 1;
var unselectedOpacity = 1;

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
	
	rosearrow = document.getElementById('rosearrow');
	angelarrow = document.getElementById('angelarrow');
	decksterarrow = document.getElementById('decksterarrow');
	boogiearrow = document.getElementById('boogiearrow');
	
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
			updateBG1(currScroll, backgrounds1[i]);
		}
	}
	
	function updateBG1(currScroll, background)
	{
		var currOffset = currScroll * background.dataset.scrollspeed;
		if (currOffset < docHeight / 4)
		{
			background.style.transform = "translate3d(0, " + currOffset + "px, 0)";
        	}
	}
  
	document.addEventListener("scroll", updateScroll, false);
	window.addEventListener("resize", updateScroll);
	updateScroll();
}

function showrose()
{
	rosecard.style.display = "block";
	angelcard.style.display = "none";
	deckstercard.style.display = "none";
	boogiecard.style.display = "none";
	
	roseselect.src = "images/labrose.gif";
	angelselect.src = "images/labangel.png";
	decksterselect.src = "images/labdeckster.png";
	boogieselect.src = "images/labboogie.png";
	
	roseselect.style.opacity = selectedOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogieselect.style.opacity = unselectedOpacity;
	
	rosearrow.style.display = "block";
	angelarrow.style.display = "none";
	decksterarrow.style.display = "none";
	boogiearrow.style.display = "none";
}
function showangel()
{
	rosecard.style.display = "none";
	angelcard.style.display = "block";
	deckstercard.style.display = "none";
	boogiecard.style.display = "none";
	
	roseselect.src = "images/labrose.png";
	angelselect.src = "images/labangel.gif";
	decksterselect.src = "images/labdeckster.png";
	boogieselect.src = "images/labboogie.png";
	
	roseselect.style.opacity = unselectedOpacity;
	angelselect.style.opacity = selectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogieselect.style.opacity = unselectedOpacity;
	
	rosearrow.style.display = "none";
	angelarrow.style.display = "block";
	decksterarrow.style.display = "none";
	boogiearrow.style.display = "none";
}
function showdeckster()
{
	rosecard.style.display = "none";
	angelcard.style.display = "none";
	deckstercard.style.display = "block";
	boogiecard.style.display = "none";
	
	roseselect.src = "images/labrose.png";
	angelselect.src = "images/labangel.png";
	decksterselect.src = "images/labdeckster.gif";
	boogieselect.src = "images/labboogie.png";
	
	roseselect.style.opacity = unselectedOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = selectedOpacity;
	boogieselect.style.opacity = unselectedOpacity;
	
	rosearrow.style.display = "none";
	angelarrow.style.display = "none";
	decksterarrow.style.display = "block";
	boogiearrow.style.display = "none";
}

function showboogie()
{
	rosecard.style.display = "none";
	angelcard.style.display = "none";
	deckstercard.style.display = "none";
	boogiecard.style.display = "block";
	
	roseselect.src = "images/labrose.png";
	angelselect.src = "images/labangel.png";
	decksterselect.src = "images/labdeckster.png";
	boogieselect.src = "images/labboogie.gif";
	
	roseselect.style.opacity = unselectedOpacity;
	angelselect.style.opacity = unselectedOpacity;
	decksterselect.style.opacity = unselectedOpacity;
	boogieselect.style.opacity = selectedOpacity;
	
	rosearrow.style.display = "none";
	angelarrow.style.display = "none";
	decksterarrow.style.display = "none";
	boogiearrow.style.display = "block";
}
