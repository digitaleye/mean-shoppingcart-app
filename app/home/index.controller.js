(function () {
    'use strict';

   

    var app = angular.module('app');
    app.controller('Home.IndexController', function($scope, UserService, ShoppingService, ngCart){

        //ngCart.setTaxRate(7.5);
        //ngCart.setShipping(2.99);

        $scope.items = null;

        $scope.user = null;

        $scope.HelmetsCategory = [];
        $scope.BallsCategory = [];
        $scope.BottlesCategory = [];

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                $scope.user = user;
            });

            ShoppingService.getItems().then(function (items){
                $scope.items = items;

                for(var i=0; i <items.length; i++)

                    if(items[i].Category === "Balls"){
                        $scope.BallsCategory.push(items[i]);
                    }
                    else if(items[i].Category === "Helmets"){
                        $scope.HelmetsCategory.push(items[i]);
                    }
                    else if(items[i].Category === "Bottles"){
                        $scope.BottlesCategory.push(items[i]);
                    }


                console.log($scope.BallsCategory);
                console.log($scope.HelmetsCategory);
                console.log($scope.BottlesCategory);
            })

        }









    })

})();