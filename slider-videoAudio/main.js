var myMovie;
var playButton;
var bar;
var progressBar;
var updateBar;
var barSize=550;
var n;

function play(num){
	doFirst(num);
}


function doFirst(num){
	n=parseInt(num);
	myMovie = document.getElementById('myMovie'+n);
	playButton = document.getElementById('playButton'+n);
	bar = document.getElementById('defaultBar'+n);
	progressBar = document.getElementById('progressBar'+n);

	playOrPause();
	bar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
	if((!myMovie.paused && !myMovie.ended){

		myMovie.pause();
		playButton.innerHTML='Play';
		window.clearInterval(update);
	}else{
		myMovie.play();
		updateBar=setInterval(update,50);
		playButton.innerHTML='Pause';
	}
}
function update(){
	if(!myMovie.ended){
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration); 
		progressBar.style.width=size+'px';	
	}else{
		progressBar.style.width='0px';
		playButton.innerHtml='Play';
		window.clearInterval(update);
	}

}
function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended)
	{
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime= mouseX*myMovie.duration/barSize;
		myMovie.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	
	}

}
	