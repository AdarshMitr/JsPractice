//A positive integer with two or more digits has been provided as input. The objective is to return the sum of all of the number's digits. 

//Example: Number -> 2568

// The number 2568 has 4 digits: 2, 5, 6 and 8. When we add these digits: 2 + 5 + 6 + 8 = 21 We obtain 21, which is the desired output.

let sum = 0;
function digitSum(num) {
   
    let newNum = num.toString().split('');

    //console.log(newNum);
    
    for (let i = 0; i < newNum.length; i++) {
        sum += parseInt(newNum[i]);
        //console.log(sum);
        
    }
 
    return sum;
    
}

let output= digitSum(2594);
//console.log(newNum);

document.getElementById('text').innerHTML=output;