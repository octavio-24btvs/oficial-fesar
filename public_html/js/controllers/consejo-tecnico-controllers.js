angular.module("app").service('ConsejoTecnicoService', ['$http', '$q', '$state',
    function ($http, $q, $state) {
        this.getYears = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/nuestra-facultad/acuerdos/anios.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            })
        };
        this.getOrdenYears = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/nuestra-facultad/orden-del-dia/anios.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            })
        };
        this.getAcuerdos = function (anio) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/nuestra-facultad/acuerdos/' + anio + '.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            })
        };
        this.getOrdenDelDia = function (anio) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/nuestra-facultad/orden-del-dia/' + anio + '.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            })
        };
    }]);
angular.module("app").controller('AcuerdosCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'ConsejoTecnicoService',
    '$sce',
    function ($scope, $state, $stateParams, ConsejoTecnicoService, $sce) {
        $scope.heading = "Acuerdos";
        $scope.tipo = "acuerdo";
        $scope.anio_actual = $stateParams.anio;
        ConsejoTecnicoService.getYears().then(function (data) {
            $scope.anios = data.data;
        });
        ConsejoTecnicoService.getAcuerdos($scope.anio_actual).then(function (data) {
            $scope.acuerdos = data.data;
        });
        $scope.changeAnio = function () {
            $state.go('.', {anio: $scope.anio_actual}, {notify: false});
        };
        $scope.moveForward = function (anio) {
            var indice = $scope.anios.findIndex(x => x.anio == anio);
            var anio_siguiente = typeof ($scope.anios[indice + 1]) !== 'undefined' ? $scope.anios[indice + 1].anio : $scope.anios[0].anio;
            $state.go('.', {anio: anio_siguiente}, {notify: false});
        };
        $scope.moveBackward = function (anio) {
            var indice = $scope.anios.findIndex(x => x.anio == anio);
            var anio_siguiente = typeof ($scope.anios[indice - 1]) !== 'undefined' ? $scope.anios[indice - 1].anio : $scope.anios[$scope.anios.length-1].anio;
            $state.go('.', {anio: anio_siguiente}, {notify: false});
        };
    }
]);
angular.module("app").controller('OrdenDelDiaCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'ConsejoTecnicoService',
    '$sce',
    function ($scope, $state, $stateParams, ConsejoTecnicoService, $sce) {
        $scope.heading = "\u00D3rdenes del d\u00EDa";
        $scope.tipo = "orden del d\u00EDa";
        $scope.anio_actual = $stateParams.anio;
        ConsejoTecnicoService.getOrdenYears().then(function (data) {
            $scope.anios = data.data;
        });
        ConsejoTecnicoService.getOrdenDelDia($scope.anio_actual).then(function (data) {
            $scope.acuerdos = data.data;
        });
        $scope.changeAnio = function () {
            $state.go('.', {anio: $scope.anio_actual}, {notify: false});
        };
        $scope.moveForward = function (anio) {
            var indice = $scope.anios.findIndex(x => x.anio == anio);
            var anio_siguiente = typeof ($scope.anios[indice + 1]) !== 'undefined' ? $scope.anios[indice + 1].anio : $scope.anios[0].anio;
            $state.go('.', {anio: anio_siguiente}, {notify: false});
        };
        $scope.moveBackward = function (anio) {
            var indice = $scope.anios.findIndex(x => x.anio == anio);
            var anio_siguiente = typeof ($scope.anios[indice - 1]) !== 'undefined' ? $scope.anios[indice - 1].anio : $scope.anios[$scope.anios.length-1].anio;
            $state.go('.', {anio: anio_siguiente}, {notify: false});
        };
    }
]);