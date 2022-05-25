describe("the  radio-bill with factory function" , function(){
    describe("use values",function(){
      it("should be able to make 3 call ", function(){
      let billradio= RadioBill();
  
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
  
      assert.equal(8.25, billradio.getTotalCost());
      assert.equal(8.25, billradio.getCallTotalCost());
      assert.equal(0.00, billradio.getSmsTotalCost());
    })
    it("should be able to make the call cost set for 2 calls at 2.75", function(){
      let billradio = RadioBill();
     
  
      billradio.makeCall();
      billradio.makeCall();
      
  
      assert.equal(5.50, billradio.getTotalCost());
      assert.equal(5.50, billradio.getCallTotalCost());
      assert.equal(0.00, billradio.getSmsTotalCost());
    })
    it("should be able to send 2 sms's at 0.75", function(){
      let billradio = RadioBill();
  
      billradio.sendSms();
      billradio.sendSms();
      
  
      assert.equal(1.50, billradio.getTotalCost());
      assert.equal(0.00, billradio.getCallTotalCost());
      assert.equal(1.50, billradio.getSmsTotalCost());
    });
    it("should be able to send 2 sms's at 0.75 and make 1 call at 2.75", function(){
      let billradio = RadioBill();
      billradio.sendSms();
      billradio.sendSms();
      billradio.makeCall();
  
      assert.equal(4.25, billradio.getTotalCost());
      assert.equal(2.75, billradio.getCallTotalCost());
      assert.equal(1.50, billradio.getSmsTotalCost());
    });
  });
  
  describe("warning & critical level", function(){
    it("it should return a class of 'warning' if the warning level is reached",function(){
    let billradio = RadioBill()
    
      billradio.sendSms();
      billradio.sendSms();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      billradio.makeCall();
      
      assert.equal("warning", billradio.totalClassName());
    })
    it("it should return a class of 'critical' if the critical level is reached",function(){
      let billradio = RadioBill();
      billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.sendSms();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        billradio.makeCall();
        assert.equal("critical", billradio.totalClassName());
      });
    
  })
  });