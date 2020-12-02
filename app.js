
// Selectors
const topBox = document.querySelector('.bot-box__top');
const generateBtn = document.querySelector('.gen-btn');





// Events
generateBtn.addEventListener('click',()=>{
    let newRow = document.createElement('div')
    newRow.setAttribute('class','row')
    // Create
    let num = document.createElement('div')

    let generatedNumbers = winningNumbers()
    generatedNumbers.forEach(element => {
        let num = document.createElement('div')
        num.setAttribute('class','ball')
        num.innerText = element
        newRow.appendChild(num)
    });

    topBox.appendChild(newRow)
})




// Functions
function drawALottoBall() {
    let lottoNum = Math.floor(Math.random() * 49)+1;
    return lottoNum;
}

function winningNumbers() {
    // create the temp array
    let winningNumbersArray = [];
    while (winningNumbersArray.length < 6) {
        let num = drawALottoBall();
        if (winningNumbersArray.includes(num) === false) {
            // add to winning numbers
            winningNumbersArray.push(num);
        }
    }
    return winningNumbersArray.sort((a,b)=>a-b);
}

for (let i = 0; i < 5; i++) {
    console.log(winningNumbers())
}
// console.log(winningNumbers())


