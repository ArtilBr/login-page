const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const textForm = document.getElementById('textForm');
const textEmail = document.getElementById('textEmail');
const textPassword = document.getElementById('textPassword');

form.addEventListener('submit', (e) => {
    if(email.value == '' || password.value == ''){
        textForm.textContent = 'É necessário preencher todos os campos!'
    } else if( validEmail(email.value) === true && validPassword(password.value) === true){
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = ''
        textEmail.textContent = ''
        textPassword.textContent = ''
    }
    
    else{
        console.log("Requisição não atendida.");
    }
    
    e.preventDefault()
})

email.addEventListener("keyup", () => {
    if(validEmail(email.value) !== true){
        textEmail.textContent = 'O e-mail do usuário deve ser válido. Ex: “email@teste.com”'
    } else {
        textEmail.textContent = ''
    }
})

password.addEventListener("keyup", () => {
    if(validPassword(password.value) !== true){
        textPassword.textContent = 'A senha não está no formato desejado.'
    } else {
        textPassword.textContent =''
    }
})

function validEmail(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validPassword(password){
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return passwordPattern.test(password);
}
