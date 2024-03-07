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
        <p>${myPoep[i].description}</p>
        <p>Price:${myPoep[i].price}</p>
        <p>genre:${myPoep[i].genres}</p>
        <p>releaseDate:${myPoep[i].releaseDate}</p>



        <div class="cta">
            <a href="${myPoep[i].websiteUrl}">klik hier!</a>
        </div>`
        
    }
    }