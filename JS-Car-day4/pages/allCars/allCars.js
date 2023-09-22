import {SERVER_URL} from "../../settings"


export async function initAllCars(){
  console.log("initAllCars")

  const cars = getCars()

  const listItems = cars.map(car =>`
  <li>${car.id}, ${car.brand} </li>
`).join("")
document.getElementById("cars").innerHTML = listItems 
  
}

async function getCars(){
  const cars = await fetch(SERVER_URL).then(res=>res.json())
  return cars
}