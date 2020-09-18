const form =document.querySelector(".form"),
     number_range = form.querySelector(".number_range"),
      rangeInput = number_range.querySelector(".rangeInput"),
      rangeInputEnd = form.querySelector(".rangeInputEnd"),
      form3 = form.querySelector(".form3"),
      numberInput = form3.querySelector(".numberInput"),
      createButtonInput = document.querySelector(".createButtonInput"),
      restButtonInput = document.querySelector(".restButtonInput"),
      numberList = document.querySelector(".number_list");
      const h2 = document.querySelector("h2"),
      SUBMIT = document.querySelector(".submit");
// const START_NB = rangeInput.value,
//       END_NB = endNumber = rangeInputEnd.value,
//       HOWMANY_NB = howMany = numberInput.value;
 const excuteRamdomNumbers = [];

function paintRandom(number){
  const li = document.createElement("li");
  const del = document.createElement("button");
  del.innerText = "🗑️";
  del.className= "del";
  const span = document.createElement("span");
  const newId = excuteRamdomNumbers.length + 1
  li.id = newId;
  const numbersObj = {
    id : newId,
    text: number
  }
  
  span.innerText = number;
  span.className ="excute";
  li.appendChild(del);
  li.appendChild(span);
  numberList.appendChild(li);
  excuteRamdomNumbers.push(numbersObj);
}


function generate(event){
  event.preventDefault();
  const RANDOM_NB =[];
  const endNumber = rangeInputEnd.value,
        startNumber = rangeInput.value;
  const  howMany = numberInput.value;
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
  }

  init();