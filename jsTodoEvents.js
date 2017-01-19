
var allLis = document.querySelectorAll("li");
var firstLI = document.querySelector("li");
var secondLI = document.querySelectorAll("li")[1];
var thirdLI = document.querySelectorAll("li")[2];

firstLI.addEventListener("mouseover", function(){ //this function will keep the change
	console.log("MOUSED OVER");
	firstLI.classList.add("hover"); 
});

firstLI.addEventListener("mouseout", function(){
	console.log("MOUSE OUT");
	firstLI.classList.remove("hover");
})

for(var i = 0; i < allLis.length; i++){
	allLis[i].addEventListener("mouseover", function(){
		console.log("MOUSED OVER");
		this.classList.add("hover");
	});
	allLis[i].addEventListener("mouseout", function(){
		console.log("MOUSE OUT");
		this.classList.remove("hover");
	});
	allLis[i].addEventListener("click", function(){
		console.log("click");
		this.classList.toggle("clicked");
	});
}



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

