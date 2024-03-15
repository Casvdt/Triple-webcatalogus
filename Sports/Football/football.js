fetch('football.json')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

function poep(myPoep) {

    const listContainer = document.querySelector(".listing");
    for (let i = 0; i < myPoep.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myPoep[i].competition_name}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myPoep[i].imageUrl}">
        </div>
        <img class="imageUrl1" src = "${myPoep[i].firstDriverImg}">
        <img class="imageUrl1" src = "${myPoep[i].secondDriverImg}">
         <h4 class="tekst1">${myPoep[i].popular_team}</h4>
        <p class="tekst">${myPoep[i].team_stadium}</p>
        <div class="cta">
            <a href="${myPoep[i].websiteUrl}">Click here for the website!</a>
        </div>
        </li>`
    }
}
