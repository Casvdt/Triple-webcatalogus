fetch('formula1.json')
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
        <h4>${myPoep[i].drivers}</h4>
        <p>${myPoep[i].description}</p>

        <div class="cta">
            <a href="">klik hier!</a>
        </div>`
        
    }
    }
    