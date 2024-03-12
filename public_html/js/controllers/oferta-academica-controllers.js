/* global base_url */
angular.module("app").service('OfertaAcademicaService', [
    '$http',
    '$q',
    '$state',
    function ($http, $q, $state) {
        this.getDataCarrera = function (carrera) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/licenciaturas/' + carrera + '.json?rand=' + Math.random(328762836386)).then(function (data) {
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
        this.getDataMaestriaEspecializacion = function (carrera) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/maestrias_especializaciones/' + carrera + '.json?rand=' + Math.random(328762836386)).then(function (data) {
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
        this.getDataDoctorados = function (carrera) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/doctorados/' + carrera + '.json?rand=' + Math.random(328762836386)).then(function (data) {
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
    }
]);
angular.module("app").controller('LicenciaturasCtrl', [
    '$scope',
    '$stateParams',
    'OfertaAcademicaService',
    function ($scope, $stateParams, OfertaAcademicaService) {
        $scope.showing = 0;
        $scope.suayed = false;
        $scope.ri = false;
        $scope.image_source = '';
        $scope.actual_carrera = $stateParams.carrera;
        OfertaAcademicaService.getDataCarrera($stateParams.carrera).then(function (data) {
            $scope.carrera = data.data;
            if ($stateParams.carrera == 'suayed-derecho' || $stateParams.carrera == 'suayed-economia' || $stateParams.carrera == 'suayed-relaciones-internacionales') {
                $scope.suayed = true;
            } else if ($stateParams.carrera == 'relaciones-internacionales') {
                $scope.ri = true;
            }
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: false,
                    items: ($scope.carrera.secciones[0].imagenes.length < 3 ? $scope.carrera.secciones[0].imagenes.length : 3),
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
//            if ($scope.carrera.contacto.foto_jefe_de_carrera !== '') {
//                $scope.carrera.contacto.foto_jefe_de_carrera = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_jefe_de_carrera;
//            }
//            if ($scope.carrera.contacto.foto_secretario_tecnico !== '') {
//                $scope.carrera.contacto.foto_secretario_tecnico = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_secretario_tecnico;
//            }
//            if (typeof ($scope.carrera.contacto.secretarios_tecnicos) !== 'undefined') {
//                for (var i = 0; i < $scope.carrera.contacto.secretarios_tecnicos.length; i++) {
//                    $scope.carrera.contacto.secretarios_tecnicos[i].foto_secretario_tecnico = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.secretarios_tecnicos[i].foto_secretario_tecnico;
//                }
//            }

        });
        $scope.setShowing = function (indice) {
            $scope.showing = indice;
        };
        $scope.showModal = function (imagen) {
            $scope.image_source = 'public_html/img/oferta_academica/' + imagen;
            $scope.modal = true;
        };
    }
]);
angular.module("app").controller('MaestriasEspecializacionesCtrl', [
    '$scope',
    '$stateParams',
    'OfertaAcademicaService',
    '$sce',
    function ($scope, $stateParams, OfertaAcademicaService, $sce) {
        $scope.showing = '0';
        OfertaAcademicaService.getDataMaestriaEspecializacion($stateParams.carrera).then(function (data) {
            $scope.maestria_especializacion = $stateParams.carrera;
            $scope.carrera = data.data;
            $scope.carrera.titulo = $sce.trustAsHtml($scope.carrera.titulo);
            $scope.carrera.bienvenida = $sce.trustAsHtml($scope.carrera.bienvenida);
            $scope.carrera.proceso_aplicacion = $sce.trustAsHtml($scope.carrera.proceso_aplicacion);
            $scope.carrera.objetivos_especificos = $sce.trustAsHtml($scope.carrera.objetivos_especificos);
            $scope.carrera.perfil_ingreso = $sce.trustAsHtml($scope.carrera.perfil_ingreso);
            $scope.carrera.perfil_egreso = $sce.trustAsHtml($scope.carrera.perfil_egreso);
            $scope.carrera.campos_conocimiento = $sce.trustAsHtml($scope.carrera.campos_conocimiento);
            $scope.carrera.graduacion = $sce.trustAsHtml($scope.carrera.graduacion);
            $scope.carrera.contacto.jefe_carrera = $sce.trustAsHtml($scope.carrera.contacto.jefe_carrera);
            $scope.carrera.contacto.jefe_academico = $sce.trustAsHtml($scope.carrera.contacto.jefe_academico);
            if ($scope.carrera.contacto.foto_jefe_de_carrera !== '') {
                $scope.carrera.contacto.foto_jefe_de_carrera = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_jefe_de_carrera;
            }
            if ($scope.carrera.contacto.foto_jefe_academico !== '') {
                $scope.carrera.contacto.foto_jefe_academico = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_jefe_academico;
            }
        });
    }
]);
angular.module("app").controller('DoctoradosCtrl', [
    '$scope',
    '$stateParams',
    'OfertaAcademicaService',
    '$sce',
    function ($scope, $stateParams, OfertaAcademicaService, $sce) {
        $scope.showing = '0';
        OfertaAcademicaService.getDataDoctorados($stateParams.carrera).then(function (data) {
            $scope.carrera = data.data;
            $scope.carrera.titulo = $sce.trustAsHtml($scope.carrera.titulo);
            $scope.carrera.bienvenida = $sce.trustAsHtml($scope.carrera.bienvenida);
            $scope.carrera.proceso_aplicacion = $sce.trustAsHtml($scope.carrera.proceso_aplicacion);
            $scope.carrera.perfil_ingreso = $sce.trustAsHtml($scope.carrera.perfil_ingreso);
            $scope.carrera.perfil_intermedio = $sce.trustAsHtml($scope.carrera.perfil_intermedio);
            $scope.carrera.perfil_egreso = $sce.trustAsHtml($scope.carrera.perfil_egreso);
            $scope.carrera.campos_conocimiento = $sce.trustAsHtml($scope.carrera.campos_conocimiento);
            $scope.carrera.graduacion = $sce.trustAsHtml($scope.carrera.graduacion);
            $scope.carrera.contacto.jefe_carrera = $sce.trustAsHtml($scope.carrera.contacto.jefe_carrera);
            $scope.carrera.contacto.jefe_academico = $sce.trustAsHtml($scope.carrera.contacto.jefe_academico);
            if ($scope.carrera.contacto.foto_jefe_de_carrera !== '') {
                $scope.carrera.contacto.foto_jefe_de_carrera = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_jefe_de_carrera;
            }
            if ($scope.carrera.contacto.foto_jefe_academico !== '') {
                $scope.carrera.contacto.foto_jefe_academico = base_url + 'img/oferta_academica/' + $stateParams.carrera + '/' + $scope.carrera.contacto.foto_jefe_academico;
            }
        });
    }
]);
angular.module("app").controller('CentroLenguasCtrl', [
    '$scope',
    function ($scope) {
        $scope.showing = '0';
    }
]);
angular.module("app").controller('LicenciaturasCarouselCtrl', [
    function () {
        jQuery(document).ready(function ($) {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                rtl: true,
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
    }
]);