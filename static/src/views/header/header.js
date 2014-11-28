(function () {


    function headerController (properties) {

        var self = this;

        self.propLog = properties.logData;

        self.rightClickContextProperties = properties.rightClickContext;

        self.rightClickToggleButtonTextOptions = {
            english : {
                actionName : "Right Click Context Menu",
                enable : "Enable",
                disable: "Disable"
            }
        };

        self.updateButtonText = function () {
            self.rightClickToggleButtonText =
                self.rightClickToggleButtonTextOptions
                    [properties.language]
                    [self.rightClickContextProperties.enabled ? 'disable' : 'enable'] +
                " " + self.rightClickToggleButtonTextOptions
                    [properties.language].actionName;
        };

        self.updateButtonText();

        self.toggleRightClick = function () {
            properties.toggleRightClickContext();
            self.updateButtonText();
            self.propLog = properties.logData;
        };

        self.alertRightClickProperties = function () {
            console.log(self.propLog);
            alert("Properties Log:\n" + properties.showLogData());
        };

    }

    angular.module('myModule')
        .controller('headerController', ['properties', headerController])
}());