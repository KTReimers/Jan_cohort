function postEntry(event) {
    event.preventDefault()
    // var input = document.getElementById("journalEntry").value
    // var divElement = document.getElementById("journalEntries")
    // var pElement = document.createElement("p")

    // pElement.appendChild(document.createTextNode(input))
    // divElement.appendChild(pElement)

    journalEntries.innerHTML += `<p>${journalEntry.value}</p>`





}   
