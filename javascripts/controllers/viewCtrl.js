"use strict";

app.controller("ContactViewCtrl", function($scope, contactFactory, $routeParams){
	$scope.selectedContact = {};
	let contactId = $routeParams.id;
	console.log("$routeParams", $routeParams);

	contactFactory.getSingleContact(contactId).then(function(oneContact){
		oneContact.id = contactId;
				console.log("ContactViewCtrl one contact", oneContact);

		$scope.selectedContact = oneContact;
	});
});



