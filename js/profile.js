function open_firstYes(firstYes){
 var firstSpecify = document.getElementById('firstSpecify')
 firstSpecify.disabled = firstYes.checked ? false : true
 if(!firstSpecify.disabled){
   firstSpecify.focus()
 }
}

function open_secondYes(secondYes){
 var secondSpecify = document.getElementById('secondSpecify')
 secondSpecify.disabled = secondYes.checked ? false : true
 if(!secondSpecify.disabled){
  secondSpecify.focus()
 }
}

function open_thirdYes(thirdYes){
 var thirdSpecify = document.getElementById('thirdSpecify')
 thirdSpecify.disabled = thirdYes.checked ? false : true
 if(!thirdSpecify.disabled){
  thirdSpecify.focus()
 }
}

function open_forthYes(forthYes){
 var forthSpecify = document.getElementById('forthSpecify')
 forthSpecify.disabled = forthYes.checked ? false : true
 if(!forthSpecify.disabled){
  forthSpecify.focus()
 }
}

// personal profile image

$("#profileImage").click(function(e) {
    $("#imageUpload").click();
});

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}

$("#imageUpload").change(function(){
    fasterPreview( this );
});


