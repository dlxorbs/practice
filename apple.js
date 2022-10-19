



const iphoneWrap = document.querySelector("div.iph_main");
const iphones = iphoneWrap.querySelectorAll("img");

iphoneWrap.addEventListener("mouseover", function (){

    for(let i = 0; i < 5; i++){
        if(i % 2 == 0){
            
            let even = i*100;

            iphones[i].style.transform = `translate(${even}px,0px)`
       
        }

        else{
            let odd = -(i+1)*100;

            iphones[i].style.transform = `translate(${odd}px,0px)`
        }

    }

})

iphoneWrap.addEventListener("mouseout", function(){

   
    for(let i = 0; i < 5; i++){
        if(i % 2 == 0){

            iphones[i].style.transform = `translate(0px,0px)`
       
        }

        else{
        

            iphones[i].style.transform = "translate(0px,0px)"
        }

    }
  })
  



//   /클릭이벤트

const searchTag = document.querySelector("ul a.search")
const searchbarTag = document.querySelector(".head")
const closeTag = document.querySelector(".close")
const link = document.querySelector("div.content")
const anc = document.querySelector("div.link2")
const move = anc.querySelectorAll("a")
const gray = document.querySelector(".gray")


searchTag.addEventListener("click", function(){
   
    searchbarTag.classList.toggle("open")
    link.classList.toggle("open")
    gray.classList.toggle("open")
    // anc.classList.toggle("open")


    for(let i = 0; i < 5; i++){
        move[i].style.transform = "translate(0px,0px)"
        // move[i].style.opacity = "1"
        let s = 0.2*i
        move[i].style.transition = `${s}s`
    }
})

closeTag.addEventListener("click", function(){
   
    searchbarTag.classList.toggle("open")
    link.classList.toggle("open")
   gray.classList.toggle("open")


    for(let i = 0; i < 5; i++){
        move[i].style.transform = "translate(400px,0px)"
        // move[i].style.opacity = "0"
        let s = 0.9/(i+1)
        move[i].style.transition = `${s}s`
    }
})




