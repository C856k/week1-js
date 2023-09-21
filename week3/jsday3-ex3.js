const SERVER_URL = "http://localhost:8080/api/cars"

document.getElementById("btn-get-all").addEventListener("click",getAllCars)
document.getElementById("btn-find-car").addEventListener("click",getACar)
document.getElementById("add-car").addEventListener("click",addCar)

function addCar(evt) {
    evt.preventDefault()
    const form = document.getElementById(`carform`);
    const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
    };
    const options = {
        method: "POST",
        Headers: {"Content-type": "application/json"},
        body: JSON.stringify(newCar)
    }
    fetch(SERVER_URL,options)
    .then(res => res.json())
    .then(carRes => {
        document.getElementById("new-car-response").innerText = JSON.stringify(carRes, null, 3)
    })
}

function getACar() {
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL + "/" + id)
    .then(res => {
        if(!res.ok) {
            return alert("Car Not Found")
        }
    })
    .then(car => {
        document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
    })
}

function getAllCars() {
    fetch(SERVER_URL)
    .then(res => res.json())
    .then((cars) => {
     const tableRows = cars.map(car => `
        <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
        `)
     const rowsAsStr = tableRows.join("")
     document.getElementById("tbody").innerHTML = rowsAsStr
    })
}