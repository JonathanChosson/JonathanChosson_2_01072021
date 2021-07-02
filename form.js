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
first.addEventListener('input', function check() {
    if(this.value.length > 2){
        first.parentElement.removeAttribute("data-error");
        first.parentElement.removeAttribute("data-error-visible");
    }else{
        first.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
        first.parentElement.setAttribute("data-error-visible", true);
    }
});

last.addEventListener('input', function check() {
    if(this.value.length > 2){
        last.parentElement.removeAttribute("data-error");
        last.parentElement.removeAttribute("data-error-visible");
    }else{
        last.parentElement.setAttribute("data-error", "Il faut au moins deux caractères");
        last.parentElement.setAttribute("data-error-visible", true);
    }
});

email.addEventListener('input', function check() {
    //Regex mail
    const emailReg = new RegExp(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/);
    const valid = emailReg.test(this.value);
    console.log(valid);
    if(valid){
        email.parentElement.removeAttribute("data-error");
        email.parentElement.removeAttribute("data-error-visible");
    }else{
        email.parentElement.setAttribute("data-error", "Merci d'entrer une adresse mail valide");
        email.parentElement.setAttribute("data-error-visible", true);
    }
});

//Submit btn function
function validate() {
    console.log('test');
}