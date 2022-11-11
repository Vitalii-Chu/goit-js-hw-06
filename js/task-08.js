
const formEl= document.querySelector(`.login-form`);


formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements:
        { email, password }
    } = event.currentTarget;




    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    }
    
    const userData = {
        email: email.value,
        password: password.value,

    }
    console.log(userData)
    event.currentTarget.reset()
    return userData;
}

