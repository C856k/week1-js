document.addEventListener("DOMContentLoaded",function() {
    const map = document.getElementById(map);
    const infoDiv = document.getElementById("info");
    let currentChosen = null;

    map.addEventListener("click",() => {
        changeColor();
        displayInfo
    });

    function changeColor() {
        if (currentChosen != null) {
            currentChosen.style.fill = "rgb(220, 220, 220)";
        }
        event.target.style.fill = "rgb(0, 7, 220)";
        currentChosen = event.target;
    }

    function displayInfo() {
        fetch(`https://countries.plaul.dk/api/countries/${event.target.id}`)
        .then((res) => res.json())
        .then((data) => buildHtml(data));
    }

    function buildHtml(data) {
        console.log(data);
        const flagImg = document.createElement("img");
        flagImg.src = data.flag;

        let infoHTML = `
        <div>
        <p>${flagImg.outerHTML}</p>
        <p>Country: ${data.name.common}</p>
        <p>Member of UN: ${data.UNmember}</p>
        <p>${formatCurrentcies(data.currencies)}</p>
        <p>Capital: ${data.capital}</p>
        <p>Borders: ${data.borders.join(", ")}</p>
        </div>`;
        
        infoDiv.innerHTML = infoHTML;
    }

    function formatCurrentcies(currencies) {
        const currencyEntries = Object.entries(currencies);
        const formatCurrentcies = currencyEntries.map(([code, currentcy]) => {
            return `${code}, name: ${currentcy.name}, symbol: ${currentcy.symbol}`;
        });
        return `Currencies: ${formatCurrentcies.join("; ")}`;
    }
    });