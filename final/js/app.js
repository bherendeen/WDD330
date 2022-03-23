// Dark/Light Theme
// Select the button
const btn = document.querySelector(".switch"),
    // Select the theme preference from localStorage
    currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
    // Use the .dark class
    document.body.classList.add("dark");
}

// Listen for a click on the button 
btn.addEventListener("click", () => {
    // Toggle the .dark class on each click
    document.body.classList.toggle("dark");

    // theme is equal to nothing
    let theme = "";
    // If the body contains the .dark class
    if (document.body.classList.contains("dark")) {
        // make the theme dark
        theme = "dark";
    }
    // Save choice in localStorage
    localStorage.setItem("theme", theme);
});

// navBar animation
// Select the button
const toggle = document.querySelector(".toggle"),
    search = document.querySelector(".search-box i"),
    sidebar = document.querySelector(".sidebar"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

search.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    console.log("working");

    if (document.body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

// GSAP - Intro
const tl = gsap.timeline({
    defaults: {
        ease: 'power1.out'
    }
});

tl.to('.intro-wording', {
    y: '0%',
    opacity: 1,
    duration: 1,
    stagger: .25
});
tl.to('.slider1', {
    y: '-100%',
    duration: 1.5,
    delay: 1
});
tl.to('.slider2', {
    y: '-100%',
    duration: 1.5,
    delay: .1
}, '-=1.4');
tl.to('.intro', {
    y: '-100%',
    duration: 1
}, '-=1.1');

// Solar System API
(() => {
    const api = 'https://api.le-systeme-solaire.net/rest/bodies/';

    const planetNames = ['mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
    const planetDisplay = document.querySelectorAll('.planetDisplay .apiSelect');

    /*
    mercury = 240;
    venus = 244;
    earth = 243;
    moon = 0;
    mars = 239;
    jupiter = 238;
    saturn = 241;
    uranus = 199;
    neptune = 219;
    pluto = 208;
    */
    const planetNums = [240, 244, 243, 0, 239, 238, 241, 199, 219, 208];

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < planetDisplay.length; i++) {
                // Selectors //
                const title = document.querySelector(`.planetDisplay .${planetNames[i]} h3`);
                const closeSun = document.querySelector(`.planetDisplay-info .${planetNames[i]}Close + dd`);
                const farSun = document.querySelector(`.planetDisplay-info .${planetNames[i]}Far + dd`);
                const distSun = document.querySelector(`.planetDisplay-info .${planetNames[i]}Dist + dd`);
                const oneYear = document.querySelector(`.planetDisplay-info .${planetNames[i]}Year + dd`);
                const oneDay = document.querySelector(`.planetDisplay-info .${planetNames[i]}Day + dd`);
                const avgTemp = document.querySelector(`.planetDisplay-info .${planetNames[i]}Temp + dd span`);
                const typeOutput = document.querySelector(`.planetDisplay-info .${planetNames[i]}Type + dd`);
                const moonNumOutput = document.querySelector(`.planetDisplay-info .${planetNames[i]}MoonNum + dd`);

                //console.log(distSun);

                // Get data and display //
                // Display name
                title.innerText = data.bodies[planetNums[i]].englishName.toUpperCase();
                // Closest to Sun
                const closeKilometerMile = data.bodies[planetNums[i]].perihelion;
                const closekmtoMi = kilometerMile(closeKilometerMile);
                closeSun.innerText = `${closekmtoMi} miles`;
                // Farthest from Sun
                const farKilometerMile = data.bodies[planetNums[i]].aphelion;
                const farkmtoMi = kilometerMile(farKilometerMile);
                farSun.innerText = `${farkmtoMi} miles`;
                // Distance around
                const distKilometerMile = data.bodies[planetNums[i]].equaRadius;
                const distkmtoMi = distanceAround(distKilometerMile);
                distSun.innerText = `${distkmtoMi} miles`;
                // Orbit around Sun
                const orbitDays = data.bodies[planetNums[i]].sideralOrbit.toLocaleString();
                oneYear.innerText = `${orbitDays} days`;
                // Hours per day
                const hoursPerDay = data.bodies[planetNums[i]].sideralRotation;
                oneDay.innerText = `${Math.abs(hoursPerDay).toLocaleString()} hours`;
                // Avg Temp
                const tempKelvinFahrenheit = data.bodies[planetNums[i]].avgTemp;
                const temp = kelvinFahrenheit(tempKelvinFahrenheit);
                avgTemp.innerText = `${temp}`;
                // Body Type
                const bodyType = data.bodies[planetNums[i]].bodyType;
                typeOutput.innerText = `${bodyType}`;
                // Avg Temp
                const moonNum = data.bodies[planetNums[i]].moons;

                if (moonNum == null) {
                    moonNumOutput.innerText = `0`;
                } else {
                    const moonCount = moonNum.length
                    moonNumOutput.innerText = `${moonCount}`;
                }
            }
            //console.log(data);

            function kilometerMile(km) {
                const milesPerKm = 0.62137119;
                return (km * milesPerKm).toLocaleString();
            }

            function distanceAround(km) {
                const milesPerKm = 0.62137119;
                const diameter = km * 2;
                const circumference = Math.PI * diameter;
                return (circumference * milesPerKm).toLocaleString();
            }

            function kelvinFahrenheit(deg) {
                return ((deg * 9 / 5) - 459.67).toLocaleString();
            }
        })
})();


