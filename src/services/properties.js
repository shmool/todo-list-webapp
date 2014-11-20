(function () {


function PropertiesService () {
    var self = this;

    self.language = 'english';
}

angular.module('myModule')
    .service('properties', PropertiesService )


}());