const buttonSlider = document.querySelectorAll(".btnSlider")
const classButtonL =buttonSlider[0].classList
const classButtonR =buttonSlider[1].classList
let imageSlider1= document.getElementById("BdI1")
let imageSlider2= document.getElementById("BdI2")
let imageSlider3= document.getElementById("BdI3")
let srcA=["../ressources/banqueimage/1.jpg","../ressources/banqueimage/2.jpg","../ressources/banqueimage/3.jpg","../ressources/banqueimage/4.jpg","../ressources/banqueimage/5.jpg"]
let counterClick=0;
let flecheR=document.querySelector('.flecheR')
let flecheL=document.querySelector('.flecheL')
buttonSlider[0].addEventListener("click",buttonSliderLClick)
buttonSlider[1].addEventListener("click",buttonSliderRClick)


function buttonSliderRClick(){
  if (counterClick < 2){
    counterClick++
    imageSlider1.src=srcA[counterClick]
    imageSlider2.src=srcA[counterClick+1]
    imageSlider3.src=srcA[counterClick+2]
    flecheL.classList.remove('buttonSliderCache')
  }
  if(counterClick==2){
    flecheR.classList.add('buttonSliderCache')
    
  }
}

function buttonSliderLClick(){
  if (counterClick > 0){
    counterClick--
    imageSlider1.src=srcA[counterClick]
    imageSlider2.src=srcA[counterClick+1]
    imageSlider3.src=srcA[counterClick+2]
    flecheR.classList.remove('buttonSliderCache')
  }
  if(counterClick == 0){
    flecheL.classList.add('buttonSliderCache')
  }

}