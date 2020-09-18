const form =document.querySelector(".form"),
     number_range = form.querySelector(".number_range"),
      rangeInput = number_range.querySelector(".rangeInput"),
      rangeInputEnd = number_range.querySelector(".rangeInputEnd"),
      numberInput = number_range.querySelector(".numberInput"),
      SUBMIT = number_range.querySelector(".submit"),
      restButtonInput = document.querySelector(".restButtonInput"),
      numberList = document.querySelector(".number_list"),
      RESET_BT = form.querySelector(".resetButtonInput");
const RESET_SHOW = "show";
// const START_NB = rangeInput.value,
//       END_NB = endNumber = rangeInputEnd.value,
//       HOWMANY_NB = howMany = numberInput.value;
 
const excuteRamdomNumbers = [];

function handleDelete(event){
const del = event.target;
const li = del.parentNode;
numberList.removeChild(li);
}

function paintRandom(number){
  const li = document.createElement("li");
  const del = document.createElement("button");
  del.addEventListener("click",handleDelete);
  del.innerText = "🗑️";
  del.className= "del";
  const span = document.createElement("span");
  const newId = excuteRamdomNumbers.length + 1
  li.id = newId;
  const numbersObj = {
    id : newId,
    text: number
  }
  li.className="li";
  span.innerText = number;
  span.className ="excute";
  li.appendChild(del);
  li.appendChild(span);
  numberList.appendChild(li);
  excuteRamdomNumbers.push(numbersObj);
  RESET_BT.classList.add(RESET_SHOW);
}


function generate(event){
   
   
  event.preventDefault();
  const RANDOM_NB =[];
  const endNumber = rangeInputEnd.value,
        startNumber = rangeInput.value;
  const  howMany = numberInput.value;
 if( rangeInput.value == "" || rangeInputEnd.value == "" || numberInput.value == ""){
        alert("원하는 숫자를 넣어주세요.");
        rangeInput.focus();
        // return false;
    
    }
    else{
for( var counter = 0; counter < howMany; counter++){
  let ramdomNumber = Math.floor(Math.random()*endNumber+1);
  
while(RANDOM_NB.lastIndexOf(ramdomNumber) !== -1){
   ramdomNumber = Math.floor(Math.random()*endNumber+1);
  
}
while(ramdomNumber < startNumber){
  ramdomNumber = Math.floor(Math.random()*endNumber+1);

}
RANDOM_NB.push(ramdomNumber);
}
paintRandom(RANDOM_NB);

console.log(RANDOM_NB);

console.dir(numberInput.value);
}

}




function handleClick(event){
    document.location.reload();
}

// function handleSubmit(event){
//    event.preventDefault();
//    const endNumber = rangeInputEnd.value,
//          startNumber = rangeInput.value;
//    const  howMany = numberInput.value;
//     console.log(startNumber, endNumber,howMany);
    
  
// }
function init(){
// form.addEventListener("submit", handleSubmit);
form.addEventListener("submit",generate); 
SUBMIT.addEventListener("submit",generate);
RESET_BT.addEventListener("click", handleClick);
 
}

  init();