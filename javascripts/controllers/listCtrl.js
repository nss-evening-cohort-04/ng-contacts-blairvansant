"use strict";
console.log("ctrl");
app.controller("ContactListCtrl", function($scope, contactFactory, $rootScope){
	$scope.contacts = [];

	var getContacts = function(){
		contactFactory.getContactFB().then(function(fbContacts){
			console.log("firebase contacts", fbContacts);
			$scope.contacts = fbContacts;
		});
	};

	getContacts();

	$scope.deleteContact = function(contactId){
		console.log("you deleted me", contactId);
		contactFactory.deleteContactFB(contactId).then(function(response){
			getContacts();
		});
	};

});



