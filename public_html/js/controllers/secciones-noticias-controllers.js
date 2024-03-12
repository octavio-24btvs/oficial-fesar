/* global base_url */
angular.module('app').service('SeccionesNoticiaService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getNoticiasBySeccion = function (seccion) {
            var deferred = $q.defer();
            $http({
                url: base_url + 'content/secciones-noticias/' + seccion + '.json?rand=' + Math.random(328762836386),
                method: 'GET'
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                deferred.reject({
                    status: 404,
                    data: {
                        message: 'No se pudo cargar el contenido, por favor intentelo m\u00E1s tarde'
                    }
                });
            });
            return deferred.promise;
        };
    }
]);
angular.module('app').controller('SeccionesNoticiasCtrl', [
    '$scope',
    '$stateParams',
    'SeccionesNoticiaService',
    function ($scope, $stateParams, SeccionesNoticiaService) {
        $scope.seccion = {};
        $scope.banner = false;
        $scope.total_paginas = 1;
        $scope.pagina_actual = 1;
        $scope.noticia_principal = {};
        $scope.noticias_secundarias = [];
        SeccionesNoticiaService.getNoticiasBySeccion($stateParams.seccion).then(function (data) {
            $scope.seccion = data;
            $scope.seccion.noticias.sort(function (a, b) {
                var aa = a.fecha.split('/').reverse().join(),
                        bb = b.fecha.split('/').reverse().join();
                return aa > bb ? -1 : (aa < bb ? 1 : 0);
            });
            if ($scope.seccion.noticias.length > 3) {
                $scope.banner = true;
                $scope.noticia_principal = $scope.seccion.noticias[0];
                $scope.noticias_secundarias = $scope.seccion.noticias.slice(1, 3);
                $scope.seccion.noticias = $scope.seccion.noticias.slice(3, $scope.seccion.noticias.length);
            }
            else if ($scope.seccion.noticias.length === 3) {
                $scope.banner = true;
                $scope.noticia_principal = $scope.seccion.noticias[0];
                $scope.noticias_secundarias = $scope.seccion.noticias.slice(1, 3);
                $scope.seccion.noticias = $scope.seccion.noticias.slice(3, $scope.seccion.noticias.length);
            }
            $scope.total_paginas = Math.ceil($scope.seccion.noticias.length / 8);
            $scope.getBloqueNoticias = function () {
                var primera_noticia = $scope.pagina_actual === 0 ? 1 : (($scope.pagina_actual - 1) * 8);
                return $scope.seccion.noticias.slice(primera_noticia, primera_noticia + 8);
            };
        }, function (error) {
            showNoty(error);
        });
    }
]);