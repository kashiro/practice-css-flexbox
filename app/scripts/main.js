(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ngAria',
    'ngMaterial',
  ]).config(appConfig);

  appConfig.$inject =['$routeProvider', '$locationProvider'];

  function appConfig($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/display-flex', {
        templateUrl: '/template/display-flex.html',
        controller: 'displayFlexController',
        controllerAs: 'displayFlexCtrl'
      })
      .when('/flex-direction', {
        templateUrl: '/template/flex-direction.html',
        controller: 'flexDirectionController',
        controllerAs: 'flexDirectionCtrl'
      })
      .when('/flex-wrap', {
        templateUrl: '/template/flex-wrap.html',
        controller: 'flexWrapController',
        controllerAs: 'flexWrapCtrl'
      })
      .when('/justify-content', {
        templateUrl: '/template/justify-content.html',
        controller: 'justifyContentController',
        controllerAs: 'justifyContentCtrl'
      })
      .when('/align-items', {
        templateUrl: '/template/align-items.html',
        controller: 'alignItemsController',
        controllerAs: 'alignItemsCtrl'
      })
      .when('/align-content', {
        templateUrl: '/template/align-content.html',
        controller: 'alignContentController',
        controllerAs: 'alignContentCtrl'
      })

      .when('/flex-grow', {
        templateUrl: '/template/flex-grow.html',
        controller: 'flexGrowController',
        controllerAs: 'flexGrowCtrl'
      })
      .when('/flex-shrink', {
        templateUrl: '/template/flex-shrink.html',
        controller: 'flexShrinkController',
        controllerAs: 'flexShrinkCtrl'
      })
      .when('/flex-basis', {
        templateUrl: '/template/flex-basis.html',
        controller: 'flexBasisController',
        controllerAs: 'flexBasisCtrl'
      })
      .when('/align-self', {
        templateUrl: '/template/align-self.html',
        controller: 'alignSelfController',
        controllerAs: 'alignSelfCtrl'
      })
      .when('/order', {
        templateUrl: '/template/order.html',
        controller: 'orderController',
        controllerAs: 'orderCtrl'
      })
      .otherwise({redirectTo: '/display-flex'});
  }
})();
