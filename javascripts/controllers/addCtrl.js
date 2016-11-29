"use strict";
app.controller("ContactCtrl",
	function($scope, $location, contactFactory){ 
		$scope.newContact = {};

		$scope.addNewContact = function(){
			console.log(addNewContact);
			contactFactory.postNewContacts($scope.newContact).then(function(contactId){
				$location.url("contacts/list");
				$scope.newContact = {};
			});
		};
});

