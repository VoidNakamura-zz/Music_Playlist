var url = "https://www.youtube.com/watch?v=57cOmxB12XI";
var clientID = url.substr(url.indexOf("=")).slice(0);
while(clientID.charAt(0) === '=') {
    clientID = clientID.substr(1);
    console.log(clientID);
}

