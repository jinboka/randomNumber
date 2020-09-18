window.addEventListener("load", () => {
    generate();
  });
  let buttonClicked = document.getElementById("generate");
  buttonClicked.addEventListener("click", () => {
    generate();
  });
  const NUM = 20;
  const generate = () => {
    let arrayContainer = []; // this arrays holds the five random numbers generated;
    let displayContainer = document.getElementById("array");
    const genNum = Math.floor(Math.random() * NUM + 1);
    arrayContainer.push(genNum);
    console.time();
    for (let counter = 0; counter < 5; counter++) {
    //   the counter is less than five because we already initialise arrayContainer[0] with genNum
      let newGen = Math.floor(Math.random() *  NUM + 1);
      while (arrayContainer.lastIndexOf(newGen) !== -1) {
        newGen = Math.floor(Math.random() * NUM + 1);
      }
      arrayContainer.push(newGen);
    }
    console.timeEnd();
    console.log(arrayContainer);
    displayContainer.innerHTML = "[" + arrayContainer + "]";
  };
  