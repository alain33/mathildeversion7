var exec = require('child_process').exec;
var Request = require('Request').exec;

// le nom du pc
var os = require('os')
a=os.hostname()


exports.init = function(SARAH) {
//SARAH.speak('bonjour, '+a+' ,skaille nète, est maintenant activé, et prends le controle de Sarah et de internette, plus vous lui parlé, et plus il apprend');

////mise en memoire du nom des plug
fs = require('fs');
  xml2js = require('xml2js') ;   parser = new xml2js.Parser({trim: true});
  path = require('path');
  nomplugin="" ;   nombreplugin=0

//le nom des plugins
  config=SARAH.ConfigManager.getConfig();

data1='{"nompluguine":[]}'
  file=Object.keys(config.modules).forEach(function(plugin) {

nombreplugin=nombreplugin+1 ; nomplugin=nomplugin+", "+plugin

//dans un json nom pluguine
 objet = JSON.parse(data1);   jsonStr = JSON.stringify(objet); // transforme l'objet en texte
  jsonStr1 = JSON.stringify(plugin)// la valeur de l'item.

try {
jsonStr1=jsonStr1.replace(/"/g,'');//on met au bon format
//console.log("  le nom des plug         "+jsonStr1+" nombre "+nombreplugin)
     }
catch (Exception) {console.log("   erreur       ");}



//on pousse en memoire
objet.nompluguine.push(jsonStr1); new_jsonStr = JSON.stringify(objet);
data1=new_jsonStr


                                                              });


for ( j = 0; j<nombreplugin; j++){



console.log(objet.nompluguine[j])
///mise en fichier des items

data2='{"nompluguine":[]}'


var fs = require('fs');
var parse = require('xml-parser');
pathname = './plugins/'+objet.nompluguine[j]+'/'+objet.nompluguine[j]+'.xml'
var xml = fs.readFileSync(pathname,'utf8').toString('utf8');
//console.log(xml)
var obj = parse(xml);
var DOMParser = require('xmldom').DOMParser;
var doc = new DOMParser().parseFromString(xml,'utf8');

txt="a"
for ( i = 0; txt!=="" ; i++){

try{txt = doc.getElementsByTagName("item")[i].childNodes[0].nodeValue;


 objet1 = JSON.parse(data2);   jsonStr1 = JSON.stringify(objet1); // transforme l'objet en texte
  jsonStr1 = JSON.stringify(txt)// la valeur de l'item.
jsonStr1=jsonStr1.replace(/"/g,'');

objet1.nompluguine.push(jsonStr1); new_jsonStr1 = JSON.stringify(objet1);
data2=new_jsonStr1
}//fin try

catch (Exception) {//console.log('fin item');
txt="";}
}//fin for i


pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';


fs.writeFile(pathname, data2, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
   if (err) throw err;})
}


pathname='./plugins/demarrage/item/plugins.json'
    fs.writeFile(pathname, data1, function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
   if (err) throw err;})

														  
														};

                        