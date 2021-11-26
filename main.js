import {nanoid} from './nanoid.js';

let tasks = [
  {
    id: nanoid(),
    title: 'Вынести мусор',
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Защитить интенсив на соточку',
    isDone: true,
  },
];


const taskTemplateElement = document.querySelector('#task-template').content;
const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const clearTaskButtonElement = mainElement.querySelector('.clear-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const addNewTask = (title) => tasks.push({
  id: nanoid(),
  title: title,
  isDone: false,
});

const clearTasks = () => (tasks = []);

addNewTask('Поесть');
console.log(tasks)