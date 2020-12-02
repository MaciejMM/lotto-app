// Selectors
const topBox = document.querySelector('.bot-box__top');
const generateBtn = document.querySelector('.gen-btn');
const expandBtn = document.querySelector('.expand');
const options = document.querySelector('.options');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const generateCounter = document.querySelector('.gen-counter');

// Events
generateBtn.addEventListener('click',()=>{
    topBox.innerHTML="";

    console.log(generateCounter.value);

    for (let i = 0; i < generateCounter.value; i++) {
        let newRow = document.createElement('div')
        newRow.setAttribute('class','row')
        // Create
        let generatedNumbers = winningNumbers()
        generatedNumbers.forEach(element => {
            let num = document.createElement('div')
            num.setAttribute('class','ball')
            num.innerText = element
            newRow.appendChild(num)
        });
    
        topBox.appendChild(newRow)
        
    }

})



expandBtn.addEventListener('click',()=>{
    options.classList.toggle('options__expand')
})

minusBtn.addEventListener('click',()=>{
    if(generateCounter.value>1)generateCounter.value--
})

plusBtn.addEventListener('click',()=>{
    generateCounter.value++
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


