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
        self.defaultList.addItem(new taskService.Task('Play', 'Spend some time in my playground', false, new Date().setHours(5)));
        self.defaultList.addItem(new taskService.Task('Love', 'Give a hug to a loved one', false, new Date().setHours(4)));
        self.defaultList.addItem(new taskService.Task('Make someone happy', 'Call a friend', true,  new Date().setHours(3)));
        self.defaultList.addItem(new taskService.Task('Learn', 'Angular-JS', false, new Date().setHours(2)));
        self.defaultList.addItem(new taskService.Task('Learn', 'Python', true,  new Date().setHours(1)));
    };

    self.getTasks = function () {
        self.initExample();
        return self.defaultList;
    };

}

angular.module('myModule')
    .service('listService', ['taskService', listService])

}());