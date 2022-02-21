const form = document.getElementById("regForm");
const industry = document.getElementById('industry');
const companySize = document.getElementById('companySize');
const Specify = document.getElementById('Specify');
const service = document.getElementById('service');
const operating = document.getElementById('operating');
const organization = document.getElementById('organization');


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

const validateInputs = () => {
    const industryValue = industry.value.trim();
    const companySizeValue = companySize.value.trim();
    const SpecifyValue = Specify.value.trim();
    const serviceValue = service.value.trim();
    const operatingValue = operating.value.trim();
    const organizationValue = organization.value.trim();


    if(industryValue === '') {
        setError(industry, 'This area is required');
    } else {
        setSuccess(industry);
    }

    if(SpecifyValue === '') {
        setError(Specify, 'required area');
    } else {
        setSuccess(Specify);
    }

    if(serviceValue === '') {
        setError(service, 'This area is required');
    } else {
        setSuccess(service);
    }

    if(companySizeValue === '' || companySizeValue === NaN) {
        setError(companySize, 'Numbers only Please');
    } else {
        setSuccess(companySize);
    }

    if(operatingValue === '') {
        setError(operating, 'required area');
    } else {
        setSuccess(operating);
    }
    if(organizationValue === '') {
        setError(organization, 'required area');
    } else {
        setSuccess(organization);
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