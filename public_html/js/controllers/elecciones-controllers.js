/* global base_url */

angular.module('app').service('EleccionesService', [
    '$http',
    '$q',
    '$state',
    function ($http, $q, $state) {
        this.getData = function (periodo) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: base_url + 'content/elecciones/elecciones-' + periodo + '.json'
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                var response = {
                    status: 404,
                    data: {
                        message: 'No se pudo guardar el contenido, por favor intentelo m\u00E1s tarde'
                    }
                };
                showNoty(response);
                $state.go('main');
            });
            return deferred.promise;
        };
    }
]);
angular.module('app').controller('EleccionesCtrl', [
    '$scope', 
    '$stateParams', 
    'EleccionesService', 
    function ($scope, $stateParams, EleccionesService) {
        EleccionesService.getData($stateParams.periodo).then(function (data) {
            $scope.eleccion = data;
        });
    }
]);