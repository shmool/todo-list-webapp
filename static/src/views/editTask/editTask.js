(function () {


function editTaskController (modalInstance, taskData, properties) {

    var self = this;

    self.modalTextSets = {
        english: {
            newTask : {
                title: "New Task",
                ok: "Add Task"
            },
            editTask : {
                title: "Edit Task",
                ok: "Save Changes"
            },
            shortTitle: ["Title must be at least three characters long",
                         "Come on, you can do better than that",
                         "Is this a meaningful title for the task?",
                         "What does this mean??"
            ]

        }
    };

    self.task = taskData;

    self.modalText = self.modalTextSets[properties.language][taskData.editType];

    self.titleText = "." ;
    self.randomNumber = null;

    self.validateFormInput = function () {
        if (self.task.title.length < 4) {
            do {
                var newRandomNumber = Math.floor((Math.random() * 4) );
            } while (newRandomNumber === self.randomNumber);
            self.randomNumber = newRandomNumber;
            self.titleText = self.modalTextSets[properties.language].shortTitle[self.randomNumber];
            return false;
        }
        return true;
    };

    self.ok = function () {
        if (self.validateFormInput())
            modalInstance.close(self.task);
    };

    self.cancel = function () {
        modalInstance.dismiss('cancel');
    };
}


angular.module('myModule')
    .controller('editTaskController',
    ['$modalInstance', 'modalData', 'properties', editTaskController])


}());