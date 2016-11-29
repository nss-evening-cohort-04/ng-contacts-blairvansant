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
		 		}))
        .success(function(showResponse){
        	resolve(showResponse);
        })     
        .error(function(showError){
        	reject(showError);
        });
		 	});
		 };


		 var deleteContactFB = function(contactId){
			return $q((resolve, reject)=>{
				$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
				.success(function(deleteResponse){
				resolve(deleteResponse);
				})
					.error(function(deleteError){
					reject(deleteError);
					});
				});
			};

			var getSingleContact = function(contactId){
				return $q((resolve, reject)=>{
					$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
					.success(function(getSingleResponse){
						resolve(getSingleResponse);
					})
					.error(function(singleError){
						reject(singleError);
					});
				});
			};

			var editContact = function(editContact){
				return $q((resolve, reject)=>{
					$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`, JSON.stringify({
						firstName: editContact.firstName,
						lastName: editContact.lastName,
						email: editContact.email,
						telNumber: editContact.telNumber
						
					})
					
					).success(function(editResponse){
						resolve(editResponse);
					
					}).error(function(editError){
						reject(editError);
					});
				});
			};


		 return{getContactFB:getContactFB, postContacts:postContacts, deleteContactFB:deleteContactFB,
		 	getSingleContact:getSingleContact, editContact:editContact
		 };
});




