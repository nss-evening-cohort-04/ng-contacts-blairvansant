"use strict";

app.controller("contactCtrl",
	function($scope, contactFactory){
		$scope.showContactView = true;
		$scope.newContact = {};
		$scope.contacts = [];

		let getContacts = function(){
			contactFactory.getContactFB().then(function(contactsFB){
				console.log('contacts from FB', contactsFB);
				$scope.contacts = contactsFB;		
			});
		};
		getContacts();

		$scope.allContactView = function(){
			console.log("all contacts");
			$scope.showContactView = true;
		};
		$scope.addContactView = function(){
			console.log("add contacts");
			$scope.showContactView = false;
		};
		$scope.submitNewContact = function(){
			console.log("submit button");
			contactFactory.showContacts($scope.newContact).then(function(){
				getContacts();
				$scope.newContact= {};
				$scope.showContactView = true;
			});
		};
		$scope.editContacts	= function(){
			console.log('edit button');
		};
	});
