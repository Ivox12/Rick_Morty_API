let id = 1
async function get_char (){
    let card = document.querySelector(".quadradao");
    let limit = 20
    for (i=1; i<=limit; i++){
        await fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(Response => Response.json())
        .then(function(get_char){
        
            console.log(id)

            card.innerHTML +=`
            <div>
                <h1>${get_char.id}</h1>
                <h1>${get_char.name}</h1>
                <img src="${get_char.image}">
                <p>${get_char.status}</p>
                <p>${get_char.gender}</p>
                <p>${get_char.species}</p>
                <p>${get_char.location.name}</P>
            </div>
            `
            id++
        })
        limit=+20
    }
}