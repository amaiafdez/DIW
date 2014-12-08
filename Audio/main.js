document.addEventListener("DOMContentLoaded", function(){
	doFirst();
}, false);
var myMusic;
var playButton;
var bar;
var progressBar;
var updateBar;
var barSize=550;

function doFirst(){
	myMusic = document.getElementById('myMusic');
	playButton = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');

	playButton.addEventListener('click', playOrPause, false);
	bar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
	if(!myMusic.paused && !myMusic.ended)
	{
		myMusic.pause();
		document.getElementById('playButton').src="play.png";
		window.clearInterval(update);
	}else{
		myMusic.play();
		updateBar=setInterval(update,50);
		document.getElementById('playButton').src="pause.png";
	}
}
function update(){
	if(!myMusic.ended){
		var size=parseInt(myMusic.currentTime*barSize/myMusic.duration); 
		progressBar.style.width=size+'px';	
	}else{
		progressBar.style.width='0px';
		playButton.innerHtml='Play';
		window.clearInterval(update);
	}

}
function clickedBar(e){
	if(!myMusic.paused && !myMusic.ended)
	{
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime= mouseX*myMusic.duration/barSize;
		myMusic.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	
	}

}
	