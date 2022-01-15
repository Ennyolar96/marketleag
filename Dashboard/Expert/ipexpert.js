const form = document.getElementById('form');
const list_ip = document.getElementById('list_ip');
const services_organization = document.getElementById('services_organization');
const organization = document.getElementById('organization');
const average_number = document.getElementById('average_number');
const patent_number = document.getElementById('patent_number');
const trademark_number = document.getElementById('trademark_number');
const copyright_number = document.getElementById('copyright_number');
const Design_number = document.getElementById('Design_number');
const interested = document.getElementById('interested');
const undertaken = document.getElementById('undertaken');
const if_yes = document.getElementById('if_yes');

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
    const list_ipValue = list_ip.value.trim();
    const services_organizationValue = services_organization.value.trim();
    const organizationValue = organization.value.trim();
    const average_numberValue = average_number.value.trim();
    const patent_numberValue = patent_number.value.trim();
    const trademark_numberValue = trademark_number.value.trim();
    const copyright_numberValue = copyright_number.value.trim();
    const Design_numberValue = Design_number.value.trim();
    const interestedValue = interested.value.trim();
    const undertakenValue = undertaken.value.trim();
    const if_yesValue = if_yes.value.trim();    

    if(list_ipValue === '') {
        setError(list_ip, 'required');
    } else {
        setSuccess(list_ip);
    }

    if(services_organizationValue === '') {
        setError(services_organization, 'required');
    } else {
        setSuccess(services_organization);
    }

    if(organizationValue === '') {
        setError(organization, 'required');
    } else {
        setSuccess(organization);
    }

    if(average_numberValue === '') {
        setError(average_number, 'required');
    } else {
        setSuccess(average_number);
    }
    if(patent_numberValue === '') {
        setError(patent_number, 'required');
    } else {
        setSuccess(patent_number);
    }
    if(trademark_numberValue === '') {
        setError(trademark_number, 'required');
    } else {
        setSuccess(trademark_number);
    }
    if(copyright_numberValue === '') {
        setError(copyright_number, 'required');
    } else {
        setSuccess(copyright_number);
    }
    if(Design_numberValue === '') {
        setError(Design_number, 'required');
    } else {
        setSuccess(Design_number);
    }
    if(interestedValue === '') {
        setError(interested, 'required');
    } else {
        setSuccess(interested);
    }
    if(undertakenValue === '') {
        setError(undertaken, 'required');
    } else {
        setSuccess(undertaken);
    }
    if(if_yesValue === '') {
        setError(if_yes, 'required');
    } else {
        setSuccess(if_yes);
    }
};