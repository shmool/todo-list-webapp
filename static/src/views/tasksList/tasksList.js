(function () {


    function listController (listService, modalService, log, taskService, properties) {

        var self = this;

        self.rightClickContextProperties = properties.rightClickContext;

        self.tasks = listService.getTasks();
        self.activeTask = null;

        self.toggleAutoClearSearchTextOptions = {
            english: {
                allow : "Clear search after adding item",
                deny : "Keep search after adding item"
            }
        } ;

        self.getToggleAutoClearSearchText = function () {
            return  self.toggleAutoClearSearchTextOptions
                [properties.language]
                [properties.autoClearSearch ? 'deny' : 'allow'];
        };

        self.toggleAutoClearSearch = function () {
            properties.toggleAutoClearSearch();
        };

        // TODO: this is ugly... make a directive for table header
        self.tableTitles = [
            //completed: {title: "Done", reverse: false, hide: true, place: 0},
            {field: "title", place: '1'},
            {field: "description", place: '2'},
            {field: "date", place: '4'},
            {field: "updated", place: '3'},
            {field: "actions", place: '5'}
        ];

        self.tableTitleProperties = {
            title: {title: "Title", reverse: false, hide: false},
            description: {title: "Description", reverse: false, hide: false},
            date: {title: "Created", reverse: true, hide: false},
            updated: {title: "Updated", reverse: false, hide: false},
            actions: {title: "Actions", reverse: "irrelevant", hide: false}
        };

        self.getProperties = function (tableTitle) {
            return self.tableTitleProperties[tableTitle.field] ||
                self.tableTitleProperties[tableTitle];
        };

        self.sortBy = "date";

        self.sort = function(predicate) {
            if (self.sortBy === predicate) {
                self.tableTitleProperties[predicate].reverse =
                    !self.tableTitleProperties[predicate].reverse;
            }
            else {
                self.sortBy = predicate;
            }
        };

        self.newTaskModal = function () {
            self.activeTask = null;
            self.open1({title: self.search});
            if (properties.autoClearSearch)
                self.search = "";
        };

        self.open1 = function(input) {
            var taskData = {
                title : input.title || "",
                description : input.description || "",
                editType : (input.date? 'editTask' : 'newTask')
            };

            modalService.openModal('editTaskModal', taskData, self.successFunc, self.cancelFunc);
        };

        self.successFunc = function (task) {
            if (self.activeTask != null) {
                self.activeTask.update(task.title, task.description);
            }
            else {
                self.tasks.addItem(taskService.getNewXTask(task.title, task.description));
            }
        };

        self.cancelFunc = function () {
            log.info('Modal dismissed at: ' + new Date());
        };

        self.clearSearch = function () {
            self.search = ""
        };


        self.hideCompleted = false;
        self.toggleHideCompleted = function () {
            self.hideCompleted = !self.hideCompleted;
        };

        self.editTask = function (task) {
            self.activeTask = task;
            self.open1(task);
        };

        self.removeTask = function (task) {
            console.log("removing " + task.title);
            self.tasks.removeItem(task);
        };

    }

    angular.module('myModule')
        .controller('listController',
        ['listService', 'modalService', '$log', 'taskService', 'properties', listController])


}());