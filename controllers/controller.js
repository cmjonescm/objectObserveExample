//*****************************************************************************
// Copyright © 2013 Waters Corporation. All rights reserved.
//*****************************************************************************
'use strict'

angular.module('controllerModule', [])
    .controller('myController', ['$scope', function ($scope) {

        $scope.dataModel = { data:100 };

        $scope.clickMe = function() {
            $scope.dataModel.data += 1;
        };

        // Define callback function to get notified on changes
        function somethingChangedHandler(changes) {
            // do something

            console.log("Object.observe fired!");
        }
        Object.observe($scope.dataModel, somethingChangedHandler);
    }]);
