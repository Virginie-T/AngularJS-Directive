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
  return {
    restrict: 'A',
    link: function () {
      alert('I m a panda');
    }
  };
});

courseRoster.directive("alertUser", function() {
  return {
    scope: {
      alert: '='
    },
    template: '<button ng-click="alert()">Click me!</button>'
  };
});

courseRoster.directive("sampleCourse", function() {
  return {
    scope: {
      coursez: "@"
    },
    template: '{{ coursez }}'
  };
});
