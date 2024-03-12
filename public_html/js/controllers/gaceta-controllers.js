/* global base_url, api_url */
angular.module('app').service('GacetaService', [
    '$http',
    function ($http) {
        this.getGacetas = function (ind) {
            return $http({
                url: api_url + 'gacetas/get_by_indice',
                method: 'GET',
                params: {
                    ind: ind
                }
            });
        };
        this.getGaceta = function (numero) {
            return $http({
                url: api_url + 'gacetas/get_by_numero',
                method: 'GET',
                params: {
                    num: numero
                }
            });
        };
        this.search = function (type, value) {
            return $http({
                url: api_url + 'gacetas/search',
                method: 'POST',
                data: {
                    type: type,
                    value: value
                }
            });
        };
    }
]);
angular.module('app').controller('GacetaCtrl', [
    '$scope',
    '$stateParams',
    'GacetaService',
    function ($scope, $stateParams, GacetaService) {
        $scope.gaceta = {};
        $scope.gacetas = [];
        $scope.carousel = false;
        $scope.search_by = {numero: '', editor: '', anho: '', especiales: false};
        var numero = ($stateParams.numero !== '' ? $stateParams.numero : 'last');
        $scope.search = function (type, value) {
            GacetaService.search(type, value).then(function (response) {
                $scope.gacetas = response.data.gacetas;
                $scope.carousel = !$scope.carousel;
                jQuery(document).ready(function ($) {
                    var owl = $('.owl-carousel');
                    owl.owlCarousel({
                        items: 6,
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
            }, function (error) {
                showNoty(error);
            });
        };
        GacetaService.getGacetas(numero).then(function (response) {
            $scope.gacetas = response.data.gacetas;
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    items: 6,
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
        }, function (error) {
            showNoty(error);
        });
        GacetaService.getGaceta(numero).then(function (response) {
            $scope.gaceta = response.data.gaceta;
        }, function (error) {
            showNoty(error);
        });
    }
]);