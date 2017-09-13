/**
 * Created by huangling on 20/05/2017.
 */
var child_process = require('child_process');
var fs = require('fs');

var command =  'npm start';


var startProcess = function() {
     child_process.exec( command , function(err, stdout , stderr) {
        if (stderr) {
            console.log(stderr);
            startProcess();
        }
    });
};

startProcess();