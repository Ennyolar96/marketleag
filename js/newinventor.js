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


// validation for new inventor
const form = document.getElementById("form");
const field = document.getElementById("field")
const describe_invention = document.getElementById("describe_invention")
const capability = document.getElementById("capability")
const vision = document.getElementById("vision")
const pressing = document.getElementById("pressing")
const email = document.getElementById("email")

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
    const fieldValue = field.value.trim();
    const emailValue = email.value.trim();
    const describe_inventionValue = describe_invention.value.trim();
    const capabilityValue = capability.value.trim();
    const visionValue = vision.value.trim();
    const pressingValue = pressing.value.trim();
    // validation for new  IP Expert

    // const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if(fieldValue === '') {
        setError(field, 'This area is required');
    } else {
        setSuccess(field);
    }

    if(describe_inventionValue === '') {
        setError(describe_invention, 'This area is required');
    } else {
        setSuccess(describe_invention);
    }

    if(capabilityValue === '') {
        setError(capability, 'This area is required');
    } else {
        setSuccess(capability);
    }

    if(visionValue === '') {
        setError(vision, 'This area is required');
    } else {
        setSuccess(vision);
    }

    if(pressingValue === '') {
        setError(pressing, 'This area is required');
    } else {
        setSuccess(pressing);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // New Ip Expert validation




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