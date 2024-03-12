angular.module("app").service('VidaUniversitariaService', ['$http', '$q', function ($http, $q) {
        this.getImagesPdfs = function (tag) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/vida_universitaria/valores_unam/' + tag + '.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
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
    }]);
angular.module("app").controller('ValoresUnamCtrl', [
    '$scope',
    '$stateParams',
    'VidaUniversitariaService',
    function ($scope, $stateParams, VidaUniversitariaService) {
        $scope.tag = $stateParams.tag;
        $scope.modal = false;
        VidaUniversitariaService.getImagesPdfs($scope.tag).then(function (data) {
            $scope.valor_unam = data.data;
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: true,
                    items: ($scope.valor_unam.imagenes.length < 3 ? $scope.valor_unam.imagenes.length : 3),
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
            $scope.image_source = 'public_html/img//vida_universitaria/' + $scope.tag + '/tamano_real/' + $scope.valor_unam.imagenes[indice].imagen + ($scope.valor_unam.imagenes[indice].formato === 'gif' ? '.gif' : '.jpg');
            $scope.image_alt = $scope.valor_unam.imagenes[indice].alt;
            $scope.modal = true;
        };
    }
]);
angular.module('app').controller('ActividadesCulturalesCtrl', [
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