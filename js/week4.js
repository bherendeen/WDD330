const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
form.addEventListener('submit', validate, false);
form.heroName.addEventListener('change', validateInline, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // create a name property based on the input field's value

    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');

    }
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

// Change on element focus
// input.addEventListener('focus', () => alert('focused'), false);
// Change on element unfocus
// input.addEventListener('blur', () => alert('blurred'), false);
// Change on element change and unfocus - only if there is a value