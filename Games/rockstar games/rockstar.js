fetch('http://localhost:3001/rockstar')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

    function poep(myrockstar) {

        const listContainer = document.querySelector(".listing");
    
        for (let i = 0; i < myrockstar.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2 class="title">${myrockstar[i].title}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myrockstar[i].img}">
        </div>
        <h4 class="tekst">${myrockstar[i].description}</h4>
        <p class="tekst">Price:${myrockstar[i].price}</p>
        <p class="tekst">genre:${myrockstar[i].genres}</p>
        <p class="tekst">platforms:${myrockstar[i].platforms}</p>
        <p class="tekst">releaseDate:${myrockstar[i].releaseDate}</p>



        <div class="cta">
            <a href="${myrockstar[i].url}">Click here for the website!</a>
            
        </div>
        </li>`
        
    }
    }