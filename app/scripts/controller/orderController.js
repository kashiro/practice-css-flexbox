angular
  .module('app')
  .controller('orderController', orderController);

  orderController.$inject =[];

  function orderController() {
    this.value1 = 0;
    this.value2 = 0;
    this.value3 = 0;
  }


