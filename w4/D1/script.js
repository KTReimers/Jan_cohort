//array collection data of any datatype symbol [] index
//object {} key,value pairs key:value value can be all datatypes

// for(var i = 1; i<=20; i++){
//     console.log(i)
// }


async function catchEmAll(){
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    console.log(response)
    var pokeData = await response.json()
    console.log(pokeData)
    // var pokemon = document.querySelector("#pokeName")
    // pokemon.innerText = pokeData.name
    var topTen = document.querySelector('ol')
    console.log(pokeData.results)
    for(var i = 0;i <pokeData.results.length; i++){
        console.log(pokeData.results[i].name)
        topTen.innerHTML += `<li>${pokeData.results[i].name}</li>`
    }
}