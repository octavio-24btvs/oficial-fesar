/* global base_url */
angular.module("app").service('ExpocisionDigitalService', [
    '$http',
    function ($http) {
        this.getGaleriaByTitulo = function (titulo) {
            return $http({
                url: base_url + 'content/exposicion-digital/' + titulo + '.json',
                method: 'GET',
                params: {
                    rand: Math.random(73645873647)
                }
            });
        };
        this.getArtistas = function () {
            return $http({
                url: base_url + 'content/exposicion-digital/artistas.json',
                method: 'GET',
                params: {
                    rand: Math.random(73645873647)
                }
            });
        };
        this.getArtista = function (artista) {
            return $http({
                url: base_url + 'content/exposicion-digital/' + artista + '.json',
                method: 'GET',
                params: {
                    rand: Math.random(73645873647)
                }
            });
        };
        this.getObra = function (artista, obra) {
            return $http({
                url: base_url + 'content/exposicion-digital/' + artista + '-' + obra + '.json',
                method: 'GET',
                params: {
                    rand: Math.random(73645873647)
                }
            });
        };
    }
]);
angular.module("app").controller('ExposicionDigitalCtrl', [
    '$scope',
    '$stateParams',
    'ExpocisionDigitalService',
    function ($scope, $stateParams, ExpocisionDigitalService) {
        function loadOwlCarousel() {
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: true,
                    items: ($scope.artistas.length < 3 ? $scope.artistas.length : 3),
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
        $scope.galeria = null;
        $scope.artistas = [];
        ExpocisionDigitalService.getGaleriaByTitulo($stateParams.titulo).then(function (response) {
            $scope.galeria = response.data;
        }, function () {
            showNoty({status: 404, data: {message: 'Galer\u00EDa no disponoble'}});
        });
        ExpocisionDigitalService.getArtistas().then(function (response) {
            $scope.artistas = response.data;
            loadOwlCarousel();
        }, function () {
            showNoty({status: 404, data: {message: 'Artistas no disponobles'}});
        });
    }
]);
angular.module("app").controller('ArtistaExposicionDigitalCtrl', [
    '$scope',
    '$stateParams',
    'ExpocisionDigitalService',
    function ($scope, $stateParams, ExpocisionDigitalService) {
        $scope.artista = null;
        ExpocisionDigitalService.getArtista($stateParams.artista).then(function (response) {
            $scope.artista = response.data;
        }, function () {
            showNoty({status: 404, data: {message: 'Artistas no disponibles'}});
        });
    }
]);
angular.module("app").controller('ObraExposicionDigitalCtrl', [
    '$scope',
    '$stateParams',
    'ExpocisionDigitalService',
    function ($scope, $stateParams, ExpocisionDigitalService) {
        $scope.obra = null;
        ExpocisionDigitalService.getObra($stateParams.artista, $stateParams.obra).then(function (response) {
            $scope.obra = response.data;
        }, function () {
            showNoty({status: 404, data: {message: 'Obra no disponible'}});
        });
    }
]);