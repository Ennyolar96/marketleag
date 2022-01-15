$(function() {
    console.log( "ready!" );
    
    $( "#search-query" ).keyup(function() {
    var q = $( "#search-query" ).val();
    console.log( "Handler for keyup called. " + q );
    $.ajax({
    url: "backend.php",
    data: { q: q },
    }).done(function(response) {
    
    // clear the results div previous results.
    $( "#search-result-container" ).html( "<ul></ul>" );
    response.results.forEach(function(obj) { 
    console.log(obj.title); 
    $( "#search-result-container" ).append( "<li>"+obj.title+"</li>" );
    });
    });
    });
    
   });