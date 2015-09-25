var attendanceTaker = angular.module('attendanceTaker', ['ui.router']);

attendanceTaker.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('instructors', {
    url: "/instructors",
    templateUrl: "partials/instructors.html",
    controller: 'StudentsCtrl'
  });
});
