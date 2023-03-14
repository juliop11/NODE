let pokeNombre = document.getElementById("pokemon");
let cuerpo = document.querySelector(".cards")
let imagen = document.getElementById("imagen")
let type = document.getElementById("type")
let nombrePoke = document.getElementById("nombrePoke");

function buscar(pokeNombre){

    getPokemon(pokeNombre.value)
}

function getPokemon(pokemon) {

   
    // console.log(pokemon);

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    let param = {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    fetch(url, param)
        .then(function (data) {
            // console.log(data);
            return data.json()
        })
        .then(function (pokemon) {

          
                imagen.src = pokemon.sprites.other.home.front_default;
                nombrePoke.innerHTML = pokemon.name;
                type.innerHTML = pokemon.types[0].type.name;

                // console.log(result.abilities);
                // console.log(result.species);
        })

        .catch(function (error) {
            console.log(error);
        })


}
