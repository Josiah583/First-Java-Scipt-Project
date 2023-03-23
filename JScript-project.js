//let x = document.getElementById('');


function ccValidation(x){
let countOdd=0;
let countEven=0;
let k = x.length;
for(let i=k-1; i>=0; i--){
    //console.log(i);
    //let callVal=(x[i])
    let callVal= parseInt(x[i]);
    //console.log(callVal);
    if(i%2!==0){
        countOdd+=callVal
        //console.log(countOdd);
    }
    else{
        callVal*=2;
    }
    if (callVal>9){
        callVall-=9
        countEven+=callVal
    }
else{
    countEven+=callVal;
}
    
    let sum=countOdd+countEven;
    return sum%10 ?"valid":"invalid";

}
}

let x= "1234567891152356";
console.log(ccValidation(x));

function checkcc(){
const ccBtn=document.getElementById('but');
const ccNumber=document.getElementById('debit_card_input');
let any_name=ccNumber.value;

if(ccValidation(any_name)){
    ccBtn.style='background-color:green;';
    ccNumber.style='border-color:green;';

}
else{
    ccBtn.style='background-color:blue;';
    ccNumber.style='border-color:blue;';

}

}
