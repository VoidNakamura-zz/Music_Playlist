$(document).ready(function(){
    $("#url").hide();
    $("#add").click(function(){
        $("#url").show();
     var url = $("#url").val();
       console.log(url);

     var clientID = url.substr(url.indexOf("=")).slice(0);
     while(clientID.charAt(0) === '=') {
        clientID = clientID.substr(1);
         console.log(clientID);
     }
    });

});









