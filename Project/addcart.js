function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }

    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 330;
        const caseTotal = getInputvalue('case') * 430;
        const food1Total = getInputvalue('food1') * 380;
        const food2Total = getInputvalue('food2') * 520;
        const subTotal = phoneTotal + caseTotal+ food1Total+ food2Total;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }

document.getElementById('case-plus').addEventListener('click',function(){
   upadateCaseNumber('case', 430 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
upadateCaseNumber('case', 430, false);
});

document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',330, true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',330 , false);
});

document.getElementById('case-plus').addEventListener('click',function(){
    upadateCaseNumber('food1',380, true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    upadateCaseNumber('food1',380 , false);
});

document.getElementById('case-plus').addEventListener('click',function(){
    upadateCaseNumber('food2',520, true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    upadateCaseNumber('food2',520 , false);
});

