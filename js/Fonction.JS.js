
var AlerNom= ['Entrez un nom !','Enter your last name !','Escriba un nombre !','Geben Sie einen Namen !','Inserire un nome !'];
var AlerPrenom= ['Entrez un pr\351nom !','Enter your first name !','Escriba un nombre !','Geben Sie einen Namen !','Inserire un nome !'];
var AlertEmail=['Entrez un email valide','Enter a valid email','Ingrese un correo electrónico válido','Entrez un email valide','Entrez un email valide'];
var AlertDemande=['Entrez une demande','Entrez une demande','Entrez une demande','Entrez une demande','Entrez une demande'];
var AlertAdresse=['Entrez une adresse valide','Entrez une adresse valide','Entrez une adresse valide','Entrez une adresse valide','Entrez une adresse valide'];
var AlertCodePost=['Entrez un code postal valide','Entrez un code postal valide','Entrez un code postal valide','Entrez un code postal valide','Entrez un code postal valide'];
var AlertVille=['Entrez une ville valide','Entrez une ville valide','Entrez une ville valide','Entrez une ville valide','Entrez une ville valide'];
var AlertTel=['Entrez un tel','Enter a phone number','Enter a phone number','Enter a phone number','Enter a phone number'];
var AlertUser=['Entrez un nom d\'utilisateur valide','Enter a valid username','Entrez un nom d\'utilisateur valide','Entrez un nom d\'utilisateur valide'];
var AlertPassword=['Entrez un mot de passe valide','Invalid password','Entrez un mot de passe valide','Entrez un mot de passe valide','Entrez un mot de passe valide'];
var AlertPass=['Entrez un mot de passe','Enter a password','Entrez un mot de passe','Entrez un mot de passe','Entrez un mot de passe'];
var AlertUse=['Entrez un nom d\'utilisateur valide','Enter an username','Enter an username','Enter an username'];
var AlertCountry=['Entrez un pays','Select a country','Enter a country','Enter a country','Enter a country'];
var AlertSociete= ['Entrez une soci\351t\351 !','Enter a company !','Introduzca una empresa !','Geben Sie ein Unternehmen !','Inserisci una società !'];
var AlertOrderSent=['Votre commande \340 bien \351t\351e envoy\351e.','Your order has been sent.','Votre commande \340 bien \351t\351e envoy\351e.','Votre commande \340 bien \351t\351e envoy\351e.','Votre commande \340 bien \351t\351e envoy\351e.'];
var AlerDateEnlevement= ['Entrez une date d\'enlèvement','Feel the delivery date','Escriba un nombre !','Geben Sie einen Namen !','Inserire un nome !'];
var AlertCaptcha= ['Entrez le r\351esultat de 7+2','Enter the result of 7 + 2','Introduzca el resultado de 7 + 2','Enter the result of 7 + 2','Enter the result of 7 + 2'];
var AlertCheck= ['Entrez une date de d\351but','Enter a start date','Introduzca una fecha','Enter a start date','Enter a start date'];
var AlertCheckReturn= ['Entrez une date de fin','Enter a return date','Introduzca una fecha','Enter a return date','Enter a return date'];
var AlertRule= ['Accept the terms and conditions','Accept the terms and conditions','Accept the terms and conditions','Accept the terms and conditions','Accept the terms and conditions'];
var AlerSubject= ['Entrez un sujet','Enter a subject','Enter a subject','Enter a subject','Enter a subject'];
var AlertMessage= ['Entrez un message ','Enter a message','Enter a message','Enter a message','Enter a message'];
var AlertSearch= ['Entrez un mot clé','Enter a keyword','Enter a keyword','Enter a keyword','Enter a keyword'];
var AlerPropertyContactType = ['S\351lectionnez un contrat','Select a Contract','Select a Contract','Select a Contract','Select a Contract'];
var AlerPropertyType = ['S\351lectionnez un type','Select a Type','Select a Type','Select a Type','Select a Type'];
var AlerPropertyLocation = ['S\351lectionnez un lieu','Select a Location','Select a Location','Select a Location','Select a Location'];
var AlerUpload = ['S\351lectionnez une image','Upload a picture','Upload a picture','Upload a picture','Upload a picture'];
var AlerPosition = ['Entrez un titre','Enter a position name','Enter a position name','Enter a position name','Enter a position name'];
var AlertTerms = ['Acceptez les conditions générales','Agree to the Terms & Conditions','Agree to the Terms & Conditions','Agree to the Terms & Conditions','Agree to the Terms & Conditions'];

