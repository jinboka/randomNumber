const NB_CRATE_BT = document.querySelector(".start");
const NUMBER = 44;
const NB_RESET_BT = document.querySelector(".reset");
const CREATE_NB = document.querySelector(".box1"),
     CREATE_NB1 = document.querySelector(".box2"),
     CREATE_NB2 = document.querySelector(".box3"),
     CREATE_NB3 = document.querySelector(".box4"),
     CREATE_NB4 = document.querySelector(".box5"),
     CREATE_NB5 = document.querySelector(".box6"),
     NB_STOP_BT=document.querySelector(".stop");
var STOP_NB = null;
    //  const genNum = Math.floor(Math.random() * NUMBER + 1);
 


  function generate(){
    let arrayContainer = []; // this arrays holds the five random numbers generated;
  
    // const genNum = Math.floor(Math.random() * NUMBER + 1);
    // arrayContainer.push(genNum);
    // console.time();
    for (let counter = 0; counter < 6; counter++) {
                                                                                  //   the counter is less than five because we already initialise arrayContainer[0] with genNum
      let newGen = Math.floor(Math.random() *  NUMBER + 1);
      while (arrayContainer.lastIndexOf(newGen) !== -1) {
        newGen = Math.floor(Math.random() * NUMBER + 1);
      }
      arrayContainer.push(newGen);
    }
    // console.timeEnd();
    // console.log(arrayContainer);
    CREATE_NB.innerText= arrayContainer[0];
    CREATE_NB1.innerHTML= arrayContainer[1];
    CREATE_NB2.innerHTML= arrayContainer[2];
    CREATE_NB3.innerHTML= arrayContainer[3];
    CREATE_NB4.innerHTML= arrayContainer[4];
    CREATE_NB5.innerHTML= arrayContainer[5];
    NB_CRATE_BT.disabled= true;
}

function interval(event){
  STOP_NB =  setInterval(generate,100);}
function handleReset(event){
    
    document.location.reload();
}

function handleStop(event){
   if(STOP_NB !== null){clearInterval(STOP_NB); 
} 
NB_CRATE_BT.disabled= false;

}

function init(){
    NB_CRATE_BT.addEventListener("click", generate);
    NB_CRATE_BT.addEventListener("click", interval);
    NB_RESET_BT.addEventListener("click",handleReset);
    NB_STOP_BT.addEventListener("click", handleStop);
  }

  init();