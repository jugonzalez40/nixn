'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider.state('m.adminUsuario', {
    url: '/adminUsuario',
    template: '<admin-usuario></admin-usuario>'
  });
}
