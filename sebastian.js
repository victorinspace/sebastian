// create budget for income
// using general maths

// recommended savings rate
const savingsRate = 0.20;

// obtaining user moneys
let givenIncome = document.getElementById("givenIncome");

// using the maths
let calculateTotal = givenIncome - (givenIncome * savingsRate);

givenIncome.addEventListener('click', function(){
    console.log("clicked the input box");
});

// fool-proof logic
const theMaths = (givenIncome) => {
    if (isNaN(givenIncome)) {
        document.getElementById("result").innerHTML(`That's not a number!`);
    } else {
       document.getElementById("result").innerHTML(`You actually have $${calculateTotal}.`);
    }
}