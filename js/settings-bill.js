function BillwithSettings(){
    var theCallCost =0 ;
    var theSmsCost =0;
    var thewarningLevel =0;
    var theCriticalLevel= 0;

    var callCostTotal =0;
    var smsCostTotal = 0;

 function setCallCost(callCost){
     theCallCost = callCost;
 }   
 function getCallCost(){
     return theCallCost;
 }
 function setSmsCost(smsCost){
    theSmsCost = smsCost;
}   
function getSmsCost(){
    return theSmsCost;
}
function setwarningLevel(warningLevel){
    thewarningLevel = warningLevel;
}   
function getwarningLevel(){
    return thewarningLevel;
}
function setCriticalLevel(criticalLevel){
   theCriticalLevel = criticalLevel;
}   
function getCriticalLevel(){
   return theCriticalLevel;
}
function makeCall(){
    if(!hasReachedCriticalLevel()){
    callCostTotal += theCallCost
}
}
 function getTotalCost(){
        return  callCostTotal + smsCostTotal;
    }
function getCallTotalCost(){
    return callCostTotal
    }
function sendSms(){
    if(!hasReachedCriticalLevel()){
    smsCostTotal += theSmsCost
}
}
function getSmsTotalCost(){
    return smsCostTotal;
}
function hasReachedCriticalLevel(){
    return getTotalCost() >= getCriticalLevel();
}
function totalClassName(){ 
    // if(hasReachedCriticalLevel()){
    if(getTotalCost() >= getCriticalLevel()){
        return "critical"
    }
  else if(getTotalCost() >= getwarningLevel()){
        return "warning"
    }
}
return{
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    getCriticalLevel,
    setCriticalLevel,
    setwarningLevel,
    getwarningLevel,
    makeCall,
    getTotalCost,
    getCallTotalCost,
    getSmsTotalCost,
    sendSms,
    totalClassName,
    hasReachedCriticalLevel
}
}