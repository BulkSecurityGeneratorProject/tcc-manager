(function() {
    'use strict';
    angular
        .module('tccmanagerApp')
        .factory('Aluno', Aluno);

    Aluno.$inject = ['$resource'];

    function Aluno ($resource) {
        var resourceUrl =  'api/alunos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
