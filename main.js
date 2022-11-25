const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")
const resultado = document.querySelector("#resultado")


const calcularIMC = () => {

if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let clasificacion = ""

    if (imc < 18.5) {
    clasificacion = "Abajo del peso ideal"
    } else if (imc < 25) {
    clasificacion = "Felicidades! te encuentras en tu Peso ideal"
    } else if (imc < 30) {
    clasificacion = "Sobrepeso"
    } else if (imc < 35) {
    clasificacion = "obesidad grado 1"
    } else if (imc < 41) {
    clasificacion = "Obesidad grado 2"
    } else {
    clasificacion = "Obesidad grado 3"
    }
    
    resultado.innerHTML = `IMC: ${imc} (${clasificacion})`
} else {
    resultado.innerHTML = "resultados"
}
}

// uso de eventos y de librerias //

const btn = document.getElementById('btn');

btn.addEventListener("click", function onClick() {
    btn.style.backgroundColor = "#abd1c6";

    Toastify({
        text: "Datos procesados correctamente",
        duration: 3000
        }).showToast();
    
});

// uso de fetch y API //

const urlGatos = "https://api.thecatapi.com/v1/images/search"

fetch(urlGatos)
.then(res => res.json())
.then(data =>{
    const img = document.querySelector("img")
    img.src = data[0].url
})