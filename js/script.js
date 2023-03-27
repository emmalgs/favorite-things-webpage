const favs = []
function userInfo(e) {
    e.preventDefault()
    const color = document.querySelector("#color").value;
    const movie = document.querySelector("#movie").value;
    const fish = document.querySelector("#fish").value;
    console.log(favs)
    favs.push(color, movie, fish)

}


window.addEventListener("load", function(){
    document.querySelector("form").addEventListener("submit", userInfo);
    
})