(function () {


function routes($routeProvider) {

    $routeProvider

        .when('/welcome', {
            templateUrl: 'src/views/welcome/welcome.html'
            //controller: 'welcomeController'
        })


        .when('/list', {
            templateUrl: 'src/views/tasksList/tasksList.html'
            //controller: 'taskListController'
        })

        .when('/sjlist', {
            templateUrl: 'src/views/sjTableList/sjTableList.html'
            //controller: 'taskListController'
        })


        .when('/newtask', {
            templateUrl: 'src/views/editTask/editTask.html'
            //controller: 'editTaskController',
        })

        .otherwise({redirectTo: '/welcome'})

}

angular.module('myModule')
    .config(routes)


}());