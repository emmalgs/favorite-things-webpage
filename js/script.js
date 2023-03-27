const favs = []
function userInfo(e) {
    e.preventDefault()
    const color = document.querySelector("#color").value;
    const movie = document.querySelector("#movie").value;
    const fish = document.querySelector("#fish").value;
    console.log(favs)
    favs.push(color, movie, fish)
    arrayStuff()
    displayInput()
}

const newFavs = []
function arrayStuff() {
    movie = favs[1];
    color = favs[0];
    fish = favs[2]
    newFavs.push(movie, color, fish)
}

function displayInput() {
    const ul = document.createElement("ul");
    document.querySelector("form").after(ul);

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.append(newFavs[0]);
    li2.append(newFavs[1]);
    li3.append(newFavs[2]);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
}

window.addEventListener("load", function(){
    document.querySelector("form").addEventListener("submit", userInfo);

})