angular
  .module('app')
  .controller('displayFlexController', displayFlexController);

  displayFlexController.$inject =[];

  function displayFlexController() {
    this.value = 'block';
  }


