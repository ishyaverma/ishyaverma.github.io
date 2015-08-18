if(document.images){
				//Rodney
               var image1 = new Image(); // Preload an image
               image1.src = "rodneyking.jpg";
               var image2 = new Image(); // Preload second image
               image2.src = "rodneybeating.jpg";
			   
			   //oscar 
			   var image3 = new Image(); // Preload an image
               image3.src = "oscargrant.jpg";
               var image4 = new Image(); // Preload second image
               image4.src = "oscarbeating.jpg";
			   
			   //trayvon
			   var image5 = new Image ();
			   image5.src = "trayvonmartin.jpg";
			   var image6 = new Image ();
			   image6.src = "trayvonbeating.jpg";
			   
			   //eric
			   var image7 = new Image ();
			   image7.src = "ericgarner.jpg";
			   var image8 = new Image ();
			   image8.src = "ericbeating.jpg";
			   
			   //mike
			   var image9 = new Image ();
			   image9.src = "mikebrown.jpg";
			   var image10 = new Image ();
			   image10.src = "mikebeating.jpg";
			   
			   //tamir
			   var image11 = new Image ();
			   image11.src = "tamirrice.jpg";
			   var image12 = new Image ();
			   image12.src = "tamirbeating.jpg";
			   
			   //sandra
			   var image13 = new Image();
			   image13.src = "sandrabland.jpg";
			   var image14 = new Image ();
			   image14.src = "sandrabeating.jpg"
}

/*code for the buttons

$(document).ready(function(){
    $("button").click(function(){
        $("circle").animate({
            left: '450px',
            height: '+=750px',
            width: '+=750px'
        });
    });
});*/
/* Code for making circle larger
$(document).ready(function(){
    $("button").click(function(){
        $("circle").animate({
            height: 'toggle'
        });
    });
});*/

/*Code for moving the circle

$(document).ready(function(){
    $("#button").click(function(){
        $("#circle").animate({left: '1000px'});
    });
});*/

//Code for enlarging the first circle
$(document).ready(function(){
    $("#button1").click(function(){
        $("#circle1").animate({
            left: '450px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});


//Code for taking away first info.
$(document).ready(function(){
    $("#hide").click(function(){
        $("#explanation").hide();
    });
    $("#button1").click(function(){
        $("#explanation").show();
    });
});

/*$(document).ready(function(){
    $("#button1.1").click(function(){
		
		 $("#circle1").animate({
            left: '350px',
            height: '300px',
            width: '300px',
        });
        // var circle = $("#circle1");
		// circle.animate({ right:'300px', height: '300px'}, "slow");
		// circle.animate({width: '300px'}, "slow");
		
    });
});*/

//Code for enlarging the second circle
$(document).ready(function(){
    $("#button2").click(function(){
        $("#circle2").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//Code for enlarging the third circle
$(document).ready(function(){
    $("#button3").click(function(){
        $("#circle3").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//Code for enlarging the fourth circle
$(document).ready(function(){
    $("#button4").click(function(){
        $("#circle4").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//Code for enlarging the fifth circle
$(document).ready(function(){
    $("#button5").click(function(){
        $("#circle5").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//Code for enlarging the 6th circle
$(document).ready(function(){
    $("#button6").click(function(){
        $("#circle6").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//Code for enlarging the 7th circle
$(document).ready(function(){
    $("#button7").click(function(){
        $("#circle7").animate({
            left: '650px',
            height: '+=600px',
            width: '+=600px',
        });
    });
});

//First opening circle
function show_when_clicked(){
	document.getElementById("show1").style.visibility = "visible";
	document.getElementById("caption1").style.visibility = "visible";
}

//Second opening circle
function show_when_clicked2(){
	document.getElementById("show2").style.visibility = "visible";
	document.getElementById("caption2").style.visibility = "visible";
}

//Third opening circle
function show_when_clicked3(){
	document.getElementById("show3").style.visibility = "visible";
	document.getElementById("caption3").style.visibility = "visible";
}

//Fourth opening circle
function show_when_clicked4(){
	document.getElementById("show4").style.visibility = "visible";
	document.getElementById("caption4").style.visibility = "visible";
}

//Fifth opening circle
function show_when_clicked5(){
	document.getElementById("show5").style.visibility = "visible";
	document.getElementById("caption5").style.visibility = "visible";
}

//Sixth opening circle
function show_when_clicked6(){
	document.getElementById("show6").style.visibility = "visible";
	document.getElementById("caption6").style.visibility = "visible";
}

//Seventh opening circle
function show_when_clicked7(){
	document.getElementById("show7").style.visibility = "visible";
	document.getElementById("caption7").style.visibility = "visible";
}