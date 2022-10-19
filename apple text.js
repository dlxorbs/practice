const details = document.querySelectorAll(".detail")

const nightMode = document.querySelector(".nightMode")


document.addEventListener("scroll" , function(){


    // console.log(scrollY)



    if(scrollY > 4221 && scrollY < 5000 ){
    details[0].style.opacity = "1"
    details[0].style.transform = "translateY(-100px)"

    details[1].style.opacity = "0"
    details[1].style.transform = "translateY(0px)"

    details[2].style.opacity = "0"
    details[2].style.transform = "translateY(0px)"

    
    details[3].style.opacity = "0"
    details[3].style.transform = "translateY(0px)"

    }

    else if (scrollY > 5000 && scrollY < 5900 ) {
        details[1].style.opacity = "1"
        details[1].style.transform = "translateY(-100px)"

        
        details[2].style.opacity = "0"
        details[2].style.transform = "translateY(0px)"

        
        details[3].style.opacity = "0"
        details[3].style.transform = "translateY(0px)"

        details[0].style.opacity = "0"
        details[0].style.transform = "translateY(0px)"
    
    }

    else if (scrollY > 5900 && scrollY < 6500 ) {
        details[2].style.opacity = "1"
        details[2].style.transform = "translateY(-100px)"

        details[1].style.opacity = "0"
        details[1].style.transform = "translateY(0px)"
        
        details[3].style.opacity = "0"
        details[3].style.transform = "translateY(0px)"

        details[0].style.opacity = "0"
        details[0].style.transform = "translateY(0px)"
    }

    else if (scrollY > 7421 && scrollY < 8421 ) {
        details[3].style.opacity = "1"
        details[3].style.transform = "translateY(-100px)"

        details[1].style.opacity = "0"
        details[1].style.transform = "translateY(0px)"
    
        details[2].style.opacity = "0"
        details[2].style.transform = "translateY(0px)"

        
        details[0].style.opacity = "0"
        details[0].style.transform = "translateY(0px)"

        
    }

    else{
        
        details[1].style.opacity = "0"
        details[1].style.transform = "translateY(0px)"
    
        details[2].style.opacity = "0"
        details[2].style.transform = "translateY(0px)"

        
        details[0].style.opacity = "0"
        details[0].style.transform = "translateY(0px)"
         
        details[3].style.opacity = "0"
        details[3].style.transform = "translateY(0px)"
    }

    // else{
    //     details[1].style.opacity = "0"
    //     details[2].style.opacity = "0"
    //     details[3].style.opacity = "0"
    //     details[4].style.opacity = "0"
    // }


    

})