"use strict";
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
  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return this.tasks;
  },
  updateTask(id, title, priority) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.title = title ?? task.title;
      task.priority = priority ?? task.priority;
    }
    return this.tasks;
  },
  sortTaskByPriority() {
    this.tasks = this.tasks.sort((t1, t2) => t1.priority - t2.priority);
    return this.tasks;
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

const addTask = toDoList.addTask.bind(newTask);
const deleteTask = toDoList.deleteTask.bind(newTask);
const updateTask = toDoList.updateTask.bind(newTask);
const sortTaskByPriority = toDoList.sortTaskByPriority.bind(newTask);

addTask({ title: "Сходить в магазин", id: 2, priority: 3 });
console.log(newTask.tasks);

addTask({ title: "Сделать уроки", id: 3, priority: 2 });
console.log(newTask.tasks);

updateTask(1, "Помыть окна", 5);
console.log(newTask.tasks);

deleteTask(2);
console.log(newTask.tasks);

sortTaskByPriority();
console.log(newTask.tasks);
