var ipaddress = {
    createEvent: function(aString, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'IPaddress', // mapped to our native Java class called "IPaddress"
            'GetIPaddress', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "title": aString
            }]
        );  
    }
}

module.exports = ipaddress;
