(function () {


function taskService () {
    var self = this;

    self.Task = function (title, description, completed, date) {
        this.title = title;
        this.description = description;
        this.date = date || new Date();
        this.updated = this.date;
        this.completed = completed || false;
    };

    self.Task.prototype.update = function (newTitle, newDescription) {
        this.title = newTitle;
        this.description = newDescription;
        this.updated = new Date();
    };

    self.Task.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };

    self.getNewXTask = function (title, desc, completed, date) {
        return new self.Task(title, desc, completed, date);
    };

    self.Task.prototype.clone = function () {
        return self.getNewXTask(this.title, this.description, this.completed);
    };

    self.newTask = {
        title: "",
        description: "",
        date: "",
        updated: "",
        completed: false
    };


    self.resetTask = function () {
        self.task = {
            title: "",
            description: "",
            date: "",
            updated: ""
        };
    };

    self.clone = function (task) {
        return {
            title: task.title,
            description: task.description,
            date: task.date
        };
    };

    self.newTaskFromTitle = function (title) {
        self.task.title = title;
    };

    self.newTask = function (title, desc) {
        return {title: title, description: desc, date: new Date()};
    };

    self.getTask = function () {
        return self.task;
    };

    self.updateTask = function(task) {
        task.updated = new Date();
        return task;
    };
}

angular.module('myModule')
    .service('taskService', taskService )


}());