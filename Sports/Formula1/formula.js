fetch('formula1.json')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

function poep(myPoep) {

    const listContainer = document.querySelector(".listing");

    for (let i = 0; i < myPoep.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myPoep[i].title}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myPoep[i].imageUrl}">
        <div class="drivers">
        <img class="imageUrl1" src = "${myPoep[i].firstDriverImg}">
        <img class="imageUrl1" src = "${myPoep[i].secondDriverImg}">
        </div>
        </div>
        <h4 class="tekst">${myPoep[i].drivers}</h4>
        <p class="tekst">${myPoep[i].description}</p>

        <div class="cta">
            <a href="${myPoep[i].websiteUrl}">klik hier!</a>
        </div>
        </li>`

    }
}
