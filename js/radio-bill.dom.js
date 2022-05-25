// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const smsTotalTwo= document.querySelector(".smsTotalTwo");
const callTotalTwo = document.querySelector(".callTotalTwo");
const totalTwo = document.querySelector(".totalTwo");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed
function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
        if ( billItemType === "call"){
            billradio.makeCall();
        }
        else if (billItemType === "sms"){
            billradio.sendSms();
        }
    }
   
          // totalCost = callsTotal + smsTotal;
          callTotalTwo.innerHTML= billradio.getCallTotalCost().toFixed(2);
          smsTotalTwo.innerHTML=billradio.getSmsTotalCost().toFixed(2);
          totalTwo.innerHTML=  billradio.getTotalCost().toFixed(2);
          totalTwo.classList.remove("warning")
          totalTwo.classList.remove("critical")
      
               // totalCost = callsTotal + smsTotal;

    totalOneElement.classList.remove("warning")
    totalOneElement.classList.remove("critical")
    totalOneElement.classList.add(billradio.totalClassName())
      //color the total based on the criteria
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);