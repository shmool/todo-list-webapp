(function () {

function List () {
    this.list = [];
}

List.prototype.addItem = function (item) {
    this.list.push(item);
};

List.prototype.removeItem = function (item) {
    this.list.splice(this.list.indexOf(item), 1);
};

List.prototype.updateItem = function (oldItem, newItem) {
    this.list[this.list.indexOf(oldItem)] = newItem;
};

function TaskList (category) {
    List.call(this);
    this.category = category;
}

TaskList.prototype = Object.create(List.prototype);
TaskList.prototype.constructor = TaskList;

function listService (taskService) {

    var self = this;

    self.lists = {};
    self.defaultList = [];

    self.addList = function (list, category) {
        var cat = list.category || category;
        if (cat)
            self.lists.category = list;
        else {
            console.log("addList - you did not specify a category.");
            self.defaultList = list || self.defaultList;
        }
    };

    self.initExample = function () {
        self.defaultList = new TaskList('demo list');
        self.defaultList.addItem(new taskService.Task('AAAA', 'aaaa', false, new Date().setHours(1)));
        self.defaultList.addItem(new taskService.Task('xxxx', 'aaaa', false, new Date().setHours(2)));
        self.defaultList.addItem(new taskService.Task('BBBB', 'bbbb', true,  new Date().setHours(3)));
        self.defaultList.addItem(new taskService.Task('AABB', 'abaa', false, new Date().setHours(4)));
        self.defaultList.addItem(new taskService.Task('ffff', 'bbbb', true,  new Date().setHours(5)));
    };

    self.getTasks = function () {
        self.initExample();
        return self.defaultList;
    };

}

angular.module('myModule')
    .service('listService', ['taskService', listService])

}());