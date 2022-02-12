// Assign btn and output div to variables 
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

// Assign URL's to variables 
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// Event handlers for numbers
textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error))
}, false);

// Event handlers for Chucky
apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))

    badLang();

}, false);

// Check for bad language 
function badLang() {
    setTimeout(() => {
        const phrase = document.getElementById('output').textContent;
        console.log(phrase);
        const phraseArr = phrase.split(" ");
        phraseArr.forEach(n => {
            if (n.includes("ass" || "bitch" || "shit" || "fuck" || "sex" || "jizz" || "the" || "bastard" || "blowjob" || "pussy" || "dick" || "penis" || "cock")) {
                document.getElementById('output').innerText = "Bad language use. Sorry, click the button again.";
            }
        })
    }, 1000);
}