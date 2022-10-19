const info = document.querySelector(".info")

const lefts = document.querySelectorAll(".left")
const right = document.querySelector(".right")

const l1 = document.querySelector(".l1")
const l2 = document.querySelector(".l2")
const l3 = document.querySelector(".l3")

const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")

const headlines = document.querySelectorAll(".headline")


const uls = document.querySelectorAll(".pin ul")



document.addEventListener("scroll", function(){

 
    if(scrollY > 8600){
        lefts[1].style.transform = "translateX(100px)"
        lefts[0].style.transform = "translateX(100px)"
        right.style.transform = "translateX(-100px)"
    }

    else{
        lefts[1].style.transform = "translateX(0px)"
        lefts[0].style.transform = "translateX(0px)"
        right.style.transform = "translateX(0px)"
    }

    const viewportMid = window.innerHeight/2;

    const p1Top = p1.getBoundingClientRect().top;
    const p3bottom = p3.getBoundingClientRect().bottom;
    const distance = viewportMid - p1Top
   



    if (distance > -600 && distance < 0){

        l1.style.width = `${655+3*distance}px`
        l1.style.opacity = "1"
        headlines[0].style.opacity = "1"
        uls[0].style.opacity = "1"
        
    }

    else  if(distance > 0 && distance < 200){
        l2.style.width = `${-280+5*distance}px`
        l2.style.opacity = "1"
        headlines[1].style.opacity = "1"
        uls[1].style.opacity = "1"


    }else if(distance > 200 && distance < 500){
        l3.style.width = `${-320+2*distance}px`
        l3.style.opacity = "1"
        headlines[2].style.opacity = "1"
        uls[2].style.opacity = "1"

    }

    const distance2 = viewportMid - p3bottom
    console.log(distance2)
    if (distance2 > 0 ){
        l3.style.opacity ="0"
        headlines[2].style.opacity = "0"
        uls[2].style.opacity = "0"

        l2.style.opacity ="0"
        headlines[1].style.opacity = "0"
        uls[1].style.opacity = "0"

        l1.style.opacity ="0"
        headlines[0].style.opacity = "0"
        uls[0].style.opacity = "0"
    }
})

