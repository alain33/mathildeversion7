var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(data, callback, config, SARAH){
reponse=""; fs = require('fs');exec = require('child_process').exec; 
filePath = './plugins/scribe/memoire/memoire.json'; // Chemin vers bases de mots.json
maConfig = config.modules.scribe; util = require('util');

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;

SCRIBE.activePlugin('cortana');


//////////////////////////////////////////////////
///////////////////////////////////////////////////


//function PluginActif(){ 
  try{
  if ( data.reco.search("Mathilde") >-1){
 
reco=data.reco.replace(new RegExp("\\b" + "Mathilde " + "\\b","gi"),"");
 


query=reco;console.log('phrase recu '+query);
////////////////////////////////  

// je json d'apprentissage
function Mémoire(query){


fs.readFile(filePath, function(err, data1) { 
 objet = JSON.parse(data1); data1Obj = '{ "item" : ' + query + " }";
 longueur = objet.courses.length; jsonStr = JSON.stringify(objet);

if (jsonStr.indexOf(query) > -1  )
  {
console.log('je connais')
    emulate(query);callback();
// on envoie au plug recuperé dans le json pour reponse
}// fin on connais le data.q

//et si on connais pas que faire ?
else {
objet.courses.push({item: query}); new_jsonStr = JSON.stringify(objet);
fs.writeFile(filePath,new_jsonStr , function (err) {  console.log("valeur rajoutée au json cortana " + query); callback({'tts' : " "});
emulate(query);callback();
});               

     }//fin else

})////fin fsread

}//fin fnct memoire


//on connais la phrase qui est dans un plugin si non => skynet
function emulate(query){

//lis le nom des plugins
data5=fs.readFileSync('./plugins/demarrage/item/plugins.json','utf8').toString();
  objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 



/////////////////////////

names = query;nameList = names.split(" ");
console.log('on vérifie en 1 si '+names+' existe')
//console.log('sa serais bien de verifier'+reponse3)
longueur1=(nameList.length)

//on lis la liste des phrases(item)
for (g=0;g<longueur5;g++){
data=fs.readFileSync('./plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json','utf8').toString(); 
objet = JSON.parse(data);jsonStr = JSON.stringify(objet)
longueur = objet.nompluguine.length;


for (i=0 ; i<longueur ; i++){

// on sort tous les mots
nameListe = objet.nompluguine[i].split(" ");
longueur2=(nameListe.length)
//
if (longueur2==longueur1)
{

for (j=0; j<longueur2 ; j++){

//on test 1 par 1
if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
  
  if (j==longueur2-1){emulate1(query);
    
    return false}}


else { j=longueur2}
}//fin for


}//fin if longueur


}//fin for


}//fin for g
console.log('pas de reco')

// on test si un plug s'active










// fin du test

Skynet(query)
}//fin fnct


//on connais la phrase recu==phrase d'un plug
function emulate1(query){


//http://127.0.0.1:8888?emulate=SARAH+quelle+heure+est+il

 url1 = 'http://127.0.0.1:8888/?emulate=Jarvis '+query;
console.log(url1)
   request = require('request');

request({ url : url1 }, function (err, response, body){
ScribeSpeak("Pluguine Activé");callback();return false
});//fin request

return false


}//fin emulate1



// on vérifie les mots cles(creer un fichier prop ou txt)
function Skynet(query) {

 query1=query.replace(new RegExp("\\b" + "de" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "des" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "la" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "les" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "le" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "l'" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "au" + "\\b","gi"),"");
//var query1=query1.replace(new RegExp("\\b" + "à" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "du" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "aux" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "un" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "une" + "\\b","gi"),"");
 query1=query1.replace(new RegExp("\\b" + "d'" + "\\b","gi"),"");
console.log('le query1 '+query1);

if (query.search("traduction") >-1){
  query22 = query.search("traduction");//console.log('query22'+query22);
  query23 = query.length;console.log('query23'+query23);
  for (i = (query22+10); i < query23 ;i++){reponse=reponse+(query[i]);//console.log('reponse'+reponse);
  }

SARAH.run('traduction', { 'chercher' : reponse});callback({'tts' : " "});return false
  }






if (query1.search("synonymes") >-1){
  query22 = query1.search("synonymes");//console.log('query22'+query22);
  query23 = query1.length;console.log('query23'+query23);
  for (i = (query22+9); i < query23 ;i++){reponse=reponse+(query1[i]);//console.log('reponse'+reponse);
  }

SARAH.run('cyrano', { 'chercher' : reponse});callback({'tts' : " "});return false
  }

if (query1.search("synonyme") >-1){
  query22 = query1.search("synonyme");//console.log('query22'+query22);
  query23 = query1.length;console.log('query23'+query23);
  for (i = (query22+8); i < query23 ;i++){reponse=reponse+(query1[i]);//console.log('reponse'+reponse);
  }

SARAH.run('cyrano', { 'chercher' : reponse});callback({'tts' : " "});return false
  }


if (query1.search("vidéos") >-1){
  query22 = query1.search("vidéos");
  query23 = query1.length;
  for (i = (query22+6); i < query23 ;i++){reponse=reponse+(query1[i]);}

   process1 = '%CD%/plugins/cortana/bin/searchyoutube.vbs ' + reponse ; exec(process1);return false
callback({'tts' : " "}); 
}

if (query1.search("vidéo") >-1){
  query22 = query1.search("vidéo");
  query23 = query1.length;
  for (i = (query22+5); i < query23 ;i++){reponse=reponse+(query1[i]);}

   process1 = '%CD%/plugins/cortana/bin/searchyoutube.vbs ' + reponse ; exec(process1);return false
callback({'tts' : " "}); 
}


if (query1.search("images") >-1){ 
  query22 = query1.search("images");
  query23 = query1.length;
  for (i = (query22+6); i < query23 ;i++){reponse=reponse+(query1[i]);}
process1 = '%CD%/plugins/cortana/bin/searchimages.vbs ' + reponse ; exec(process1);return false
//;callback({'tts' : " "})
}

if (query1.search("image") >-1){ 
  query22 = query1.search("image");
  query23 = query1.length;
  for (i = (query22+5); i < query23 ;i++){reponse=reponse+(query1[i]);}
process1 = '%CD%/plugins/cortana/bin/searchimages.vbs ' + reponse ; exec(process1);return false
//;callback({'tts' : " "})
}


if (query1.search("courses") >-1){
  query22 = query1.search("courses");
  query23 = query1.length;
  for (i = (query22+8); i < query23 ;i++){reponse=reponse+(query1[i]);}
//var answer1 = 'Voici le raisultat de votre recherche sur ' + reponse ;
 if (reponse==""){reponse="false"}
 SARAH.run('courses', { 'item' : reponse});callback({'tts' : " "})
  }


if (query1.search("mémo") >-1){
  query22 = query1.search("mémo");
  query23 = query1.length;
  for (i = (query22+4); i < query23 ;i++){reponse=reponse+(query1[i]);}
//var answer1 = 'Voici le raisultat de votre recherche sur ' + reponse ;
 if (reponse==""){reponse="false"}
  console.log('la reponse envoyer à memo'+reponse)
 SARAH.run('memo', { 'phrasememo' : reponse});callback({'tts' : " "})
  }

if(reponse==""){
  //ask(query)
  match3(query)
  reponse="eee"

}


if(reponse=="") {emulate(query)}





}//fin funtion Skynet

function ask(query) {
 ScribeAskMe("Que recherche tu", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
        
        msg = phrase;
      
        Match(query,msg)
      }
      else if (answer==false) {
        ScribeSpeak("Je ne suis pas sûr que tu aies répondu à ma question !", function () {
          ask(query);
        });
      }
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );
}//fin fnct ask





function Match1(query,msg,reponse2){

names = reponse2;nameList = names.split(" ");

longueur1=(nameList.length)


//on lis le fihier phrase

fs.readFile('./plugins/cortana/phrasescles/phrasescles.json', function(err,data){
objet = JSON.parse(data);jsonStr = JSON.stringify(objet);
longueur = objet.phrasescles.length;
for (i=0 ; i<longueur ; i++){

// on sort tous les mots
nameListe = objet.phrasescles[i].split(" ");
longueur2=(nameListe.length)

if (longueur2==longueur1)
{

for (j=0; j<longueur2-1 ; j++){


if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
  console.log(nameListe[j]);
if (j==longueur2-2){
  
  SARAH.run('wiki', { 'phrase' : msg});callback({'tts' : " "})

  return false}
else {

}}


else { j=longueur2;//console.log('rien de rien')









}//fin else
}//fin for


}//fin if longueur


}//fin for
if (reponse2!==""){
// la premiere partis de la phrase
objet.phrasescles.push(reponse2); new_jsonStr = JSON.stringify(objet);
 fs.writeFile('./plugins/cortana/phrasescles/phrasescles.json',new_jsonStr, function (err) {
 console.log("valeur rajoutée au json phrasescles " + reponse2); callback({'tts' : " "});
//la 2eme partie de la phrase
//objet.phrasescles.push(reponse3); new_jsonStr = JSON.stringify(objet);
 //fs.writeFile('./plugins/cortana/phrasescles/phrasescles.json',new_jsonStr, function (err) {
 //console.log("valeur rajoutée au json phrasescles " +reponse3); callback({'tts' : " "});})


///on re test la réponse pour voir si un plug existe



//lis le nom des plugins
data5=fs.readFileSync('./plugins/demarrage/item/plugins.json','utf8').toString();
  objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 

names = reponse3;nameList = names.split(" ");
console.log('on vérifie la présence de :'+reponse3+' dans les plug')
longueur1=(nameList.length)

//on lis la liste des phrases(item)
for (g=0;g<longueur5;g++){
data=fs.readFileSync('./plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json','utf8').toString(); 
objet = JSON.parse(data);jsonStr = JSON.stringify(objet)
longueur = objet.nompluguine.length;

for (i=0 ; i<longueur ; i++){
// on sort tous les mots
nameListe = objet.nompluguine[i].split(" ");
longueur2=(nameListe.length)
//
if (longueur2==longueur1)
{
for (j=0; j<longueur2 ; j++){
//on test 1 par 1
if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
  
  if (j==longueur2-1){emulate1(reponse3);
    
    return false}}
else { j=longueur2}
}//fin for

}//fin if longueur

}//fin for

}//fin for g
console.log('pas de reco de '+msg+' dans les plugs')
//Skynet(query)












/// fin du 2 eme test
 SARAH.run('wiki', { 'phrase' : msg});callback({'tts' : " "})

 })//fin fs write
}//fin if pas
})//fin fs readFile

}//fin fnct Match





