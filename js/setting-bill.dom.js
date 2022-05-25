// get a reference to the sms or call radio buttons
const billItemTypeWithSettingsElem= document.querySelector(".billItemTypeWithSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings= document.querySelector(".smsTotalSettings");
const totalSettings= document.querySelector(".totalSettings");
// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const addbtnSettings= document.querySelector(".addbtnSettings");
//get a reference to the 'Update settings' button
const Updatesettings = document.querySelector(".Updatesettings");
let settingsBill =  BillwithSettings();
//add an event listener for when the 'Update settings' button is pressed
function Updatesetting(){
        let totalCostSettings = callCostSetting + smsCostSetting;
    let settingsBill =  BillwithSettings();
    callCostSetting.innerHTML=settingsBill.setCallTotalCost().toFixed(2);
    smsCostSetting.innerHTML= settingsBill.setSmsTotalCost().toFixed(2);
    // * add the appropriate value to the overall total
    // totalCostSettings = Number(totalcallsSettings) + Number(totalsmsSettings);
    // * display the latest total on the screen.
    totalCostSettings.innerHTML = settingsBill.setTotalCost().toFixed(2);
   

        addColorBehavior()
}   
function addbtnSetting(){
    var checkedaddbtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    let settingsBill =  BillwithSettings();
    if (checkedaddbtnSettings){
        var billItemTypeWithSettings  = checkedaddbtnSettings.value;

        // console.log(callCostSetting.value);
        
    
           
            // billItemTypeWithSettings will be 'call' or 'sms'
            if(billItemTypeWithSettings === "call"){
                settingsBill.makeCall();
            }
            else if(billItemTypeWithSettings === "sms"){
                settingsBill.sendSms();
    
    }  
     
    
      
    }
    callTotalSettings.innerHTML=settingsBill.getCallTotalCost().toFixed(2);
    smsTotalSettings.innerHTML= settingsBill.getSmsTotalCost().toFixed(2);
    // * add the appropriate value to the overall total
    // totalCostSettings = Number(totalcallsSettings) + Number(totalsmsSettings);
    // * display the latest total on the screen.
    totalSettings.innerHTML = settingsBill.getTotalCost().toFixed(2);
   
    addColorBehavior()
    
}

//add an event listener for when the add button is pressed  
function addColorBehavior(){
    let settingsBill =  BillwithSettings();
    // * check the value thresholds and display the total value in the right color.
    totalSettings.classList.remove("critical");
    totalSettings.classList.remove("warning");
   
        totalSettings.classList.add(settingsBill.totalClassName());

    
     
}
// //in the event listener get the value from the billItemTypeRadio radio buttons
// // * add the appropriate value to the call / sms total
// // * add the appropriate value to the overall total
// // * add nothing for invalid values that is not 'call' or 'sms'.
// // * display the latest total on the screen.
// // * check the value thresholds and display the total value in the right color.
addbtnSettings.addEventListener('click', addbtnSetting);
Updatesettings.addEventListener('click', Updatesetting);