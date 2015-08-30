angular
  .module('app')
  .controller('alignSelfController', alignSelfController);

  alignSelfController.$inject = [];

  function alignSelfController() {
    this.outValue = 'flex-start';
    this.inValue = 'flex-start';
  }


