angular
  .module('app')
  .controller('alignItemsController', alignItemsController);

  alignItemsController.$inject = [];

  function alignItemsController() {
    this.value = "flex-start";
  }


