var locale = {
	"language" : {
		"en-US": "LANGUAGE",
		"it-IT": "LINGUA"
	},
	"hello" : {
		"en-US": "Hi Man!",
		"it-IT": "Ciao Bello!",
		"fr-FR": "Bonjour Monsieur!"
	},
	"environment" : {
		"en-US": "Environment",
		"it-IT": "Ambiente"
	},
	"objects" : {
		"en-US": "Objects",
		"it-IT": "Oggetti"
	},
	"reactions" : {
		"en-US": "Reactions",
		"it-IT": "Reazioni"
	},
	"info" : {
		"en-US": "Info",
		"it-IT": "Informazioni"
	},
	"settings" : {
		"en-US": "Settings",
		"it-IT": "Impostazioni"
	},
	"family" : {
		"en-US": "Users",
		"it-IT": "Utenti"
	},
	"messages" : {
		"en-US": "Messages",
		"it-IT": "Messaggi"
	},
	"alerts" : {
		"en-US": "Alerts",
		"it-IT": "Avvisi"
	},
	"cr" : {
		"en-US": "CREDENTIALS REQUIRED",
		"it-IT": "CREDENZIALI RICHIESTE"
	}
	
}

PolymerExpressions.prototype.translate = function(key){

	if(key){
		var key = key.toLowerCase();

		if(!localStorage["locale"]){

			var defaultLanguage = navigator.language;

			if(!defaultLanguage){
				defaultLanguage = navigator.browserLanguage;
			}

			switch(defaultLanguage){
				case undefined : 
				case "en-us":
				case "en":{
					localStorage["locale"] = JSON.stringify("en-US");
					break;
				}
				case "it-it":
				case "it":{
					localStorage["locale"] = JSON.stringify("it-IT");
					break;
				}
				default: {
					localStorage["locale"] = JSON.stringify(defaultLanguage);
				}
			}

		}

		var currentLocale = JSON.parse(localStorage["locale"]);

		console.log(currentLocale);

		var translation = "";
		if( (key in locale) && (currentLocale in locale[key]) ){
			return locale[key][currentLocale];
		} else if( (key in locale) && ("en-US" in locale[key]) ) {
			return locale[key]["en-US"];
		} else {
			return key;
		}	
	} else {
		return "";
	}
	

}