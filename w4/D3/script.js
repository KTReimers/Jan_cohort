// 1) Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function sum(a,b){    //define function
    var sum =0;       // set sum variable equal 0 (placeholder)
    if(a==b){         // checking if a == b
        return a;       // give us back  one of the numbers
    }else if (a<b){      //checking if a is smaller than b
        for(var i=a;i<=b;i++){    // loop or count from a to b
            sum +=i;     // take the value of sum and increase it by the iterator
        }
        return sum     // return out of the function with the sum
    }else{      //only option left is that a>b
        for(var i=b;i<=a;i++){     // looping from b to a
            sum +=i;     // take the value of sum and increase it by the iterator
        }
        return sum    //return the sum
    }
}
var result =sum(100, 40)
console.log(result);

var tagName = document.querySelector('#idNameOfTag')
tagName.innerText = result


function sum2(a,b){    //define function
    var sum =0;     // set sum variable equal 0 (placeholder)
    if (a<b){   //checking if a is smaller than b
        for(var i=a;i<=b;i++){ // loop or count from a to b
            sum +=i; // take the value of sum and increase it by the iterator
        }
        return sum // return out of the function with the sum
    }else{ //only option left is that a>b
        for(var i=b;i<=a;i++){ // looping from b to a
            sum +=i; // take the value of sum and increase it by the iterator
        }
        return sum //return the sum
    }
}
var result =sum2(100, 100)
console.log(result);





// 2)
// You will be given an array and a value. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.






// 3)
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// arr = [1, 2, 3, 4]
// => 1 * 2 * 3 * 4 = 24






// 4)
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]





// 5) Build a function that returns an array of any given array in reverse.





// 5.5) build a function that reverses a list without creating a new list