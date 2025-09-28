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

function removePassword(reset) {
  this.password = reset ? undefined : this.password;
}

const user = {
  login: "example@mail.com",
  password: "12345",
};

// const removePasswordUser = removePassword.bind(user);
// removePasswordUser(true);
const removePasswordUser = removePassword.bind(user, true);
removePasswordUser();
console.log(user);

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user_new() {
  const userObj = { ...userInfo };
  return function () {
    return userObj;
  };
}

const user1 = user_new();
console.log(user1());
user1().increase(100);
user1().increase(100);
console.log(user1());

const user2 = user_new();
console.log(user2());
user2().increase(200);
console.log(user2());
