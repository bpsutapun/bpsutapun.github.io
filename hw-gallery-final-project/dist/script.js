/*Name this external file gallery.js*/
var org =  document.getElementById("image");
var org_txt = org.innerHTML;

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/
    var lnk = previewPic.src;
    console.log("Event triggered");
    org.style.backgroundImage = `url("${lnk}")`;
    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    org.innerHTML = previewPic.alt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was*/
    org.style.backgroundImage = "url('')"
    console.log("Event triggered");
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		org.innerHTML = org_txt;
	}

  function assign_img(){
    var pics = document.querySelectorAll("#choice img")
    console.log("Event triggered");
    for(var i = 0; i < pics.length; i++){
      console.log("Image" + i);
      pics[i].setAttribute("tabindex", "0")
    }
  }