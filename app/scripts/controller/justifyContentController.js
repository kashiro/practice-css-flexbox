angular
  .module('app')
  .controller('justifyContentController', justifyContentController);

  justifyContentController.$inject =[];

  function justifyContentController() {
    this.value = "flex-start";
  }


