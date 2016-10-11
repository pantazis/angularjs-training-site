var myApp = angular.module("app", ['ui.router']);



myApp.controller('httpreqest', function ($scope,$http) {
    
    $http.get("/assets/json/article.json")
     //$http.get("../assets/json/article.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log(response.data);
    });
});
myApp.controller('gallery', function ($scope,$http) {
    $http.get("/assets/json/gallery.json")
    //$http.get("../assets/json/gallery.json")
    .then(function(response) {
        $scope.mygallery = response.data;
        console.log(response.data);
    });
});

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'views/home.html'
        })
        .state('about', {
            url: "/about",
            templateUrl: 'views/profile.html'
        })
      .state('nea', {
            url: "/nea",
            templateUrl: 'views/news.html',
            controller: 'httpreqest'
        })
        .state('epikinonia', {
            url: "/epikinonia",
            templateUrl: 'views/contact.html'
        })
        .state('Gallery', {
            url: "/Gallery",
            templateUrl: 'views/Gallery.html',
            controller: 'gallery'
        });

});
