nautes-freedomotic-dashboard
============================
This is a simple WIP frontend web application that interacts with a Freedomotic instance via its API.

index.html -> End User functionalities

setup.hmtl -> Administrator functionalities

---
You can access a live preview hosted on heroku: 

http://nautes-dashboard.herokuapp.com/

Since the API instance has a self signed certificate you have to:

* Accept the certificate visiting:

https://fritz.bestmazzo.it:9113

* Try one API from the list and login with these credentials:

User | Pass | 
--- | --- | 
`admin` | `admin` | 

* Now you are good to go:

http://nautes-dashboard.herokuapp.com/

* Open the Settings section and set this API url:

fritz.bestmazzo.it:9113/v3/

* Disable SSL and enable credentials

* Enjoy! :)

---
* If the above API is not working try this one:

http://fritz.bestmazzo.it:9111

* Try one API from the list and login with these credentials:

User | Pass | 
--- | --- | 
`admin` | `admin` | 

* Now you are good to go:

http://nautes-dashboard.herokuapp.com/

* Open the Settings section and set this API url:

fritz.bestmazzo.it:9111/v3/

* Disable SSL and enable credentials

* ubmit and enjoy! :)

=============================

PS: Safari and Chrome cache pages. 
To test the latest deployed version be sure to clear the cache data before doing the above steps.