// Planet info
const planets = document.querySelectorAll('.planetInfo-planets div');

for (let planet of planets) {
    planet.addEventListener('click', () => {
        const planetSelection = planet.querySelector('span').innerText.toLocaleLowerCase();
        const planetDisplay = document.querySelectorAll('.planetDisplay .display');

        for (let j = 0; j < planetDisplay.length; j++) {
            if (planetDisplay[j].classList.contains(`${planetSelection}`)) {
                planetDisplay[j].classList.remove('hide');
            } else {
                planetDisplay[j].classList.add('hide');
            }
        }
    });
}

// Solar System API gravity weight
const api = 'https://api.le-systeme-solaire.net/rest/bodies/';

const planetNames = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
const sunGravity = 274;
const gravity = [sunGravity];
const planetWeightsLimit = document.querySelectorAll('.object-weight-info .apiGravity');
const planetWeightsAll = document.querySelectorAll('.object-weight-info div');

/*
mercury = 240;
venus = 244;
earth = 243;
moon = 0;
mars = 239;
jupiter = 238;
saturn = 241;
uranus = 199;
neptune = 219;
pluto = 208;
*/
const planetNums = [240, 244, 243, 0, 239, 238, 241, 199, 219, 208];

fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {


        for (let i = 0; i < planetWeightsLimit.length; i++) {

            // Get data and display //
            //Gravity on object
            const gravityNum = data.bodies[planetNums[i]].gravity;
            gravity.push(gravityNum);
        }
    });

const weightInput = document.getElementById('weight');

weightInput.addEventListener('input', () => {
    let weightInputValue = weightInput.value;
    const gravityArry = gravity;

    if (weightInputValue === "" || weightInputValue.length > 3) {
        for (let i = 0; i < planetWeightsAll.length; i++) {
            const weightOutput = document.querySelector(`.object-weight-info .${planetNames[i]}-weight`);

            weightOutput.innerText = `N/A`;
        }
    } else {
        for (let i = 0; i < planetWeightsAll.length; i++) {
            const weightOutput = document.querySelector(`.object-weight-info .${planetNames[i]}-weight`);

            const pounds = gravityPound(gravityArry[i], weightInputValue);
            weightOutput.innerText = `${pounds} lbs`;
        }
    }
});

function gravityPound(g, wgt) {
    const earthGravity = 9.8;
    return ((g / earthGravity) * wgt).toLocaleString();
};

// Footer copyright

const copyright = document.querySelector('.footer-copyright');

const year = new Date().getFullYear();
copyright.innerHTML = `&copy; ${year} | Space Learning - All Rights Reserved`;