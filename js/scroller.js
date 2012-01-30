var w = 870;
var pages = 5;

var colors=["#999","#ccc"];
	
function creaPag(){
	document.getElementById("scroller").style.width = (pages*100)+"%";
	for(var i=1; i<=pages;i++){
		var color = colors[i%2];
		document.getElementById("scroller").innerHTML += "<div class='page' id='pag_"+ i +"' style='left:"+(i-1)*w+"px; background-color:"+color+"'></div>"
			
		console.log(document.getElementById("scroller").innerHTML);
	}

	scr = new iScroll("wrapper", {hScrollbar: false, vScrollbar: false, snap:true, momentum:false});
		
	document.getElementById("prev").addEventListener("click", goPrev, false);
	document.getElementById("next").addEventListener("click", goNext, false);
}
	
	
// Per il clic per tornare alla slide precedente
function goPrev(){
	console.log("prev");
	scr.scrollToPage("prev",0,300);
}

// Per il clic per andare alla slide successiva
function goNext(){
	console.log("next");
	scr.scrollToPage("next",0,300);
}