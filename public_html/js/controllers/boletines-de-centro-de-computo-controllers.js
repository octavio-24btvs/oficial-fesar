angular.module("app").service('BoletinesdeCentrodeomputoService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getYears = function () {
            var deferred = $q.defer();
            $http.get(base_url + 'content/menu_rapido/boletines/anios.json?rand=' + Math.random(328762836386)).then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                deferred.reject({
                    data: {
                        message: "Hubo un error al intentar cargar el contenido"
                    },
                    status: 404});
            });
            return deferred.promise;
        };
        this.getPDFS = function (anio) {
            var deferred = $q.defer();
            $http.get(base_url + 'content/menu_rapido/boletines/' + anio + '.json?rand=' + Math.random(328762836386)).then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                deferred.reject({
                    data: {
                        message: "Hubo un error al intentar cargar el contenido"
                    },
                    status: 404});
            });
            return deferred.promise;
        };
    }
]);
angular.module('app').controller('BoletinesdeCentrodeomputoCtrl', [
    '$scope',
    '$stateParams',
    'BoletinesdeCentrodeomputoService',
    function ($scope, $stateParams, BoletinesdeCentrodeomputoService) {
        $scope.anio_actual = new Date().getFullYear().toString();
        $scope.data = {};
        $scope.pdfs = [];
        BoletinesdeCentrodeomputoService.getYears().then(function (data) {
            $scope.data = data;
        }, function (error) {
            showNoty(error);
        });
        BoletinesdeCentrodeomputoService.getPDFS($scope.anio_actual).then(function (data) {
            $scope.pdfs = data;
            if ($scope.pdfs.length === 0) {
                $scope.anio_actual = (parseInt($scope.anio_actual) - 1).toString();
                BoletinesdeCentrodeomputoService.getPDFS($scope.anio_actual).then(function (data) {
                    $scope.pdfs = data;
                }, function (error) {
                    showNoty(error);
                });
            }
        }, function (error) {
            showNoty(error);
        });
        $scope.changeAnio = function () {
            BoletinesdeCentrodeomputoService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveForward = function (anio) {
            var indice = $scope.data.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data[indice + 1]) !== 'undefined' ? $scope.data[indice + 1].anio : $scope.data[0].anio;
            $scope.anio_actual = anio_siguiente;
            BoletinesdeCentrodeomputoService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveBackward = function (anio) {
            var indice = $scope.data.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data[indice - 1]) !== 'undefined' ? $scope.data[indice - 1].anio : $scope.data[$scope.data.length - 1].anio;
            $scope.anio_actual = anio_siguiente;
            BoletinesdeCentrodeomputoService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
    }
]);

