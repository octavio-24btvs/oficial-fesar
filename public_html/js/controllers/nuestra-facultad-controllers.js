/* global base_url */
angular.module("app").service('NuestraFacultadService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getImages = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/nuestra-facultad/transparencia.json?rand=' + Math.random(328762836386)).then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar el contenido"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getYears = function (area) {
            var deferred = $q.defer();
            $http.get(base_url + 'content/nuestra-facultad/cuerpos-colegiados/' + area + '/anios.json?rand=' + Math.random(328762836386)).then(function (response) {
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
        this.getPDFS = function (area, anio) {
            var deferred = $q.defer();
            $http.get(base_url + 'content/nuestra-facultad/cuerpos-colegiados/' + area + '/' + anio + '.json?rand=' + Math.random(328762836386)).then(function (response) {
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
angular.module("app").controller('NuestraFacultadCtrl', [
    '$scope',
    'NuestraFacultadService',
    function ($scope, NuestraFacultadService) {
        $scope.modal = false;
        NuestraFacultadService.getImages().then(function (data) {
            $scope.imagenes_transparencia = data.imagenes;
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: true,
                    items: ($scope.imagenes_transparencia.length < 3 ? $scope.imagenes_transparencia.length : 3),
                    margin: 8,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true
                });
                $('.play').on('click', function () {
                    owl.trigger('play.owl.autoplay', [1000]);
                });
                $('.stop').on('click', function () {
                    owl.trigger('stop.owl.autoplay');
                });
            });
        });
        jQuery(document).keypress(function (e) {
            if (e.keyCode == 27) {
                $scope.modal = false;
                $scope.$digest();
            }
        });
        $scope.showModal = function (indice) {
            $scope.image_source = 'public_html/img/nuestra_facultad/transparencia/' + $scope.imagenes_transparencia[indice].imagen;
            $scope.image_alt = $scope.imagenes_transparencia[indice].alt;
            $scope.modal = true;
        };
    }
]);
angular.module('app').controller('CuerposColegiadosListCtrl', [
    '$scope',
    '$stateParams',
    'NuestraFacultadService',
    function ($scope, $stateParams, NuestraFacultadService) {
        $scope.area = $stateParams.area;
        $scope.anio_actual = '2019';
        $scope.data = {};
        $scope.pdfs = [];
        NuestraFacultadService.getYears($stateParams.area).then(function (data) {
            $scope.data = data;
        }, function (error) {
            showNoty(error);
        });
        NuestraFacultadService.getPDFS($stateParams.area, $scope.anio_actual).then(function (data) {
            $scope.pdfs = data;
        }, function (error) {
            showNoty(error);
        });
        $scope.changeAnio = function () {
            NuestraFacultadService.getPDFS($stateParams.area, $scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveForward = function (anio) {
            var indice = $scope.data.anios.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data.anios[indice + 1]) !== 'undefined' ? $scope.data.anios[indice + 1].anio : $scope.data.anios[0].anio;
            $scope.anio_actual = anio_siguiente;
            NuestraFacultadService.getPDFS($stateParams.area, $scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveBackward = function (anio) {
            var indice = $scope.data.anios.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data.anios[indice - 1]) !== 'undefined' ? $scope.data.anios[indice - 1].anio : $scope.data.anios[$scope.data.anios.length - 1].anio;
            $scope.anio_actual = anio_siguiente;
            NuestraFacultadService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
    }
]);