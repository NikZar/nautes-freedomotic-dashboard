i18n.init({ lng: "it-IT", fallbackLng: 'en', debug: true}, function(){

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

	PolymerExpressions.prototype.translate = function(key, extra){

		if(key){

			var currentLocale = JSON.parse(localStorage["locale"]);

			var lower_key = key.toLowerCase();
			//console.log(i18n.t("app.name") + ": " + key);
			var translation;
			if (!!extra){
				translation = i18n.t(key, {"var": extra});
			} else {
				translation = i18n.t(lower_key);
			}
			if (!!translation) {
				return translation;
			} else {
				return " _|" + lower_key + "|_ ";
			}
		} else {
			return "[O_O]";
		}
	};

	PolymerExpressions.prototype.upperCase = function(text){
	 return text.toUpperCase();
	};

});