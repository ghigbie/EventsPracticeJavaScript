//this document was created in the command line
alert('JS file connected');
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", clickListener(lis[i]));
}

function clickListener(item){
	item.classList.add("click");
}

function doubleClick(item){
	item.classList.add("dooubleCliced");
}

function hoverOn(item){
	item.classList.add("hover");
}

function clickedOn(item){
	item.classList.add("clicked");
}

