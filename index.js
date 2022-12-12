


 const slides = document.querySelectorAll(".slide");
 console.log(slides);
 var counter=0;

for (let i = 0; i < slides.length; i++) {
 slides[i].style.left = (i*100)+"%";  
}

setInterval("goNext()",4000)


const goNext = ()=>{
  counter++;
  if(counter>=slides.length){
    counter=0

  }
  slideImage();
}

const goPrev = () =>{
  counter--;
  if(counter<1){
    counter=slides.length;
  }
  slideImage();
}

const slideImage=()=> {

  slides.forEach(
    (slide)=> {
      slide.style.transform = "translateX(-"+(counter * 100)+"%)";  


    }
    
  )


}




