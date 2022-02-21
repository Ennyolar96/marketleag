const form = document.getElementById("regForm");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phoneNumber = document.getElementById('phone_num');
const email = document.getElementById('email');
const org = document.getElementById('Organization');
const country = document.getElementById('Country');
const offices = document.getElementById("offices-address");
const job = document.getElementById("jobTitle");



regForm.addEventListener('submit', e => {
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
    // window.location.href = "./login.html"
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const lnameValue = lname.value.trim();
    const phoneValue = phoneNumber.value.trim();
    const orgValue = org.value.trim();
    const countryValue = country.value.trim();
    const officesValue = offices.value.trim();
    const jobValue = job.value.trim();



    if(fnameValue === '') {
        setError(fname, 'This area is required');
    } else {
        setSuccess(fname);
    }

    if(emailValue === '') {
        setError(email, 'Invalid Email Address');
    } else {
        setSuccess(email);
    }

    if(lnameValue === '') {
        setError(lname, 'This area is required');
    } else {
        setSuccess(lname);
    }

    if(phoneValue === '' || phoneValue === NaN || phoneValue.length < 11) {
        setError(phoneNumber, 'Invalid Phone Number');
    } else {
        setSuccess(phoneNumber);
    }

    if(orgValue === '') {
        setError(org, 'Provide Organization Name');
    } else {
        setSuccess(org);
    }

    if(countryValue == 'Country') {
        setError(country, 'Select A Country');
    } else {
        setSuccess(country);
    }

    if(officesValue === '') {
        setError(offices, 'Kindly provide your Office Address');
    } else {
        setSuccess(offices);
    }

    if(jobValue === '') {
        setError(job, 'Kindly provide your Position');
    } else {
        setSuccess(job);
    }

        // Checkbox validation
    let checkbox = document.getElementsByName("UserType[]"),
    i,
    checked;
    for (i = 0; i < checkbox.length; i += 1) {
    checked = (checkbox[i].checked||checked===true)?true:false;
    }

    if (checked == false) {
        document.getElementById("chk_option_error").style.visibility = "visible";
    //   e.preventDefault();
    return false;
    } else {
        document.getElementById("chk_option_error").style.visibility = "hidden";
    return true;
    }
}
