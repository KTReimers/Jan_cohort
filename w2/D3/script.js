var popup = document.querySelector('#popup')

setTimeout(discount, 10000)

function discount(){
    popup.style.display = "block"
}

function popUp(){
    popup.remove()
}

function searchBar(event){
    event.preventDefault()
    var input= document.querySelector('#search')
    console.log(input)
    alert(`You searched for ${input.value}`)
}

function addToCart(){
    var cart = document.querySelector('span')
    cart.innerText++
}
console.log("this is new")
