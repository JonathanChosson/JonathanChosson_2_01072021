//DOM elements
let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let locations = document.getElementsByName('location');
let acceptCgu = document.getElementById('checkbox1');
let newsletter = document.getElementById('checkbox2');
let btnSubmit = document.getElementsByClassName('btn-submit');
let modalBody = document.getElementsByClassName('modal-body');

//live listener 
// false by default
first.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
first.parentElement.setAttribute("data-error-visible", true);
last.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
last.parentElement.setAttribute("data-error-visible", true);
email.parentElement.setAttribute("data-error", "Merci d'entrer une adresse mail valide");
email.parentElement.setAttribute("data-error-visible", true);
quantity.parentElement.setAttribute("data-error", "Merci d'entrer un chiffre");
quantity.parentElement.setAttribute("data-error-visible", true);
acceptCgu.parentElement.setAttribute("data-error", "Merci de lire et d'accepter les CGU");
acceptCgu.parentElement.setAttribute("data-error-visible", true);

//first name
first.addEventListener('input', function() {
    if(this.value.length > 1){
        first.parentElement.removeAttribute("data-error");
        first.parentElement.removeAttribute("data-error-visible");
    }else{
        first.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
        first.parentElement.setAttribute("data-error-visible", true);
    }
});

//last name
last.addEventListener('input', function() {
    if(this.value.length > 1){
        last.parentElement.removeAttribute("data-error");
        last.parentElement.removeAttribute("data-error-visible");
    }else{
        last.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
        last.parentElement.setAttribute("data-error-visible", true);
    }
});

//email
email.addEventListener('input', function() {
    //Regex mail
    const emailReg = new RegExp(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/);
    const valid = emailReg.test(this.value);
    if(valid){
        email.parentElement.removeAttribute("data-error");
        email.parentElement.removeAttribute("data-error-visible");
    }else{
        email.parentElement.setAttribute("data-error", "Merci d'entrer une adresse mail valide");
        email.parentElement.setAttribute("data-error-visible", true);
    }
});

//quantity
quantity.addEventListener('change', function(){
    let entry = parseInt(this.value);
    if(entry > 0){
        quantity.parentElement.removeAttribute("data-error");
        quantity.parentElement.removeAttribute("data-error-visible");
    }else{
        quantity.parentElement.setAttribute("data-error", "Merci d'entrer un chiffre");
        quantity.parentElement.setAttribute("data-error-visible", true);
    }
})

//location
let selectedLocation = [];
locations.forEach(location => {
    location.nextElementSibling.firstElementChild.setAttribute("data-error-visible", true);
    location.parentElement.setAttribute("data-error", "Merci de selectionné une ville");
    location.parentElement.setAttribute("data-error-visible", true);
    location.addEventListener('change', function() {
        if(this.checked){
            location.parentElement.removeAttribute("data-error");
            location.parentElement.removeAttribute("data-error-visible");
            location.nextElementSibling.firstElementChild.removeAttribute("data-error-visible");
            selectedLocation.push(this.value)
        }else{
            location.nextElementSibling.firstElementChild.setAttribute("data-error-visible", true);
            selectedLocation.splice(selectedLocation.indexOf(this.value), 1);
            verifChecked(location);
        }
    })
});

//jsdoc pour commenté les fonction entrée sortie généré une doc auto. 
//verifie que [location] contiens au moins une entrée
function verifChecked(location) {
    if(selectedLocation.length < 1){
        location.parentElement.setAttribute("data-error", "Merci de selectionné une ville");
        location.parentElement.setAttribute("data-error-visible", true);
    }
};

//CGU 
acceptCgu.addEventListener('change', function(){
    if(this.checked){
        acceptCgu.parentElement.removeAttribute("data-error");
        acceptCgu.parentElement.removeAttribute("data-error-visible");
    }else{
        acceptCgu.parentElement.setAttribute("data-error", "Merci de selectionné une ville");
        acceptCgu.parentElement.setAttribute("data-error-visible", true);
    }
})

//Submit btn function
// create array of input have to be check
let arrayInput = [first.parentElement, last.parentElement, email.parentElement, quantity.parentElement, acceptCgu.parentElement];

//listen on click button Submit
btnSubmit[0].addEventListener('click', function(event){
    event.preventDefault();
    let formStatus = 0;
    if(selectedLocation.length > 0){
        formStatus ++;
    }else{
        locations[0].parentElement.classList.add('shake-horizontal')
    }
    //check completion of input
    for(input of arrayInput){
        if(input.hasAttribute('data-error')){
            input.classList.add('shake-horizontal');
            setTimeout(function(){removeClass();}, 1000)
        }else{
            formStatus ++;
        }

        if(formStatus === 6){
            console.log('Champs complet');
            console.log(modalBody[0]);
            modalBody[0].innerHTML = `
            <p class="modalText">Merci de nous avoir transmis votre demande d'enregistrement</p>
            <form
                name="reserve"
                action="index.html"
                method="get"
                onsubmit="return closeModal();"
            >
            <input
                class="btn-submit"
                type="submit"
                class="button"
                value="Fermer"
            />
            </form>
            `;
        }
    }
    function removeClass (){
        locations[0].parentElement.classList.remove('shake-horizontal')
        for(input of arrayInput){
        input.classList.remove('shake-horizontal');
    }
    }
})