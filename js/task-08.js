const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit)
function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }
    const data = { 
        mail: email.value,
        pass: password.value
    };
    
    console.log(data);
    form.reset();
}