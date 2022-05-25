describe("the  text-bill with factory function" , function(){
  describe("use values",function(){
    it("should be able to make 3 call ", function(){
    let billtext= TextBill();

    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();

    assert.equal(8.25, billtext.getTotalCost());
    assert.equal(8.25, billtext.getCallTotalCost());
    assert.equal(0.00, billtext.getSmsTotalCost());
  })
  it("should be able to make the call cost set for 2 calls at 2.75", function(){
    let billtext = TextBill();
   

    billtext.makeCall();
    billtext.makeCall();
    

    assert.equal(5.50, billtext.getTotalCost());
    assert.equal(5.50, billtext.getCallTotalCost());
    assert.equal(0.00, billtext.getSmsTotalCost());
  })
  it("should be able to send 2 sms's at 0.75", function(){
    let billtext = TextBill();

    billtext.sendSms();
    billtext.sendSms();
    

    assert.equal(1.50, billtext.getTotalCost());
    assert.equal(0.00, billtext.getCallTotalCost());
    assert.equal(1.50, billtext.getSmsTotalCost());
  });
  it("should be able to send 2 sms's at 0.75 and make 1 call at 2.75", function(){
    let billtext = TextBill();
    billtext.sendSms();
    billtext.sendSms();
    billtext.makeCall();

    assert.equal(4.25, billtext.getTotalCost());
    assert.equal(2.75, billtext.getCallTotalCost());
    assert.equal(1.50, billtext.getSmsTotalCost());
  });
});

describe("warning & critical level", function(){
  it("it should return a class of 'warning' if the warning level is reached",function(){
  let billtext = TextBill()
  
    billtext.sendSms();
    billtext.sendSms();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    billtext.makeCall();
    
    assert.equal("warning", billtext.totalClassName());
  })
  it("it should return a class of 'critical' if the critical level is reached",function(){
    let billtext = TextBill();
    billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.sendSms();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      billtext.makeCall();
      assert.equal("critical", billtext.totalClassName());
    });
  
})
});