function PokeRequest(){
let url = "https://pokeapi.co/api/v2/pokemon/ditto"


fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    document.getElementById("PokeName").innerHTML = data["name"].toUpperCase()
    document.getElementById("PokeId").innerHTML = data["id"]
    document.getElementById("PokemonImg").setAttribute('src', data['sprites']['front_default'])
})
.catch((erro) => {
    console.log("Deu erro:" + " "+ erro);
})
}
export default PokeRequest