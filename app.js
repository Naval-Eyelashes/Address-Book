'use strict';



function mainController() {
	const ctrl = this;
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

    function addPerson() {
        ctrl.people.push(ctrl.newPerson);
        ctrl.newPerson = {};
    }

}


angular.module('app', [])
	.controller('MainCtrl', mainController);