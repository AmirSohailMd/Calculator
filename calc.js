function digits(digit){
    const firstValue=document.getElementById('display');
    firstValue.value=firstValue.value+digit;
}
function results(){
    const result = document.getElementById('display');
    const textboxvalue = result.value
    const plus = '+';
    const minus = '-';
    const multiply = '*';
    const division = '/';
    if(textboxvalue.includes(plus)){
        const operatorIndex = textboxvalue.indexOf(plus);
        const firstDigits = parseInt(textboxvalue.slice(0,operatorIndex));
        const secondDigits = parseInt(textboxvalue.slice(operatorIndex+1));
        const resultValue = firstDigits+secondDigits;
        result.value = resultValue;
    }else if(textboxvalue.includes(minus)){
        const operatorIndex = textboxvalue.indexOf(minus);
        const firstDigits = parseInt(textboxvalue.slice(0,operatorIndex));
        const secondDigits = parseInt(textboxvalue.slice(operatorIndex+1));
        const resultValue = firstDigits-secondDigits;
        result.value = resultValue;
    }else if(textboxvalue.includes(multiply)){
        const operatorIndex = textboxvalue.indexOf(multiply);
        const firstDigits = parseInt(textboxvalue.slice(0,operatorIndex));
        const secondDigits = parseInt(textboxvalue.slice(operatorIndex+1));
        const resultValue = firstDigits*secondDigits;
        result.value = resultValue;
    }else if(textboxvalue.includes(division)){
        const operatorIndex = textboxvalue.indexOf(division);
        const firstDigits = parseInt(textboxvalue.slice(0,operatorIndex));
        const secondDigits = parseInt(textboxvalue.slice(operatorIndex+1));
        const resultValue = firstDigits/secondDigits;
        result.value = resultValue;
    }
    
}
