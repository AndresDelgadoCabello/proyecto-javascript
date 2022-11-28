// uso de fetch y api en buscador de imagenes de perros (en otra pagina js ya que rompe la principal? = buscar el por que) //

const dog_btn = document.getElementById('dog_btn');
const dog_resultado = document.getElementById('dog_resultado');

dog_btn.addEventListener('click', RandomDog);


function RandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
        	dog_resultados.innerHTML = `<img src=${data.url} alt="dog" />`
		});
}
