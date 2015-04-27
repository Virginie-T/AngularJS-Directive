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

courseRoster.directive("enter", function() {
  return function (scope, element) {
    element.bind("mouseenter", function() {
      element.addClass('btn btn-default');
    });
    element.bind("mouseleave", function() {
      element.removeClass('btn btn-default');
    });
  }
});
