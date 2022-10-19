const handCon = document.querySelector(".handimgcon")
const Title = document.querySelector("titlewrapper")
const Zoom = document.querySelector(".Zoom")
const Textcon = document.querySelector(".titlewrapper")
const secondText = document.querySelector(".secontext")

var rotate = 0;
let scale = 1;



// matrix(scaleX,tanX,tanY,scaleY,translateX,translateY)이다.
// 함수에 휠 값 하나당의 값을 지정 후 그값을 지정하여 덧셈 뺄셈

let m = 0;
let m2 = 0;
Zoom.addEventListener("wheel", function(e){


 if(scrollY > 8500){
     Zoom.style.position = "sticky"
     Zoom.style.top = "0px"
 }


//   내릴때

console.log(m);
let x = -30*m;
let scale = 2+1*m/15;
m += -0.01*e.deltaY ;

m += 0.01*e.deltaY;



    if(e.wheelDelta < 0){ 
        if(m > -5){

            handCon.style.transform = `matrix(2,0,0,2,0,${1800+80*m})`
            Textcon.style.opacity = `${1+m*0.3}`

        }

        else if(m == -5 || m > -17 ){



            console.log(m+1800);
            handCon.style.transform = `matrix(${scale},0,0,${scale},${x},${1800+80*m})`
        }


        else if ( m < -17 && m > -23){

            let op = 17+m
            console.log(op)
            secondText.style.opacity = `${-0.2*op}`
            secondText.style.transform = `translateY(${3*op}px)`
        }

        else if(m < -23){
            m = -24
        }


    }
    
        // 올릴때 m값이 양수


       else{
            if(m == -24 || m < -16){
                
            let op = 17+m
            console.log(op)
            secondText.style.opacity = `${-0.2*op}`
            secondText.style.transform = `translateY(${3*op}px)`

            }

            else if( m > -16 && m < -5 ){
                console.log(m+1800);
                handCon.style.transform = `matrix(${scale},0,0,${scale},${x},${1800+80*m})`
            }

            else if (m > -5 && m < 5){
                handCon.style.transform = `matrix(2,0,0,2,0,${1800+80*m})`
                Textcon.style.opacity = `${1+m*0.3}`
            }

            else if(m > 4){
                m = 4
            }
        }


})







// 텍스트 사라지기

// Zoom.addEventListener("wheel", function(e){



//     if(e.wheelDelta < 0){   

  
//         // op += e.deltaY *-0.001;

//         if( op > 0.9){
     
//         Textcon.style.opacity = "0"
//         }

      
//     else{
//             op = op +0.002*e.deltaY;
            

//             Textcon.style.opacity = `${1-op}`
            
//         }

//     }



//     else{


  

//             if(op<0.1){

//                 Textcon.style.opacity = "1"
            
//             }else{
                
//             op = op +0.002*e.deltaY;

//             Textcon.style.opacity = `${1-op}`
//             }
     
//     }





// })

//이후 나오는 텍스트

// Zoom.addEventListener("wheel", function(e){


// if( op == 1 ){
//     if(e.wheelDelta < 0){   
//         op = op +0.002*e.deltaY;
//        secondText.style.opacity = `${1-op}`

//     }


// }

// else{

//     if(e.wheelDelta > 0){   

//         secondText.style.opacity = "0"
 
//      }
// }



// })