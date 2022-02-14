const billAmt = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashGiven");

const errorMsg = document.querySelector(".errorMsg");


const nextBtn = document.querySelector("#nextBtn");
const checkBtn = document.querySelector("#checkBtn");

const cashGivenInput = document.querySelector(".cashGivenInput");
const changeReturn = document.querySelector(".changeReturn");

const output = document.querySelector("#output");

const noOfNotes = document.querySelectorAll(".noOfNotes")

const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

console.log(billAmt, cashGiven, nextBtn, checkBtn, cashGivenInput, changeReturn, output, noOfNotes, arrayNoteAmt);

//if bill amt filled, display cash given input field
nextBtn.addEventListener("click", () => {
    hideError();
    if (Number(billAmt.value) > 0) {
        nextBtn.style.display = "none";
        cashGivenInput.style.display = "block";
    }
    else{
        showError("Invalid input")
    }
})

// checkBtn clicked handler
checkBtn.addEventListener("click",()=>{
    clearNoOfNotes();
    hideError();
    let billAmtVal=Number(billAmt.value);
    let cashGivenVal=Number(cashGiven.value);

    




})











// function to hide any error message
function hideError() {
    errorMsg.style.display = "none"
}
// function to show invalid input
function showError(text){
    errorMsg.style.display="block";
    errorMsg.innerText=text;
    changeReturn.style.display="none";
}
//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes(){
for(let notes of noOfNotes)
{
notes.innerText="";}
}