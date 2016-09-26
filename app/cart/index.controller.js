/**
 * Created by fjatori on 9/26/2016.
 */
(function () {
    'use strict';



    var app = angular.module('app');
    app.controller('Cart.IndexController', function($scope, UserService, ShoppingService, ngCart){
console.log(ngCart.tax_rate);
        $scope.items = null;

        $scope.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                $scope.user = user;
                console.log($scope.user);
            });

            ShoppingService.getItems().then(function (items){
                $scope.items = items;
                console.log($scope.items);
            })

        }

    })

})();