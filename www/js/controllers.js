angular.module('starter.controllers', [])

.controller('currentRatesCtrl', ['$scope', 'getCurrentRatesService', '$log', '$ionicPopup', '$state', 'getLoadingMessageService', 'getErrorMessageService',
    function($scope, getCurrentRatesService, $log, $ionicPopup, $state, getLoadingMessageService, getErrorMessageService) {
        $scope.loading = true;
        $scope.loadingMessage = getLoadingMessageService.getLoadingMessage();
        var promise = getCurrentRatesService.getCurrentRates();
        promise.then(function(payload) {
            $scope.rates = payload.current_rates;
            $scope.loading = false;
        }, function(errorPayload) {
            $log.error('failure fetching rates', errorPayload);
            var alertPopup = $ionicPopup.alert({
                title: "Network Error",
                template: "Could not determine current rates right now.\n\n"
            });
            alertPopup.then(function(res) {
                $scope.loading = false;
                $scope.errorMessage = getErrorMessageService.getErrorMessage();
            });
        });
    }
]);