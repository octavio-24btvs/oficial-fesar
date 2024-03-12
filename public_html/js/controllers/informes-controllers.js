angular.module('app').controller('InformesCtrl', [
    '$scope',
    '$stateParams',
    function ($scope, $stateParams) {
        $scope.informe = $stateParams.informe;
    }
]);