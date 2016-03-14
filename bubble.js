
// This simple function returns object reference for elements by ID
function _(x){return document.getElementById(x);}
// Variables for bubble array, bubble index, and the setInterval() variable
var ba, bi=0, intrvl;
// bca - Bubble Content Array. Put your content here.
var bca = [
    '<img src=\"images2/IMG_1165.png\">',
	'<img src=\"images2/IMG_1809.jpeg\">',
	'<img src=\"images2/IMG_6538.JPG\">',
	'<img src=\"images2/IMG_6541.JPG\">',
	'<img src=\"images2/IMG_6544.JPG\">',
	'<img src=\"images2/IMG_9229.jpeg\">',
	'<img src=\"images2/9089.jpeg\">',
	'<img src=\"images2/8002.jpeg\">',
	// '<img src=\"images/ashtonfluff3.jpg\">',
	// '<img src=\"images/ashtonfluff4.jpg\">',
	// '<img src=\"images/ashtonfluff5.jpg\">',
	// '<img src=\"images/ashtonfluff6.jpg\">',
	// '<img src=\"images/fluffy.jpg\">',
	// '<img src=\"images/fluffy2.jpg\">',
	// '<img src=\"images/fluffy3.jpg\">',
	// '<img src=\"images/fluffy4.jpg\">',
	// '<img src=\"images/fluffy5.jpg\">',
	// '<img src=\"images/fluffy6.jpg\">',
	// '<img src=\"images/conor.jpg\">',
	// '<img src=\"images/conor2.jpg\">',
	// '<img src=\"images/ashton.jpg\">'
	 
];
// This function is triggered by the bubbleSlide() function below
function bubbles(bi){
	// Fade-out the content
	_("bubblecontent").style.opacity = 0;
	// Loop over the bubbles and change all of their background color
	for(var i=0; i < ba.length; i++){
		ba[i].style.background = "rgba(0,0,0,.1)";
	}
	// Change the target bubble background to be darker than the rest
	ba[bi].style.background = "#999";
	// Stall the bubble and content changing for just 300ms
	setTimeout(function(){
		// Change the content
		_("bubblecontent").innerHTML = bca[bi];
		
		//_("bubblecontent").document.getElementById("myPhoto") = bca[bi];
		//_("bubblecontent").setAttribute("src", bca[bi]);
		//slideshow code to change image
// 		function changeImage() {
// 	myPhoto.setAttribute("src", bca[bi[i]]);
// 	bi++;
// 	if (bi >= ba.length){
// 		bi = 0;
// 	}
// }
		// Fade-in the content
		_("bubblecontent").style.opacity = 1;
	}, 300);
}
// This function is set to run every 5 seconds(5000ms)
function bubbleSlide(){
	bi++; // Increment the bubble index number
	// If bubble index number is equal to the amount of total bubbles
	if(bi == ba.length){
		bi = 0; // Reset the bubble index to 0 so it loops back at the beginning
	}
	// Make the bubbles() function above run
	bubbles(bi);
}
// Start the application up when document is ready
window.addEventListener("load", function(){
	// Get the bubbles array
	ba = _("bubbles").children;
	// Set the interval timing for the slideshow speed
	intrvl = setInterval(bubbleSlide, 5000);
	window.addEventListener("click", function(){
		clearInterval(intrvl);
	});
});


$(document).ready(function(){
	$('#djrob').animate({height: "0px"}, 3000, function(){
		$('#djrob').animate({height: "0px"}, 1000);
	}

		);

});
// var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
// 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
// 'silver', 'teal', 'white', 'yellow'];
// var titleColor = document.getElementById('title').style.color

// for (var i =0; i<colors.length; i++) {
// 	changeColor =titleColor(colors[i]);
     
// }
// changeColor();




