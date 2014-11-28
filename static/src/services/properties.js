(function () {


function PropertiesService (dateFilter) {
    var self = this;

    self.logData = [];

    self.logAction = function (message) {
        //self.logData.push("hello");
        self.logData.push({date: new Date() , action: message});

    };


    self.language = 'english';

    self.rightClickContext = {
        enabled : true
        };

    self.toggleRightClickContext = function (){
        self.rightClickContext.enabled = !self.rightClickContext.enabled;
        self.logAction('changed "right-click enabled" to: ' + self.rightClickContext.enabled)
    };


    self.autoClearSearch = true;

    self.toggleAutoClearSearch = function() {
        self.autoClearSearch = !self.autoClearSearch;
        self.logAction('changed "auto-clear search" to: ' + self.autoClearSearch);
    };

    self.showLogData = function () {
        var logString = "";
        //var item;
        for (var i = 0; i < self.logData.length; i++) {
            logString += dateFilter(self.logData[i].date, 'dd/MM/yyyy HH:mm:ss,sss') + "\n   "
            + self.logData[i].action + "\n";
        }
        return logString;
    }
}

angular.module('myModule')
    .service('properties', ['dateFilter', PropertiesService] )


}());