fetch("blabla.json")
    .then(response => response.json())
    .then(jsonData => poep(jsonData))

function poep(mypoep) {
    const listContainer = document.querySelector(".listing");
    for (let i = 0; i < mypoep.length; i++) {
        listContainer.innerHTML +=
            `                        
    <li>
    <h2>${mypoep[i].title}</h2>
        <div class="body">
<img src = "${mypoep[i].ImageUrl}"
    </div>
    <h2>${mypoep[i].description}</h2>
    <h2>${mypoep[i].year}</h2>
    <h2>${mypoep[i].countryOfOrigin}</h2>
    <h2>${mypoep[i].artists}</h2>

    <div class="cta">
        <a href="">klik hier!</a>
    </div>
</li>`
    }
}