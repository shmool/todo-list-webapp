(function () {


function modalService (modal) {
    var self = this;
    self.modals = {
        editTaskModal: {
            templateUrl: 'src/views/editTask/editTask.html',
            controller: 'editTaskController',
            controllerAs: 'editTaskCtrl',
            size: ''}
    };

    self.openModal = function (modalType, data, successFunc, cancelFunc) {
        //self.data = data;
        var modalOptions = self.modals.editTaskModal;
        modalOptions.resolve = {
            modalData: function () {
                return data;
            }
        };
        var modalInstance = modal.open(modalOptions);
        modalInstance.result.then(function (result) {
            successFunc(result);
        }, function () {
            cancelFunc();
        });
    }
}

angular.module('myModule')
    .service('modalService', ['$modal', modalService])


}());