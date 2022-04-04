// // the files uploading validation

// file_validation = () => {
//     const fi = document.getElementById('uploadedfile');
//     // Check if any file is selected.
//     if (fi.files.length > 0) {
//         for (const i = 0; i <= fi.files.length - 1; i++) {

//             const fsize = fi.files.item(i).size;
//             const file = Math.round((fsize / 1024));
//             // The size of the file.
//             if (file >= 4096) {
//                 alert(
//                   "File too Big, please select a file less than 4mb");
//             } else if (file < 2048) {
//                 alert(
//                   "File too small, please select a file greater than 2mb");
//             } else {
//                 document.getElementById('size').innerHTML = '<b>'
//                 + file + '</b> KB';
//             }
//         }
//     }
// }

$(document).ready(function () {
    $("#FileUpload1").change(function () {
        // Get uploaded file extension
        var extension = $(this).val().split('.').pop().toLowerCase();
        // Create array with the files extensions that we wish to upload
        var validFileExtensions = ['doc', 'docx', 'pdf'];
 //Check file extension in the array.if -1 that means the file extension is not in the list. 
        if ($.inArray(extension, validFileExtensions) == -1) {
            $('#spnDocMsg').text("Sorry!! Upload only doc, docx or pdf file").show();
            // Clear fileuload control selected file
            $(this).replaceWith($(this).val('').clone(true));
            //Disable Submit Button
            $('#btnSubmit').prop('disabled', true);
        }
        else {
            // Check and restrict the file size to 32 KB.
            if ($(this).get(0).files[0].size > (2097152)) {
                $('#spnDocMsg').text("Sorry!! Max allowed file size is 2mb").show();                
             // Clear fileuload control selected file
                $(this).replaceWith($(this).val('').clone(true));
                //Disable Submit Button
                $('#btnSubmit').prop('disabled', true);
            }
            else {
                //Clear and Hide message span
                $('#spnDocMsg').text('').hide();
                //Enable Submit Button
                $('#btnSubmit').prop('disabled', false);
            }
        }
    });
});