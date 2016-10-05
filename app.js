'use strict';



function mainController($timeout) {
	const ctrl = this;
	ctrl.userChoice = '';
	ctrl.formClicked = false;
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

    ctrl.selectedUser = selectedUser;
    ctrl.addPerson = addPerson;
    ctrl.showForm = showForm;

}


angular.module('app', [])
	.controller('MainCtrl', mainController);