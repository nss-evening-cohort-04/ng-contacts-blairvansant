"use strict";

app.run( (FIREBASE_CONFIG)=>{
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when('/contacts/list', {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl"
		})
		.when('/contacts/add', {
			templateUrl: "partials/contact-view.html",
			controller: "ContactCtrl"
		})
		.when('/contacts/editView/:id', {
			templateUrl: "partials/contact-edit.html",
			controller: "ContactViewCtrl"
		})
		.when('/contacts/edit/:id', {
			templateUrl: "partials/contact-view.html",
			controller: "ContactEditCtrl"
		})
		.otherwise('/contacts/list');
});