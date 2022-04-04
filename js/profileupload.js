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

// for the company logo upload

$("#companyImage").click(function(e) {
    $("#logoUpload").click();
});

function fastPreview( uploading ) {
    if ( uploading.files && uploading.files[0] ){
          $('#companyImage').attr('src', 
             window.URL.createObjectURL(uploading.files[0]) );
    }
}

$("#logoUpload").change(function(){
    fastPreview( this );
});

