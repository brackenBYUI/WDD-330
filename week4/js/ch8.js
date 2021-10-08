const form = document.forms.search;

const input = form.elements.searchInput;

form.action = '/an/other.url'

// input.addEventListener('focus', () => alert('focused'), false);

// input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);

form.addEventListener ('submit', search, false);

// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
// }

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

const form2 = document.forms['hero'];
form2.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form2.heroName.value; // create a name property based on the input field's value

    hero.realName = form2.realName.value;

    hero.powers = [];
    for (let i=0; i < form2.powers.length; i++) {
        if (form2.powers[i].checked) {
            hero.powers.push(form2.powers[i].value);
        }
    }

    hero.powers = [...form2.powers].filter(box => box.checked).map(box => box.value);

    hero.city = form2.city.value;

    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

form2.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

const label = form2.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

