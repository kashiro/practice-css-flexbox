angular
  .module('app')
  .controller('alignContentController', alignContentController);

  alignContentController.$inject = ['$scope'];

  function alignContentController($scope) {
    this.value = "flex-start";

    var me = this,
        elms = angular.element(document.body.querySelectorAll('.example-inner'));
    $scope.$watch(function() {
      return me.value;
    }, function() {
      if(me.value === 'stretch'){
        elms.css('height', 'initial');
      }else{
        elms.css('height', '30%');
      }
    });
  }


