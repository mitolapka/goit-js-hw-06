const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit)
function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('Please fill in all fields');
        return;
    }
    const data = { 
        Email: email.value,
        Password: password.value
    };
    
    console.log(data);
    form.reset();
}