function Match(query,msg){
reponse=msg;reponse2='';reponse3=''




match=query.search(new RegExp("\\b" + reponse + "\\b","gi"))

if(match>-1){


  
reponselength=(reponse.length)
querylength=(query.length)



for (i=0;i<match;i++){reponse2=reponse2+query[i]}
for (i=match;i<querylength;i++){reponse3=reponse3+query[i]}



ScribeSpeak(msg, function() {Match1(query,msg,reponse2);callback();

  });
       
}




}//fin fnct Match1




//on connais une phrase clés=> internet si non =>on questionnne
function match3(query){
fs.readFile('./plugins/cortana/phrasescles/phrasescles.json', function(err,data){
objet = JSON.parse(data);jsonStr = JSON.stringify(objet)//;console.log('obbbbbbbbbjet'+objet)
longueur = objet.phrasescles.length;
for (j=0; j<longueur;j++){
if (query.search(new RegExp("\\b" + objet.phrasescles[j] + "\\b","gi"))==0){
longueurphrase=(objet.phrasescles[j]).length
console.log('                 phrase connu : '+objet.phrasescles[j])
console.log ('on part de : '+query.search(new RegExp("\\b" + objet.phrasescles[j] + "\\b","gi"))+longueurphrase)
pointdepart=query.search(new RegExp("\\b" + objet.phrasescles[j] + "\\b","gi"))
console.log('et la longueur : '+query.length)
motsplugin=''
for(dd=longueurphrase; dd<(query.length);dd++){motsplugin=motsplugin+query[dd]}
  console.log('                        la recherche'+motsplugin)




// on retest

//lis le nom des plugins
data5=fs.readFileSync('./plugins/demarrage/item/plugins.json','utf8').toString();
  objet5 = JSON.parse(data5);  longueur5 = objet5.nompluguine.length 

names = motsplugin;nameList = names.split(" ");
console.log('on vérifie la présence de :'+motsplugin+' dans les plug')
longueur1=(nameList.length)

//on lis la liste des phrases(item)
for (g=0;g<longueur5;g++){
data=fs.readFileSync('./plugins/demarrage/item/'+objet5.nompluguine[g] +'item.json','utf8').toString(); 
objet = JSON.parse(data);jsonStr = JSON.stringify(objet)
longueur = objet.nompluguine.length;

for (i=0 ; i<longueur ; i++){
// on sort tous les mots
nameListe = objet.nompluguine[i].split(" ");
longueur2=(nameListe.length)
//
if (longueur2==longueur1)
{
for (j=0; j<longueur2 ; j++){
//on test 1 par 1
if (nameList[j].search(new RegExp("\\b" + nameListe[j] + "\\b","gi"))>-1){
  
  if (j==longueur2-1){emulate1(motsplugin);callback({'tts' : " "})

    
    return false}}
else { j=longueur2}
}//fin for

}//fin if longueur

}//fin for

}//fin for g
console.log('pas de reco de '+msg+' dans les plugs')
//Skynet(query)

/// fin du 2 eme test

//fin retest



var queryinternet= query.substring(longueurphrase,query.length); 

SARAH.run('wiki', { 'phrase' : queryinternet});callback({'tts' : " "})

return false
}//fin if
}//fin for
ask(query)
})//fin fs read

}//fin fnct query3




//c'est la que l'on commence
Mémoire(query);
  }



}//fin try

  catch (Exception) {}









  callback();


  
}//fin export
