function SBI(){
    var account,acctype,minbal,balance,charges,interest,accbalance,msg;

    account = parseInt(document.getElementById("account").value);
    acctype = document.getElementById("acctype").value;
    minbal = parseInt(document.getElementById("minbal").value);
    balance = parseInt(document.getElementById("balance").value);
    
    if(acctype=='s'){
        if(balance<minbal){
            charges = 10;
            accbalance = balance - charges; 
            msg = "Account balance decrease";
        
        }
        else{
            interest = (4/balance) * 100;
            accbalance = balance + interest;
            msg = "Account balance inc";
       
        }
    }
    else if(acctype=='c'){
        if(balance<minbal){
            charges = 25;
            accbalance = balance - charges;
            msg = "Account balance decrease";
         
        }

        else if(balance>= (minbal+5000)){
            interest = 3/balance * 100;
            accbalance = balance + interest;
            msg = "Account balance inc";
        
        }

        else{
            interest = 5/balance * 100;
            accbalance = balance + interest;
            msg = "Account balance inc";
        }
    }    

    else{
        msg = 'None';
    }    

    document.getElementById("numacc").value = account;
    document.getElementById("typeacc").value = acctype;
    document.getElementById("currbal").value = balance;
    document.getElementById("newbal").value = accbalance;
    document.getElementById("msg").value = msg;
    
}
