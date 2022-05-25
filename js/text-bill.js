function TextBill(){
    let callsTotal = 0;
    let smsTotal = 0;
    let totalCost= 0;
    let critical =50;
    let warning=30;
    // var callCostTotal =0;
    // var smsCostTotal = 0;
    // var billTypeEntered = billTypeText.value.trim().toLowerCase();
    function makeCall(){
             callsTotal += 2.75
            
    }
    function sendSms(){
            smsTotal += 0.75;
            
        }
    
    function totalClassName(){ 
        if(getTotalCost()>= critical){
            return "critical"
        }
        else if(getTotalCost() >= warning){
            return "warning"
        }
    }
    function getTotalCost(){
        return  callsTotal + smsTotal;
    }
    function getCallTotalCost(){
        return callsTotal;
    }
    function getSmsTotalCost(){
        return smsTotal;
    }


        return{
            makeCall,
            totalCost,
            sendSms,
            totalClassName,
            getTotalCost,
            getCallTotalCost,
            getSmsTotalCost

       
        }
}