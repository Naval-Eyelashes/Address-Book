'use strict';



function mainController($timeout, $http) {
	const ctrl = this;
	ctrl.userChoice = '';
	ctrl.formClicked = false;
	ctrl.contentsJSON = null;

	ctrl.people = [
        {
            firstName: "Jay",
            lastName: "Willey",
            title: "Developer",
            phone: "859-111-1111",
            email: "jay@jay.com",
            address: "348 E. Main Street, Lexington, KY 40507",
        },
        {
            firstName: "Kelly",
            lastName: "Wright", 
            title: "Developer",
            phone: "859-222-2222",
            email: "kelly@kelly.com",
            address: "348 E. Main Street, Lexington, KY 40507",
        }
    ];

    ctrl.newPerson = {
    	firstName: '',
    	lastName: '',
    	title: '',
    	phone: '',
    	email: '',
    	address: '',
    };

    // function getPerson() {
    // 	return R.range(1, )
    // }

    function addPerson() {
        ctrl.people.push(ctrl.newPerson);
        ctrl.newPerson = {};
        ctrl.formClicked = false;
    }

    function selectedUser(person) {
    	ctrl.userChoice = person;
    }

    function showForm() {
    	ctrl.formClicked = true;
    	
    }

    function getJSON() {
    	$http.get("people.json")
		.success(function(data) {
    		ctrl.contentsJSON = data;
		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load json"}];
		})
    }
	

    ctrl.selectedUser = selectedUser;
    ctrl.addPerson = addPerson;
    ctrl.showForm = showForm;
    ctrl.getJSON = getJSON;

    ctrl.getJSON();

}


angular.module('app', [])
	.controller('MainCtrl', mainController);