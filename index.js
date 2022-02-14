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
    else {
        showError("Invalid input")
    }
})

// checkBtn clicked handler
checkBtn.addEventListener("click", () => {
    clearNoOfNotes();
    hideError();
    let billAmtVal = Number(billAmt.value);
    let cashGivenVal = Number(cashGiven.value);

    if (billAmtVal > 0 && cashGivenVal > 0) {
        if (!Number.isInteger(cashGivenVal)) {
            showError("Please enter valid ammount in cash-given field")
            return;
        }
        if (cashGivenVal < billAmtVal) {
            showError("Given-cash is less than the bill ammount,please enter right ammount")
            return;
        }
        calculateNotes(billAmtVal, cashGivenVal)

    }
    else {
        showError("Please enter valid bill ammount and given-cash ammount")
    }
})


// function to calculate no. of notes to be given
function calculateNotes(bill,cash){
    let returnAmt=cash-bill;
    if (returnAmt<1){
        showError("Don't return anything!")
        return; 
    }
    changeReturn.style.display="block";
    for (i=0;i<arrayNoteAmt.length;i++){
compare(returnAmt,arrayNoteAmt[i],i)

    }

}


//compare with currency and post the no. of notes on screen
function compare(remainder,note,index){
  if(remainder>=note){
      let notes=Math.floor(remainder/note);
      remainder=remainder-notes*note;
      noOfNotes[index].innerText=`${notes}`

  }
  return remainder

}



// function to hide any error message
function hideError() {
    errorMsg.style.display = "none"
}
// function to show invalid input
function showError(text) {
    errorMsg.style.display = "block";
    errorMsg.innerText = text;
    changeReturn.style.display = "none";
}
//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes() {
    for (let notes of noOfNotes) {
        notes.innerText = "";
    }
}