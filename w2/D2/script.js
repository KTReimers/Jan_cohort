function clicked(element){
    // alert('You clicked me!')
    // console.log(element)
    console.log(element.innerText)
    element.innerText="I am changed!"
}

function hoverOn(element){
    if(element.innerText == "Red"){
        element.innerText = "Blue"
    }else{
        element.innerText = "Red"
    }
}

// function hoverOff(element){
//     element.innerText="Blue"
// }

function Increment(element){
    // console.log(element)
    var el = document.querySelector(`#${element}`)
    //                               '#likes1'
    //                               '#likes2'
    //                               '#likes3'
    // console.log(el)
    el.innerText++
}