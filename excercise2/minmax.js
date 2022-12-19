//EXCERCISES PART 2 (MMINMAX)
//Write a function that takes a minimum number and a maximum number, and using a for loop,
//log out all odd numbers between the min and the max, NOT including the min or max themselves.

function logOddnumbers ( min, max){
    for (let i = min + 1; i < max; i++){
        if(i % 2 !== 0){ // need to work on adjusting to === 
            console.log(i);
        }
    }
}

logOddnumbers(1,30);