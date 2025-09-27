const toDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask: function (task) {
    if (task?.title && task?.id && task?.priority) {
      return this.tasks.some((t) => t.id === task.id)
        ? this.tasks
        : this.tasks.push(task);
    }
    return this.tasks;
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return this.tasks;
  },
  updateTask: function (id, title, priority) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.title = title ?? task.title;
      task.priority = priority ?? task.priority;
    }
    return this.tasks;
  },
  sortTaskByPriority: function () {
    this.tasks = this.tasks.sort((t1, t2) => t1.priority - t2.priority);
    return this.tasks;
  },
};

toDoList.addTask({ title: "Сходить в магазин", id: 2, priority: 3 });
console.log(toDoList.tasks);

toDoList.addTask({ title: "Сделать уроки", id: 3, priority: 2 });
console.log(toDoList.tasks);

toDoList.updateTask(1, "Помыть окна", 5);
console.log(toDoList.tasks);

toDoList.deleteTask(2);
console.log(toDoList.tasks);

toDoList.sortTaskByPriority();
console.log(toDoList.tasks);
