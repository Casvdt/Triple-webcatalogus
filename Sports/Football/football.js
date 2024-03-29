fetch('http://localhost:3001/football')
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

         <h4 class="tekst1">Popular team: ${myPoep[i].popular_team}</h4>
         <img class="club" src ="${myPoep[i].club_img}">
         <p class="tekst1"> ${myPoep[i].description}</p>
        <p class="tekst">Stadium: ${myPoep[i].team_stadium}</p>
        <div class="cta">
            <a href="${myPoep[i].websiteUrl}">Click here for the website!</a>
        </div>
        </li>`
    }
}
