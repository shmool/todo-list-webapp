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
            }
        }
    };

    self.task = taskData;

    self.modalText = self.modalTextSets[properties.language][taskData.editType];

    self.ok = function () {
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