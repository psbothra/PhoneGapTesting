// Code goes here

angular.module('ionicApp', ['ionic'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('entry', {
      url: '/entry',
      templateUrl: 'partials/entry.html',
      controller: 'EntryPageController'
    })

  .state('main', {
    url: '/main',
    templateUrl: 'partials/mainContainer.html',
    abstract: true,
    controller: 'MainController'
  })

  .state('main.home', {
    url: '/home',
    views: {
      'main': {
        templateUrl: 'partials/home.html',
        controller: 'HomePageController'
      }
    }
  })

  .state('main.info', {
    url: '/info',
    views: {
      'main': {
        templateUrl: 'partials/info.html',
        controller: 'InfoPageController'
      }
    }
  })

  .state('main.tabs', {
    url: '/tabs',
    views: {
      'main': {
        templateUrl: 'partials/tabs.html',
        controller: 'TabsPageController'
      }
    }
  })

  $urlRouterProvider.otherwise('/entry');
}])


.controller('MainController', ['$scope', function($scope) {
  $scope.toggleMenu = function() {
    $scope.sideMenuController.toggleLeft();
  }
}])

.controller('EntryPageController', ['$scope', '$state', function($scope, $state) {
  $scope.navTitle = 'Welcome Page';

  $scope.signIn = function() {
    $state.go('main.home');
  }
}])

.controller('HomePageController', ['$scope', '$state', function($scope, $state) {
  $scope.navTitle = 'Home Page';

  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
      $scope.toggleMenu();
    }
  }];
}])

.controller('InfoPageController', ['$scope', '$state', function($scope, $state) {
  $scope.navTitle = 'Info Page';

  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
      $scope.toggleMenu();
    }
  }];
}])

.controller('TabsPageController', ['$scope', '$state', function($scope, $state) {
  $scope.navTitle = 'Tab Page';
  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
      $scope.toggleMenu();
    }
  }];
}])