let id = 1
async function get_char (){
    let card = document.querySelector(".quadradao");
    let btn = document.getElementById("more");
    let portal = document.getElementById("portal");
    let text = document.getElementById("click_here");
    let limit = 20;

    text.style.display="none"
    portal.style.display="none"
    document.body.style.backdropFilter= "blur(12px)";
    btn.style.display="block"

    for (i=1; i<=limit; i++){
        await fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(Response => Response.json())
        .then(function(get_char){
        
            console.log(id)

            card.innerHTML +=`
            <article>
                <img src="${get_char.image}">
                <div class="card">
                    <div class="name">
                        <h2>${get_char.name}</h1>
                    </div>
                    <div class="${get_char.status}">
                        <span><input type="radio">
                            ${get_char.status} - ${get_char.species}
                        </span>
                    </div>
                    <div class="details">
                        <span>Gender: ${get_char.gender}</span><br>
                        <span>Last Location: ${get_char.location.name}</span>
                    </div>
                </div>
            </article>
            `
            id++
        })
        limit=+20
    }
}
