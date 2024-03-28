fetch('http://localhost:3001/hardstyle')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

function poep(myPoep) {

    const listContainer = document.querySelector(".listing");

    for (let i = 0; i < myPoep.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myPoep[i].title}</h2>
        <div class="body">
        <img src = "${myPoep[i].imageUrl}">
        </div>
        <p>${myPoep[i].description}</p>
        <p>${myPoep[i].year}</p>
        <p>${myPoep[i].countryOfOrigin}</p>
        <p>${myPoep[i].artists}</p>
        <div class="cta">
            <a href="${myPoep[i].websiteUrl}">Click here for the website!</a>
        </div>
        </li>`
    }
}