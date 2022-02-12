function checkPassword(str)
{
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

function checkForm(form)
{
//   if(form.username.value == "") {
//     alert("Error: Username cannot be blank!");
//     form.username.focus();
//     return false;
//   }
//   re = /^\w+$/;
//   if(!re.test(form.username.value)) {
//     alert("Error: Username must contain only letters, numbers and underscores!");
//     form.username.focus();
//     return false;
//   }
  if(form.password.value != "" && form.confirmpassword.value == form.confirmpassword.value) {
    if(!checkPassword(form.password.value)) {
      alert("The password you have entered is not valid!");
      form.password.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form.pwd1.focus();
    return false;
  }
  return true;
}