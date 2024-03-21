fetch('http://localhost:3001/riot')
    .then(response => response.json())
    .then(jsonData => poep(jsonData));

    function poep(myriot) {

        const listContainer = document.querySelector(".listing");
    
        for (let i = 0; i < myriot.length; i++) {
        listContainer.innerHTML += ` <li>
        <h2>${myriot[i].title}</h2>
        <div class="body">
        <img class="imageUrl" src = "${myriot[i].img}">
        </div>
        <h4 class="tekst">${myriot[i].description}</h4>
        <p class="tekst">Price:${myriot[i].price}</p>
        <p class="tekst">genre:${myriot[i].genres}</p>
        <p class="tekst">platforms:${myriot[i].platforms}</p>
        <p class="tekst">releaseDate:${myriot[i].releaseDate}</p>



        <div class="cta">
            <a href="${myriot[i].url}">Click here for the website!</a>
            
        </div>
        </li>`
        
    }
    }