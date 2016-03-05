//exports.cron = function(callback, task){

var fs = require('fs'); path = require('path');
  var path = 'C:';
path = require('path');

fs.readdir(path, function (err, files) {
  longueurdir=files.length
  console.log(longueurdir)
 // console.log(files[5]);read(files,path,query,longueurdir)
  console.log(files)
})





//}