// La fonction qui affiche/masque élément 
function AffOnOff(elem){
etat=document.getElementById(elem).style.display;
if(etat=="none"){document.getElementById(elem).style.display='block';}
else{document.getElementById(elem).style.display='none';}
}





function test2(){
	alert(document.getElementById('uLog1').value)
return true}

   function CheckDate(d) {
      // Cette fonction vérifie le format JJ/MM/AAAA saisi et la validité de la date.
      // Le séparateur est défini dans la variable separateur
      var amin=1999; // année mini
      var amax=2050; // année maxi
      var separateur="/"; // separateur entre jour/mois/annee
      var j=(d.substring(0,2));
      var m=(d.substring(3,5));
      var a=(d.substring(6));
      var ok=1;
      if ( ((isNaN(j))||(j<1)||(j>31)) && (ok==1) ) {
         alert("Le jour n'est pas correct."); ok=0;
      }
      if ( ((isNaN(m))||(m<1)||(m>12)) && (ok==1) ) {
         alert("Le mois n'est pas correct."); ok=0;
      }
      if ( ((isNaN(a))||(a<amin)||(a>amax)) && (ok==1) ) {
         alert("L'année n'est pas correcte."); ok=0;
      }
      if ( ((d.substring(2,3)!=separateur)||(d.substring(5,6)!=separateur)) && (ok==1) ) {
         alert("Les séparateurs doivent être des "+separateur); ok=0;
      }
      if (ok==1) {
         var d2=new Date(a,m-1,j);
         j2=d2.getDate();
         m2=d2.getMonth()+1;
         a2=d2.getFullYear();
         if (a2<=100) {a2=1900+a2}
         if ( (j!=j2)||(m!=m2)||(a!=a2) ) {
            alert("La date "+d+" n'existe pas !");
            ok=0;
         }
      }
      return ok;
   }

function ValidateFormLog(){
	var login=document.getElementById('uLog1')
	if ((login.value==null)||(login.value=="")){
		alert("Entrez un Login !")
		login.focus()
		return false}
	var pass=document.getElementById('uPass1')
	if ((pass.value==null)||(pass.value=="")){
		alert("Entrez un mot de passe !")
		pass.focus()
		return false}
return true}


function ValidateFormLogModal(){
	var login=document.getElementById('MuLog1')
	if ((login.value==null)||(login.value=="")){
		alert("Entrez un Login !")
		login.focus()
		return false}
	var pass=document.getElementById('MuPass1')
	if ((pass.value==null)||(pass.value=="")){
		alert("Entrez un mot de passe !")
		pass.focus()
		return false}
return true}

function ValidateFormActivite(){
	var dte=document.AddActi.Date1
	if ((dte.value==null)||(dte.value=="")){
		alert("Entrez une date valide !")
		dte.focus()
		return false}
	var titre=document.AddActi.txt_FR
	if ((titre.value==null)||(titre.value=="")){
		alert("Entrez un titre valide !")
		titre.focus()
		return false}
	var Cont=document.AddActi.str_FR
	if ((Cont.value==null)||(Cont.value=="")){
		alert("Entrez du contenu !")
		Cont.focus()
		return false}

return true}

