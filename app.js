'use strict';



function mainController() {
	const ctrl = this;
	ctrl.userChoice = '';
	ctrl.people = [
        {
            firstName: "Jay",
            lastName: "Willey",
            phone: "859-111-1111",
            email: "jay@jay.com",
        },
        {
            firstName: "Kelly",
            lastName: "Wright", 
            phone: "859-222-2222",
            email: "kelly@kelly.com",
        }
    ];

    ctrl.newPerson = {
    	firstName: '',
    	lastName: '',
    	phone: '',
    	email: '',
    };

    // function getPerson() {
    // 	return R.range(1, )
    // }

    function addPerson() {
        ctrl.people.push(ctrl.newPerson);
        ctrl.newPerson = {};
    }

    function ctrl.selectedUser(person) {
    	ctrl.userChoice = person;
    	console.log(test)
    }

    // ctrl.selectedUser = selectedUser;
}


angular.module('app', [])
	.controller('MainCtrl', mainController);