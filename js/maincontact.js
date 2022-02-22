 const form = document.getElementById("form");

    form.addEventListener('submit', e => {
        e.preventDefault();

        validateInputs();
    });

    const validateInputs = () => {
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
        // window.location.href = "/pages/about.html" 
        // api here
        }
    }
