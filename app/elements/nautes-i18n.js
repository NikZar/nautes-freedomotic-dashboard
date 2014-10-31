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
	},
	"show actions" : {
		"en-US": "show actions",
		"it-IT": "mostra azioni"
	},
	"hide actions" : {
		"en-US": "hide actions",
		"it-IT": "nascondi azioni"
	},
	"show stats" : {
		"en-US": "show stats",
		"it-IT": "mostra statistiche"
	},
	"hide stats" : {
		"en-US": "hide stats",
		"it-IT": "nascondi statistiche"
	},
	"setupinfo" : {
		"en-US": "Info",
		"it-IT": "Informazioni"
	},
	"setupsettings" : {
		"en-US": "Settings",
		"it-IT": "Impostazioni"
	},
	"setupobjects" : {
		"en-US": "Objects",
		"it-IT": "Oggetti"
	},
	
}

PolymerExpressions.prototype.translate = function(key){

	if(key){
		i18n.init({ lng: "en" });
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

		var lower_key = key.toLowerCase();
console.log(i18n.t("app.name") + ": " + key);
		return i18n.t(key);

	} else {
		return "";
	}
	

}