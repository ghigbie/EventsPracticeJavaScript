//this document was created in the command line
alert('JS file connected');
var lis = document.querySelectorAll("li");
var firstLI = document.querySelector("li");
var secondLI = document.querySelectorAll("li")[1];
var thirdLI = document.querySelecctorAll("li")[2];

firstLI.addEventListener("mouseover", function(){
	console.log("MOUSED OVER");
	firstLI.classList.toggle("hover");
});


// for(var i = 0; i < lis.length; i++){
// 	lis[i].addEventListener("click", clickListener(lis[i]));
// }

// function clickListener(item){
// 	item.classList.add("click");
// }

// function doubleClick(item){
// 	item.classList.add("dooubleCliced");
// }

// function hoverOn(item){
// 	item.classList.add("hover");
// }

// function clickedOn(item){
// 	item.classList.add("clicked");
//}

