var showUser = document.getElementById("showUser");
showUser.addEventListener('click', function(){
   var showprofile = document.querySelector(".profiledetails")
  if( showprofile.style.display === "none"){
    showprofile.style.display = "block"
  }
  else{
    showprofile.style.display = "none"
  }
 
})