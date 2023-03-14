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


async function postPokemon() {

    let pokemon = new Pokemon(document.getElementById("nombre").value)

    let url = "https://pokeapi.co/api/v2/pokemon/";

    let param = {

        headers: { "Content-type": "application/json; charset= UTF-8" },
        body: JSON.stringify(pokemon),
        method: "POST"
    }
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.error)
                showToast("ERROR: " + result.mensaje, "bg-danger")
            else
                showToast("Usuario creado correctamente", "bg-success")

                console.log(result);
        })
        .catch(function(error){
            console.log(error);
        })
}


function showToast(mensaje,color){

    document.getElementById("toastText").innerText=mensaje;
    let toastElement = document.getElementById("toast")

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;

    let toast = new bootstrap.toast(toastElement)
    toast.show()
}