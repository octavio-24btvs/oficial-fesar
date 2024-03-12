/* global base_url */
angular.module('app').service('InvestigacionService', [
    '$http',
    function ($http) {
        this.getInstitutos = function () {
            return $http({
                url: base_url + 'content/investigacion/institutos-de-investigacion.json',
                method: 'GET',
                params: {
                    rand: Math.random(7346536478563)
                }
            });
        };
        this.getInvestigadoresByInstituto = function (instituto) {
            return $http({
                url: base_url + 'content/investigacion/institutos/' + instituto + '.json',
                method: 'GET',
                params: {
                    rand: Math.random(7346536478563)
                }
            });
        };
        this.getInvestigador = function (investigador) {
            return $http({
                url: base_url + 'content/investigacion/' + investigador + '.json',
                method: 'GET',
                params: {
                    rand: Math.random(7346536478563)
                }
            });
        };
    }
]);
angular.module('app').controller('InstitutosInvestigacionCtrl', [
    '$scope',
    '$stateParams',
    'InvestigacionService',
    function ($scope, $stateParams, InvestigacionService) {
        $scope.showing = 0;
        $scope.institutos = null;
        InvestigacionService.getInstitutos().then(function (response) {
            $scope.institutos = response.data.institutos;
        }, function () {
            showNoty({
                status: 404,
                data: {
                    message: 'Error al localizar los institutos'
                }
            });
        });
    }
]);
angular.module('app').controller('InvestigadoresCtrl', [
    '$scope',
    '$stateParams',
    'InvestigacionService',
    function ($scope, $stateParams, InvestigacionService) {
        $scope.showing = 0;
        $scope.instituto = null;
        InvestigacionService.getInvestigadoresByInstituto($stateParams.instituto).then(function (response) {
            $scope.instituto = response.data;
        }, function () {
            showNoty({
                status: 404,
                data: {
                    message: 'Error al localizar el investigador'
                }
            });
        });
    }
]);
angular.module('app').controller('InvestigadorCtrl', [
    '$scope',
    '$stateParams',
    'InvestigacionService',
    function ($scope, $stateParams, InvestigacionService) {
        $scope.showing = 0;
        $scope.investigador = null;
        $scope.investigador_normalizado = $stateParams.investigador;
        InvestigacionService.getInvestigador($stateParams.investigador).then(function (response) {
            $scope.investigador = response.data;
        }, function () {
            showNoty({
                status: 404,
                data: {
                    message: 'Error al localizar el investigador'
                }
            });
        });
    }
]);