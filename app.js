const cont = document.querySelector(".cont");
const toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", () => {
    const hasClass = cont.classList.contains("none");

    if (hasClass) {
        cont.classList.remove("none");
    } else {
        cont.classList.add("none");
    }
});
/* ------------- */

function aggAlDocumento(urlToShorten, result) {
    let containerForm = document.querySelector(".container-form");
    let acortadoContainer = document.createElement("div");
    let urlsContainer = document.createElement("div");
    let urlLarga = document.createElement("p");
    let urlCorta = document.createElement("a");
    let btnCopy = document.createElement("button");
    /* ------ */
    urlLarga.innerText = urlToShorten;
    urlLarga.title="Url Larga";
    urlsContainer.appendChild(urlLarga);
    urlCorta.innerText = result;
    urlCorta.href = result;
    urlCorta.title = "Url Corta";
    urlsContainer.appendChild(urlCorta);
    acortadoContainer.appendChild(urlsContainer);
    urlsContainer.classList = "urls-container";
    acortadoContainer.classList="acortado-container";
    btnCopy.innerText = "copy";
    acortadoContainer.appendChild(btnCopy);
    containerForm.appendChild(acortadoContainer);
}

/* ---------------------------------------------- */
document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputUrl = document.getElementById("url");
    const urlToShorten = inputUrl.value;
    shortenUrl(urlToShorten);
});

async function shortenUrl(urlToShorten) {
    const apiUrl = "https://url-shortener23.p.rapidapi.com/shorten";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
                "40e18ac248msh039a0f714c16017p110569jsn198bc93d196a",
            "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
        },
        body: JSON.stringify({
            url: urlToShorten,
        }),
    };
    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        console.log(result.short_url);
        aggAlDocumento(urlToShorten, result.short_url);
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

/* ------------------------------------------------------------------- */
