$(document).ready(function(){
    $("#add").click(function(e){
     var url = $(e.target).text();
        console.log("aaaaaaaaaaaa");

     var clientID = url.substr(url.indexOf("=")).slice(0);
     while(clientID.charAt(0) === '=') {
        clientID = clientID.substr(1);
         console.log("aaaa");
     }
    });

});









