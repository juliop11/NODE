class Pokemon {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


async function getPokemon() {

    let url = "https://pokeapi.co/api/v2/pokemon/";

    let param = {

        headers: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    try {
        let data = await fetch(url, param);
        let result = await data.json();
        document.getElementById("mostrarNombre").value = result.data.nombre;
    }
    catch (error) {
        console.log(error);
    }
}