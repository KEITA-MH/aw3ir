const Email = document.getElementById('mail');
const Nom = document.getElementById('nom');
const Prenom = document.getElementById('prenom');
const Adresse = document.getElementById('adresse');
const Datenaissance = document.getElementById('date');
const Mail = document.getElementById('mail');
const divSuccess = document.getElementById('resultat');
const divError = document.getElementById('error');
var errors = [];

function validation(){
	
	const emailValue = Email.value;
	const nomValue = Nom.value;
	const prenomValue = Prenom.value;
	const adresseValue  = Adresse.value;
	const dateValue = Datenaissance.value;
	const mailValue = Mail.value.trim();
	verifyEmptyAndLength(nomValue, Nom.name);
	verifyEmptyAndLength(prenomValue, Prenom.name);
	verifyAdesse(adresseValue);
	verifyDate(dateValue);
	bool = verifyMail(mailValue);

	if (bool){
		errors.push("Invalide e-mail, veuillez saisir un bon e-mail");
	}  

	if(errors.length === 0){
		divError.classList.remove("active")
		divSuccess.classList.add("active");
		divSuccess.innerHTML = "Bienvenue " + nomValue;
		errors= [];	
		document.getElementById('form').reset();
	}else{
		divSuccess.classList.remove("active")
		divError.classList.add("active");
		let content = "<ul>";
		errors.forEach(function(item){
			content+= "<li>"+item+"</li>";
		})
		content = content+ "</ul>";
		divError.innerHTML = content;
		errors= [];
	}
	
}


function verifyEmptyAndLength(input, tag){
	if (input === '') {
		errors.push("La saisie du "+tag+" est obligatoire");
	}else if (input.length < 5 || input.length >  20){
		errors.push(tag+" doit être compris entre [5-20] characteères");
	}
}
function verifyDate(input){
	if (input === '') 
		errors.push("Date de naissance est obligatoire");
}
function verifyAdesse(input){
	if (input === '') {
		errors.push("La saisie de l'adresse est obligatoire");
	}else if (input.length < 5 || input.length >  50){
		errors.push("L'adresse doit être comprise entre [5-30] characteères");
	}
}

function verifyMail(input){
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (input === '') {
		errors.push("La saisie de l'e-mail est obligatoire");
	}else if (input.length < 5 || input.length >  30){
		errors.push("Adr. mail doit être comprise entre [5-30] characteères");
	}else{
		return re.test(String(input).toLowerCase());
	}

}