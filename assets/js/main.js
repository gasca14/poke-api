console.log("Entro al main.js");

const imgPokemon = document.getElementById("imgPokemon"); 
const nombre = document.getElementById("nombre")
const peso = document.getElementById("peso")
const habilidades = document.getElementById("habilidades")

const randomPokemon = () => {
    // alert("hola")
    const pokemon_number = generateRandomNumber(1, 151)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_number}`)
    .then((response)=>response.json()) 
    .then((data)=>{
        imgPokemon.src = data.sprites.other.home.front_default 
        nombre.innerText = data.name.toUpperCase()
        peso.innerText = data.weight
        habilidades.innerText = data.abilities[0].ability.name
        console.log(data)
    })
    .catch((error)=>{console.log(error)})
}

function generateRandomNumber(min = 0, max = 100){

    let difference = max-min;

    let rand = Math.random()

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;

}