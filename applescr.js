
const ios = document.querySelector("body")

const logo = document.querySelector(".logo15")

const iphs = document.querySelectorAll(".ipcontainer")
const iph1 = document.querySelector(".location1")
const iph2 = document.querySelector(".location2")
const iph3 = document.querySelector(".location3")
const iph4 = document.querySelector(".location4")
const iph5 = document.querySelector(".location5")
const iph6 = document.querySelector(".location6")
const iph7 = document.querySelector(".location7")
const iph8 = document.querySelector(".location8")



document.addEventListener("scroll", function(){
  const midViewport = window.innerHeight/2;
  const iosTop = ios.getBoundingClientRect().top;
  const iosMid = iosTop + 1000 + ios.getBoundingClientRect().height/2;

//  let distance = midViewport - iosMid;

//  console.log(window.scrollX, window.scrollY);

// iphs.forEach(iphcontainer{

// })

for(let i = 0; i < 8; i++){

  if(window.scrollY >550){
  iphs[i].style.opacity = "1"
  }

  else if(window.scrollY < 550){
    iphs[i].style.opacity = "0"
  }
  
}


if(window.scrollY < 550){


  logo.style.transform = `scale(1.5)`
  iph1.style.transform = `translateY(-600px)`;
  iph2.style.transform = `translateY(-500px)`;
  iph3.style.transform = `translateX(600px)`;
  iph4.style.transform = `translateX(1000px)`;
  iph5.style.transform = `translateX(-500px)`;
  iph6.style.transform = `translateY(800px)`;
  iph7.style.transform = `translateY(400px)`;
  iph8.style.transform = `translateY(700px)`;
  
}

else{

logo.style.transform = `scale(1)`
iph1.style.transform = `translateY(0px)`;
iph2.style.transform = `translateY(0px)`;
iph3.style.transform = `translateX(0px)`;
iph4.style.transform = `translateX(0px)`;
iph5.style.transform = `translateX(0px)`;
iph6.style.transform = `translateY(0px)`;
iph7.style.transform = `translateY(0px)`;
iph8.style.transform = `translateY(0px)`;


} 

})




