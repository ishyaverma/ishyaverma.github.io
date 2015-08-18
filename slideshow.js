
 
 
 
 
 
 
 
 var slideimages = new Array();
slideimages[0] = new Image();
slideimages[0].src = "drought_1.jpg";
slideimages[1] = new Image();
slideimages[1].src = "drought_2.jpg";
slideimages[2] = new Image();
slideimages[2].src = "drought_3.jpg";
 
 

var step=0;


function slideit(){
	if (!document.images) {
		return;
	}
	document.getElementById('slide').src = slideimages[step].src;
	console.log("here");
	if (step<2) {
		step++;
	}
	else {
		step=0;
	}
 
}
//call function "slideit()" every 2.5 seconds
 setInterval(function() {slideit();}, 2000);





//map slideshow

 var changeimage = new Array();
changeimage[0] = new Image();
changeimage[0].src = "slide_1.png";
changeimage[1] = new Image();
changeimage[1].src = "slide_2.png";
changeimage[2] = new Image();
changeimage[2].src = "slide_3.png";
changeimage[3] = new Image();
changeimage[3].src = "slide_4.png";
 

var step=0;


function changeslide(){
	if (!document.images) {
		return;
	}
	document.getElementById('map').src = changeimage[step].src;
	console.log("here");
	if (step<3) {
		step++;
	}
	else {
		step=0;
	}
 
}

//call function "changeslide()" every 2.5 seconds
 setInterval(function() {changeslide();}, 2000);

 //map slideshow
			

