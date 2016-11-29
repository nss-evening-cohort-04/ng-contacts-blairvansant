"use strict";
(
app.controller("ContactEditCtrl", function($scope, $routeParams, contactFactory, $location){
	$scope.newContact = {};
	let contactId = $routeParams.id;

	contactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
		$scope.newContact = oneContact;	
	});

	$scope.submitNewContact = function(){
		contactFactory.editContact($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/contacts/list");
		});
	};
}));



