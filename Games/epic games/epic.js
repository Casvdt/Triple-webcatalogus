fetch("epic.json")
    .then(response => response.json())
    .then(jsonData => epic(jsonData));
function epic(epicgames) {
    const listcontainer = document.querySelector(".listing");
for (let i = 0; i < epicgames.length; i++) {
    listcontainer.innerHTML += `<li>
    <h2>${epicgames[i].title}</h2>
    <div class="body">
    <img src = "${epicgames[i].img}"
        </div>
        <p>${epicgames[i].description}</p>
        <p>Price:${epicgames[i].price}</p>
        <p>genre:${epicgames[i].genres}</p>
        <p>releaseDate:${epicgames[i].releaseDate}</p>
    </li>
    `
    }
    
}