(function() {

    'use strict';

    function factoryServices() {
      var services = {};

        var indianTeam = [{
            firstName: "Virat",
            lastName: "Kohli"
        }, {
            firstName: "M",
            lastName: "Vijay"
        }, {
            firstName: "KL",
            lastName: "Rahul"
        }, {
            firstName: "Jayant",
            lastName: "Yadav"
        }, {
            firstName: "Umesh",
            lastName: "Yadav"
        }, {
            firstName: "Hardik",
            lastName: "Pandya"
        }, {
            firstName: "Wriddhiman",
            lastName: "Saha"
        }];

        var indianATeam = [{
            firstName: "Priyank",
            lastName: "Panchal"
        }, {
            firstName: "Shreyas",
            lastName: "Iyer"
        }, {
            firstName: "Ankit",
            lastName: "Bawne"
        }, {
            firstName: "Rishabh",
            lastName: "Pant"
        }, {
            firstName: "Shahbaz",
            lastName: "Nadeem"
        }, {
            firstName: "Kuldeep",
            lastName: "Yadav"
        }, {
            firstName: "Ishan",
            lastName: "Kishan"
        }];

        // function updateScore(){
        //   return services.get().then(data){
        //     var score = data.indianTeam;
        //   }
        // }

        services.getPlayers = function() {
            // var playerList = API;
            return indianATeam;
        }

        services.filterPlayers = function() {

    

           return indianTeam = indianTeam.map(function (el, i) {
              return indianTeam.findIndex(function (e) {
                console.log("sdf",e.lastName,el.lastName);
                return e.lastName == el.lastName;
              }) === i ? el.lastName : el.firstName;
            });


            // var hash = Object.create(null),
            //  result = indianTeam.map(function (a) {
            //      if (!a.lastName || hash[a.lastName]) {
            //          return a.firstName;
            //      }          
            //      hash[a.lastName] = true;
            //      return a.lastName;
            //  });

            //    return result;
        };

        return services;
    }

    function MainCtrl(factoryServices) {
        this.battingList = factoryServices.getPlayers();
        this.bowlingList = factoryServices.filterPlayers();
    }

    angular.module('cricketApp', [])

    .factory('factoryServices', factoryServices)    

    .controller('MainCtrl', ['factoryServices', MainCtrl]);

})();
