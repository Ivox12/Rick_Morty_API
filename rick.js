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
            <div class="card">
                    <img src="${get_char.image}">
                <div class="name">
                    <h2>${get_char.name}</h1>
                </div>
                <div class="${get_char.status}">
                    <span><input type="radio"><span>
                    <p>Status: ${get_char.status}</p>
                </div>
                <div class"details">
                    <p>${get_char.species} <br> Gender: ${get_char.gender}</p><br>
                    <p>Last Location: ${get_char.location.name}</p>
                </div>
            </div>
            `
            id++
        })
        limit=+20
    }
}

get_char()