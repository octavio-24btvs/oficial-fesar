/* global base_url */

angular.module("app").service("RegistroService", [
    '$http',
    '$q',
    function ($http, $q) {
        this.sendPasante = function (data) {
            var deferred = $q.defer();
            return $http({
                method: 'POST',
                url: '/paginafes/index.php?/api/biblioteca/registro_pasante',
                data: data
            }).then(function (response) {
                showNoty(response);
            }, function (response) {
                showNoty(response);
                return deferred.promise;
            });
        };
        this.sendAdministrativo = function (data) {
            var deferred = $q.defer();
            return $http({
                method: 'POST',
                url: '/paginafes/index.php?/api/biblioteca/registro_administrativo',
                data: data
            }).then(function (response) {
                showNoty(response);
            }, function (response) {
                showNoty(response);
                return deferred.promise;
            });
        };
        this.sendAcademico = function (data) {
            var deferred = $q.defer();
            return $http({
                method: 'POST',
                url: '/paginafes/index.php?/api/biblioteca/registro_academico',
                data: data
            }).then(function (response) {
                showNoty(response);
            }, function (response) {
                showNoty(response);
                return deferred.promise;
            });
        };
    }
]);
angular.module("app").service('NovedadesBiliotecaService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getYears = function () {
            var deferred = $q.defer();
            $http.get(base_url + 'content/biblioteca/novedades/anios.json?rand=' + Math.random(328762836386)).then(function (response) {
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
            $http.get(base_url + 'content/biblioteca/novedades/' + anio + '.json?rand=' + Math.random(328762836386)).then(function (response) {
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
angular.module("app").controller('RegistroPasanteCtrl', [
    '$scope',
    'validationManager',
    'RegistroService',
    '$state',
    function ($scope, validationManager, RegistroService, $state) {
        $scope.form = {
            tramite: '',
            nombre: '',
            numero_cuenta: '',
            carrera: '',
            domicilio: '',
            telefono_particular: '',
            telefono_movil: '',
            correo_electronico: '',
            mensaje: ''
        };
        $.getScript("https://www.google.com/recaptcha/api.js");
        $scope.submit = function () {
            RegistroService.sendPasante($scope.form).then(function (data) {
                $state.go('registro_usuarios');
            });
        };
        $scope.cancelar = function () {
            $state.go('registro_usuarios');
        };
    }
]);
angular.module("app").controller('RegistroAdministrativoCtrl', [
    '$scope',
    'validationManager',
    'RegistroService',
    '$state',
    function ($scope, validationManager, RegistroService, $state) {
        $scope.form = {
            tramite: '',
            nombre: '',
            numero_trabajador: '',
            categoria: '',
            domicilio: '',
            telefono_particular: '',
            telefono_movil: '',
            correo_electronico: '',
            mensaje: ''
        };
        $.getScript("https://www.google.com/recaptcha/api.js");
        $scope.submit = function () {
            RegistroService.sendAdministrativo($scope.form).then(function (data) {
                $state.go('registro_usuarios');
            });
        };
        $scope.cancelar = function () {
            $state.go('registro_usuarios');
        };
    }
]);
angular.module("app").controller('RegistroAcademicoCtrl', [
    '$scope',
    'validationManager',
    'RegistroService',
    '$state',
    function ($scope, validationManager, RegistroService, $state) {
        $scope.form = {
            tramite: '',
            nombre: '',
            numero_trabajador: '',
            carrera: '',
            domicilio: '',
            telefono_particular: '',
            telefono_movil: '',
            correo_electronico: '',
            mensaje: ''
        };
        $.getScript("https://www.google.com/recaptcha/api.js");
        $scope.submit = function () {
            RegistroService.sendAcademico($scope.form).then(function (data) {
                $state.go('registro_usuarios');
            });
        };
        $scope.cancelar = function () {
            $state.go('registro_usuarios');
        };
    }
]);
angular.module('app').controller('NovedadesBiliotecaCtrl', [
    '$scope',
    '$stateParams',
    'NovedadesBiliotecaService',
    function ($scope, $stateParams, NovedadesBiliotecaService) {
        $scope.anio_actual = '2019';
        $scope.data = {};
        $scope.pdfs = [];
        NovedadesBiliotecaService.getYears().then(function (data) {
            $scope.data = data;
        }, function (error) {
            showNoty(error);
        });
        NovedadesBiliotecaService.getPDFS($scope.anio_actual).then(function (data) {
            $scope.pdfs = data;
        }, function (error) {
            showNoty(error);
        });
        $scope.changeAnio = function () {
            NovedadesBiliotecaService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveForward = function (anio) {
            var indice = $scope.data.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data[indice + 1]) !== 'undefined' ? $scope.data[indice + 1].anio : $scope.data[0].anio;
            $scope.anio_actual = anio_siguiente;
            NovedadesBiliotecaService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
        $scope.moveBackward = function (anio) {
            var indice = $scope.data.findIndex(x => x.anio === anio);
            var anio_siguiente = typeof ($scope.data[indice - 1]) !== 'undefined' ? $scope.data[indice - 1].anio : $scope.data[$scope.data.length - 1].anio;
            $scope.anio_actual = anio_siguiente;
            NovedadesBiliotecaService.getPDFS($scope.anio_actual).then(function (data) {
                $scope.pdfs = data;
            }, function (error) {
                showNoty(error);
            });
        };
    }
]);
angular.module("app").controller('BibliotecaCtrl', [
    function () {
        jQuery(document).ready(function ($) {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                rtl: false,
                items: 3,
                loop: true,
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
    }]);