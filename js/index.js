var Image1="assets/images/1.jpg";
var Image2="assets/images/2.jpg";
var Image3="assets/images/3.jpg";
var index=0;
var Images=[Image1,Image2,Image3]; // Images array
var ImageViewer=document.getElementById('Image-Viewer');// Img Tag selected
const dotsAll = document.querySelectorAll(".dot");
ImageViewer.src=Images[index];//changes Image
activateDot(0);
function activateDot(val){
 dotsAll.forEach((dot, i) => {
    dot.classList.remove("active-dot");
    if (i === index) {
      dot.classList.add("active-dot");
    }
  }); 
}
function nextImage(){
    if(index<=1){
    index++;
    ImageViewer.src=Images[index];
    activateDot(index);
    }
}
function previousImage(){
    if(index>0){
    index=index-1;
    ImageViewer.src=Images[index];
    activateDot(index);
    }
}

// setInterval(nextImage, 5000); 


