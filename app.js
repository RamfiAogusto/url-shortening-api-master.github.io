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




/* const form = document.getElementById('my-form');
async function shortenUrl(e) {
  e.preventDefault();

  //const url = e.srcElement.childNodes[1].value;

  const url = 'https://free-url-shortener.p.rapidapi.com/API/write/get?url=url&type=type&custom=custom&private=1&via=via&password=password&uses=100';
  const options = {
    method: 'GET',
    headers: {
      
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'free-url-shortener.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


// Escuchar el evento "submit" del formulario
form.addEventListener('submit', shortenUrl); */