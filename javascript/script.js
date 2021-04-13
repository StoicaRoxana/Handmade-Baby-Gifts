
const img1Element = document.getElementById("img1");
const title1Element = document.querySelector(".title1");
const img2Element = document.getElementById("img2");
const title2Element = document.querySelector('.title2');
const img3Element = document.getElementById("img3");
const title3Element = document.querySelector(".title3");


img1Element.addEventListener('mouseover', function(){
  title1Element.classList.remove("hidden");
  img1Element.style.opacity="0.8";
});

img1Element.addEventListener('mouseout', function(){
  title1Element.classList.add("hidden");
  img1Element.style.opacity="1";
})


img2Element.addEventListener("mouseover",function(){
  title2Element.classList.remove("hidden");
  img2Element.style.opacity="0.8";
})

img2Element.addEventListener("mouseout",function(){
  title2Element.classList.add("hidden");
  img2Element.style.opacity="1";
})


img3Element.addEventListener("mouseover", function(){
  title3Element.classList.remove("hidden");
  img3Element.style.opacity="0.8";
})

img3Element.addEventListener("mouseout", function(){
  title3Element.classList.add("hidden");
  img3Element.style.opacity="1";
})

/* IMAGES 3 - SLIDE IMAGE*/

const btnPrevious = document.querySelector('.previous');

btnPrevious.addEventListener("click", function(){
  document.getElementById("img4").src = "images/copil2.jpg";
})
