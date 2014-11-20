(function () {


function routes($routeProvider) {

    $routeProvider

        .when('/welcome', {
            templateUrl: 'views/welcome/welcome.html'
            //controller: 'welcomeController'
        })


        .when('/list', {
            templateUrl: 'views/tasksList/tasksList.html'
            //controller: 'taskListController'
        })


        .when('/newtask', {
            templateUrl: 'views/editTask/editTask.html'
            //controller: 'editTaskController',
        })

        .otherwise({redirectTo: '/welcome'})

}

angular.module('myModule')
    .config(routes)


}());