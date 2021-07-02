//DOM elements
let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let locations = document.getElementsByName('location');
let acceptCgu = document.getElementById('checkbox1');
let newsletter = document.getElementById('checkbox2');

//live listenner 
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
quantity.addEventListener('input', function(){
    let entry = parseInt(this.value)
    if(typeof(entry) === "number"){
        quantity.parentElement.removeAttribute("data-error");
        quantity.parentElement.removeAttribute("data-error-visible");
    }else{
        quantity.parentElement.setAttribute("data-error", "Merci d'entrer un chiffre");
        quantity.parentElement.setAttribute("data-error-visible", true);
    }
})

//location
locations.forEach(location => {
    let valid = false;
    location.parentElement.setAttribute("data-error", "Merci de selectionné une ville");
    location.parentElement.setAttribute("data-error-visible", true);
    location.addEventListener('input', function() {
        console.log(this.value);
        if(this.value != null){
            valid = true;
            location.parentElement.removeAttribute("data-error");
            location.parentElement.removeAttribute("data-error-visible");
            console.log(valid);
        }else{
            valid = false;
            console.log(valid);
        }
    })
});

//Submit btn function
function validate() {
    console.log('test');
}