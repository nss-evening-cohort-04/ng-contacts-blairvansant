"use strict";

app.factory("contactFactory", function($q, $http, FIREBASE_CONFIG){
	var getContactFB = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(response){
				let contacts = [];
				Object.keys(response).forEach(function(key){	
					response[key].id = key;
					contacts.push(response[key]);
				});
				resolve(contacts);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};
		 var postContacts = function(newContact){
		 	return $q((resolve,reject)=>{
		 		$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify({
		 			firstName:newContact.firstName,
		 			lastName:newContact.lastName,
		 			email:newContact.email,
		 			telNumber:newContact.telNumber
		 		})
		 		) 
        .success(function(showResponse){
        	resolve(showResponse);
        })     
        .error(function(showError){
        	reject(showError);
        });
		 	});
		 };
		 return{getContactFB:getContactFB, postContacts}
});




