 const btnEl = document.getElementById("btn");
 const jokeEl = document.getElementById("joke")

const apiKey = "IySmEC9WSxywnjm4SA2X/w==BIz0ottNY3TtBaXu";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
 }

 btnEl.addEventListener('click', getJoke)