function ValidateFormReaction(){
	var emailID=document.FormReac.email
	if ((emailID.value==null)||(emailID.value=="")){
		alert("Entrez un email valide.")
		emailID.focus()
		return false}
	if (Emailcheck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false}
	var Log=document.FormReac.titre
	if ((Log.value==null)||(Log.value=="")){
		alert("Entrez un titre valide !")
		Log.focus()
		return false}
	var Log=document.FormReac.coment
	if ((Log.value==null)||(Log.value=="")){
		alert("Entrez un message valide !")
		Log.focus()
		return false}
	var Log=document.FormReac.Charte
	if  (Log.checked == false){
		alert("Vous devez valider la charte de moderation !")
		return false}
return true}


function ValidateFormAddImage(){
	var Log=document.FormImage.Img
	if ((Log.value==null)||(Log.value=="")){
		alert("Vous devez choisir une image en premier !")
		return false}
	var emailID=document.FormImage.email
	if ((emailID.value==null)||(emailID.value=="")){
		alert("Entrez un email valide.")
		emailID.focus()
		return false}
	if (Emailcheck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false}
	var Log=document.FormImage.titre
	if ((Log.value==null)||(Log.value=="")){
		alert("Entrez un titre valide !")
		Log.focus()
		return false}
	var Log=document.FormImage.Charte
	if  (Log.checked == false){
		alert("Vous devez valider la charte de moderation !")
		return false}
return true}


function ValidLogAll(NameForm){
	var Log=document.getElementById(NameForm).uLog
	if ((Log.value==null)||(Log.value=="")){
		alert("Entrez un identifiant")
		Log.focus()
		return false}
	var Log=document.getElementById(NameForm).uPass
	if ((Log.value==null)||(Log.value=="")){
		alert("Entrez un mot de passe")
		Log.focus()
		return false}
	return true}


function Emailcheck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alertify.alert("Invalid E-mail ID")
		   return false}
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alertify.alert("Invalid E-mail ID")
		   return false}
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alertify.alert("Invalid E-mail ID")
		    return false}
		 if (str.indexOf(at,(lat+1))!=-1){
		    alertify.alert("Invalid E-mail ID")
		    return false}
		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alertify.alert("Invalid E-mail ID")
		    return false}
		 if (str.indexOf(dot,(lat+2))==-1){
		    alertify.alert("Invalid E-mail ID")
		    return false}		
		 if (str.indexOf(" ")!=-1){
		    alertify.alert("Invalid E-mail ID")
		    return false}
return true					
	}

function Get_Code(titre, obj) {
// Définie la zone à imprimer
var zi = document.getElementById(obj).innerHTML;
document.getElementById('result').style.display='';
document.getElementById('result').value=zi
}

function imprime_zone(titre, obj) {
// Définie la zone à imprimer
var zi = document.getElementById(obj).innerHTML;
// Ouvre une nouvelle fenetre
var f = window.open("", "ZoneImpr", "height=500, width=1024,toolbar=0, menubar=0, scrollbars=1, resizable=1,status=0, location=0, left=10, top=10");
// Définit le Style de la page
f.document.body.style.color = '#000000';
f.document.body.style.backgroundColor = '#FFFFFF';
f.document.body.style.padding = "10px";
// Ajoute les Données
f.document.title = titre;
f.document.body.innerHTML += " " + zi + " ";
//alert(zi);
// Imprime et ferme la fenetre
f.window.print();
f.window.close();
return true;
}


function VisuJPG(ID,Vurl){
    var img = {
        player:     'img',
        content:    Vurl+'CATALOGUE/600_'+ID+'.jpg',
		counterType: 'skip',
		displayCounter: 'true',
		title:    '<div style="text-align:center;">'+ID+'</div>',
    };

    Shadowbox.open([img,]);
}

function LoadIframe(Titre,Vurl,W,H){
    Shadowbox.open({
        player:  'iframe',
		title:   '<div>'+Titre+'</div>',
		content: Vurl,
		width: W,
		height: H

    });
}