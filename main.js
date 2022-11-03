const input = document.getElementById("input");
const imagenes = document.getElementsByClassName("main__imagenes")
[0];

input.addEventListener("keydown", function(event){
    if(event.key === "enter")
    loadImg();
})

function loadImg(){
    removerImg();

        const url = "https://api.unsplash.com/search/photos/?query="+input.value+"&per_page=5&client_id=9FvYye812LCVi5q7wrXD7dF_dUea4Wl5MLpuivvMREs";
        fetch(url)
        .then(response =>{
        if(response.ok)
        return response.json();
        else
        alert(response.status)
})

.then(data =>{
    const imageNodes = [];
    for(let i = 0; i < data.results.length;i++){
        imageNodes[i] = document.createElement("div");
        imageNodes[i].className = "img";
        imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.raw+")";
        imageNodes[i].addEventListener("dblclick", function(){
            window.open(data.results[i].links.download, "_blank");
        })
        imagenes.appendChild(imageNodes[i]);
    }
})

}
function removerImg(){
    imagenes.innerHTML = "";
}