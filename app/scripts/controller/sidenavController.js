angular
  .module('app')
  .controller('SideNavController', SideNavController);

  SideNavController.$inject =['$mdUtil', '$mdSidenav', '$location'];

  function SideNavController($mdUtil, $mdSidenav, $location) {
    this.toggle = $mdUtil.debounce(function(){$mdSidenav('sideNav').toggle();},200);
    this.gotoPage = function(e) {
      $location.path('/' + e.target.innerText);
    };
  }


