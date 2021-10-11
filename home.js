var rosecard, angelcard, deckstercard, boogiecard;
var roseselect, angelselect, decksterselect, boogieselect;
var rosearrow, angelarrow, decksterarrow, boogiearrow;

var selectedOpacity = 1;
var unselectedOpacity = 1;

var beginBG1Fade = 0.05, endBG1Fade = 0.125;
var stopParallaxPerc1 = 0.1;
var stopParallaxPerc2 = 0.15;


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
	
	var docHeight = document.body.scrollHeight;

	//Init Background Data
	var backgrounds1 = document.querySelectorAll(".background1");
	var backgrounds2 = document.querySelectorAll(".background2");


	function updateScroll()
	{	
		var currScroll = window.scrollY;
		if(currScroll < docHeight * stopParallaxPerc1)
		{
			for(var i = 0; i < backgrounds1.length; i++)
			{
				updateBG1(currScroll, backgrounds1[i]);
			}
		}
		if(currScroll < docHeight * stopParallaxPerc2)
		{
			for(var i = 0; i < backgrounds2.length; i++)
			{
				updateBG2(currScroll, backgrounds2[i]);
			}
		}
	}
	
	function updateBG1(currScroll, background)
	{
		var currOffset = currScroll * background.dataset.scrollspeed;
		background.style.transform = "translate3d(0, " + currOffset + "px, 0)";
		currProgress = currOffset/docHeight;
	}
	
	function updateBG2(currScroll, background)
	{
		var currOffset = currScroll * background.dataset.scrollspeed;
		background.style.transform = "translate3d(0, " + currOffset + "px, 0)";
		currProgress = currOffset/docHeight;
		CheckBG1Fade(background, currProgress);
	}
	
	
	function CheckBG1Fade(background, currProgress)
	{
		background.style.opacity = lerp(1, 0, (currProgress-beginBG1Fade)/(endBG1Fade-beginBG1Fade));
	}
  
	document.addEventListener("scroll", updateScroll, false);
	window.addEventListener("resize", updateScroll);
	updateScroll();
}

function lerp(x, y, a)
{
	return x * (1 - a) + y * a;
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
