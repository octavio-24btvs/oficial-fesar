angular.module("app").controller('CarrerasListCtrl', [
    '$scope',
    function ($scope) {
        $scope.carreras = [
            {
                area: 'Ciencias Físico-Matemáticas y de las ingenierías',
                licenciaturas: [
                    {nombre: 'Ingeniería Civil', nombre_normalizado: 'civil', icono: 'icon-ingenieria-civil',pdf:'ingenieria-civil-titulacion.pdf'},
                    {nombre: 'Ingeniería en Computación', nombre_normalizado: 'computacion', icono: 'icon-ingenieria-en-computacion',pdf:'ingenieria-en-computacion-titulacion.pdf'},
                    {nombre: 'Ingeniería Eléctrica Electrónica', nombre_normalizado: 'electrica-electronica', icono: 'icon-ingenieria-electrica-electronica',pdf:'ingenieria-electrica-electronica-titulacion.pdf'},
                    {nombre: 'Ingeniería Industrial', nombre_normalizado: 'industrial', icono: 'icon-ingenieria-industrial',pdf:'ingenieria-industrial-titulacion.pdf'},
                    {nombre: 'Ingeniería Mecánica', nombre_normalizado: 'mecanica', icono: 'icon-ingenieria-mecanica',pdf:'ingenieria-mecanica-titulacion.pdf'}
                ]
            },
            {
                area: 'Ciencias Sociales',
                licenciaturas: [
                    {nombre: 'Comunicación y Periodismo', nombre_normalizado: 'comunicacion-y-periodismo', icono: 'icon-comunicacion-y-peridismo',pdf:'comunicacion-y-periodismo-titulacion.pdf'},
                    {nombre: 'Derecho', nombre_normalizado: 'derecho', icono: 'icon-derecho',pdf:'derecho-titulacion.pdf'},
                    {nombre: 'Economía', nombre_normalizado: 'economia', icono: 'icon-economia',pdf:'economia-titulacion.pdf'},
                    {nombre: 'Planificación para el Desarrollo Agropecuario', nombre_normalizado: 'planificacion-para-el-desarrollo-agropecuario', icono: 'icon-planificacion-para-el-desarrollo-agropecuario',pdf:'planificacion-titulacion.pdf'},
                    {nombre: 'Relaciones Internacionales', nombre_normalizado: 'relaciones-internacionales', icono: 'icon-relaciones-internacionales',pdf:'relaciones-internacionales-titulacion.pdf'},
                    {nombre: 'Sociología', nombre_normalizado: 'sociologia', icono: 'icon-sociologia',pdf:'sociologia-titulacion.pdf'}
                ]
            },
            {
                area: 'Humanidades y Artes',
                licenciaturas: [
                    {nombre: 'Arquitectura', nombre_normalizado: 'arquitectura', icono: 'icon-arquitectura',pdf:'arquitectura-titulacion.pdf'},
                    {nombre: 'Diseño Industrial', nombre_normalizado: 'diseño-industrial', icono: 'icon-diseno-industrial',pdf:'diseno-industrial-titulacion.pdf'},
                    {nombre: 'Pedagogía', nombre_normalizado: 'pedagogia', icono: 'icon-pedagogia',pdf:'pedagogia-titulacion.pdf'}
                ]
            },
            {
                area: 'SUAyED',
                licenciaturas: [
                    {nombre: 'Derecho', nombre_normalizado: 'derecho-suayed', icono: 'icon-derecho-suayed',pdf:'derecho-suayed-titulacion.pdf'},
                    {nombre: 'Economía', nombre_normalizado: 'economia-suayed', icono: 'icon-economia-suayed',pdf:'economia-suayed-titulacion.pdf'},
                    {nombre: 'Relaciones Internacionales', nombre_normalizado: 'relaciones-internacionales-suayed', icono: 'icon-relaciones-internacionales-suayed',pdf:'relaciones-internacionales-suayed-titulacion.pdf'}
                ]
            }
        ];

    }
]);