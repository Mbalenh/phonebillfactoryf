function CalculateBill(){
    let callsTotal = 0;
    let smsTotal = 0;
    let totalCost= 0;
    let critical =30;
    let warning=20;
   
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