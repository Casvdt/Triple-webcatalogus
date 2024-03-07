fetch('epic.json')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

    function poep(myPoep) {

        const listContainer = document.querySelector(".listing");
    
        for (let i = 0; i < myPoep.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myPoep[i].title}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myPoep[i].img}">
        </div>
        <h4 class="tekst">${myPoep[i].description}</h4>
        <p class="tekst">Price:${myPoep[i].price}</p>
        <p class="tekst">genre:${myPoep[i].genres}</p>
        <p class="tekst">releaseDate:${myPoep[i].releaseDate}</p>



        <div class="cta">
            <a href="${myPoep[i].url}">klik hier!</a>
        </div>`
        
    }
    }