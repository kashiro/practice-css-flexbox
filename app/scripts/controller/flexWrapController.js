angular
  .module('app')
  .controller('flexWrapController', flexWrapController);

  flexWrapController.$inject =[];

  function flexWrapController() {
    this.value = 'nowrap';
  }


