var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'HomeCtrl'
  });

  $stateProvider.state('courses', {
    url: "/courses",
    templateUrl: "partials/courses.html",
    controller: 'CoursesCtrl'
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: "partials/courses.students.html",
    controller: 'StudentsCtrl'
  });
});

courseRoster.directive("welcomeText", function() {
  return {
    restrict: "E",
    template: "<div>Welcome!</div>"
  };
});

courseRoster.directive("welkkomen", function() {
  return function (scope, element, attrs) {
    element.text(scope.message + " " + attrs.message);
  };
});
