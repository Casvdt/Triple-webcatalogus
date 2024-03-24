fetch('darts.json')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

function poep(myPoep) {

    const listContainer = document.querySelector(".listing");

    for (let i = 0; i < myPoep.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myPoep[i].player_name}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myPoep[i].player_img}">
        <div class="drivers">
        <img class="imageUrl1" src = "${myPoep[i].dartboard_img}">
        </div>
        </div>
         <h4 class="tekst1">World ranking: ${myPoep[i].world_ranking}</h4>
        <p class="tekst">${myPoep[i].description}</p>
        <div class="cta">
            <a href="${myPoep[i].wikipedialink}">Click here for the wikipedia!</a>
        </div>
        </li>`
    }
}
