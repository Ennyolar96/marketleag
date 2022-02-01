const form = document.getElementById('form');
const earning = document.getElementById('earning');
const legal = document.getElementById('legal');
const Industry = document.getElementById('Industry');
const help_you = document.getElementById('help_you');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const earningValue = earning.value.trim();
    const help_youValue = help_you.value.trim();
    const legalValue = legal.value.trim();
    const IndustryValue = Industry.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if(earningValue === '') {
        setError(earning, 'required');
    } else {
        setSuccess(earning);
    }


    if(legalValue === '') {
        setError(legal, 'required');
    } else {
        setSuccess(legal);
    }

    if(help_youValue === '') {
        setError(help_you, 'required');
    } else {
        setSuccess(help_you);
    }

    if(IndustryValue === '') {
        setError(Industry, 'required');
    } else {
        setSuccess(Industry);
    }

    const showMenu = (toggleId, navbarId,bodyId) =>{
        const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)
    
        if(toggle && navbar){
            toggle.addEventListener('click', ()=>{
                // APARECER MENU
                navbar.classList.toggle('show')
                // ROTATE TOGGLE
                toggle.classList.toggle('rotate')
                // PADDING BODY
                bodypadding.classList.toggle('expander')
            })
        }
    }
    showMenu('nav-toggle','navbar','body')
    
    // LINK ACTIVE COLOR
    const linkColor = document.querySelectorAll('.nav__link');   
    function colorLink(){
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
    
    linkColor.forEach(l => l.addEventListener('click', colorLink));
    // if(emailValue === '') {
    //     setError(email, 'Email is required');
    // } else if (!isValidEmail(emailValue)) {
    //     setError(email, 'Provide a valid email address');
    // } else {
    //     setSuccess(email);
    // }

    // if(passwordValue === '') {
    //     setError(password, 'Password is required');
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    // } else {
    //     setSuccess(password);
    // }

    // if(password2Value === '') {
    //     setError(password2, 'Please confirm your password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Passwords doesn't match");
    // } else {
    //     setSuccess(password2);
    // }

};