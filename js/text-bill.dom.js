// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
let billtext= TextBill();
function addToBillBtnClicked(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim().toLowerCase();
    
    // update the correct total
    if (billTypeEntered === "call"){
         billtext.makeCall();
    }
    else if (billTypeEntered === "sms"){
        billtext.sendSms();
    }
    
    //update the totals that is displayed on the screen.

     callTotalOne.innerHTML= billtext.getCallTotalCost().toFixed(2);
     smsTotalOne.innerHTML= billtext.getSmsTotalCost().toFixed(2);
     totalOneElement.innerHTML= billtext.getTotalCost().toFixed(2);
     // totalCost = callsTotal + smsTotal;

    totalOneElement.classList.remove("warning")
    totalOneElement.classList.remove("critical")
    totalOneElement.classList.add(billtext.totalClassName())
      //color the total based on the criteria
}
//link the function to a click event on the calculate button
addToBillBtn.addEventListener('click', addToBillBtnClicked);