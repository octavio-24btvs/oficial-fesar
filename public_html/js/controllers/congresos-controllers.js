angular.module("app").service('CongresosService', ['$http', '$q', '$state',
    function ($http, $q, $state) {
        this.getData = function (congreso) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/congresos/' + congreso + '.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "No se pudo cargar el contenido, por favor intentelo mas tarde"
                            },
                    "status": 404};
                showNoty(response);
                $state.go('main');
                return deferred.promise;
            });
        };
        this.getNoticias = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/noticias/noticias.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar las noticias"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
    }]);
angular.module("app").controller('CongresosCtrl', [
    '$scope',
    '$stateParams',
    'CongresosService',
    function ($scope, $stateParams, CongresosService) {
        CongresosService.getData($stateParams.congreso).then(function (data) {
            $scope.congreso = data.data;
        });
    }
]);