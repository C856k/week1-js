const COUNTRY_API = "https://countries.plaul.dk/api/countries"

document.getElementById("svg2").addEventListener("click",mapHandler)


function mapHandler(evt){
    const elementPressed = evt.target
    const id = elementPressed.id
    console.log(id)

    elementPressed.style.fill="blue"
    fetch(COUNTRY_API+"/"+id)
    .then(res=>res.json())
    .then(data=>{
        
    })
}