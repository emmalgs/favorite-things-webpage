const favs = []
function userInfo(e) {
    e.preventDefault()
    const color = document.querySelector("#color").value;
    const movie = document.querySelector("#movie").value;
    const fish = document.querySelector("#fish").value;
    console.log(favs)
    favs.push(color, movie, fish)
    arrayStuff()

}

const newFavs = []
function arrayStuff() {
    movie = favs[1];
    color = favs[0];
    fish = favs[2]
    newFavs.push(movie, color, fish)
}


window.addEventListener("load", function(){
    document.querySelector("form").addEventListener("submit", userInfo);
    
})