// var x = "name"
// var arr = [1,2,3,4,"thing1",[4,5,6],{name:"Kyle"}]

// console.log(arr[4])
// console.log(arr[5][1])
// console.log(arr[6][x])

// arr.push("Bob")
// console.log(arr)
// arr.pop()
// console.log(arr)

var info = {
    firstName: "kyle",
    lastName: "Reimers"
}
// console.log(info)
info.Dob= "april 7"
// console.log(info)
info['Dob'] = "June 3rd"
// console.log(info)


// for(var i = 5; i>=0;i++){
//     console.log(i)
// }

// loop that counts to 100
// count from 1 to 100
// divisible by 15
// check if number is divisible by 3
// divisible by 5

// for(var i = 1; i <=100;i++){
//     if(i % 15 == 0){
//         console.log(i,"fizzbuzz")
//     } else if(i % 3 == 0){
//         console.log(i,"fizz")
//     }else if(i % 5 ==0){
//         console.log(i,"buzz")
//     } else{
//         console.log(i)
//     }
// }

// You will be given an array and a value. All you need to do is check whether the provided array contains the value.
// # Array can contain numbers or strings. X can be either.
// # Return true if the array contains the value, false if not.

function containsValue(arr,val){
    for(var i = 0;i<arr.length;i++){
        if( val == arr[i]){
            return true
        }
    }
    return false
}

// console.log(containsValue([1,2,3,4,5], 5))


for(i in info){
    console.log(`${i}: ${info[i]}`)
}




