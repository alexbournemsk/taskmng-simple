import {nanoid} from '../nanoid.js';
console.log('task-model loaded'); 

export const createModel = () => {
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

  const add = (title) => (tasks.push({
    id: nanoid(),
    title,
    isDone: false,
  }));

  const clear = () => (tasks = []);

  const getItems = () => tasks;

  const complete = (id) => {
    const existTask = tasks.find((task) => task.id === id);
    existTask.isDone = !existTask.isDone;
  };
 
  return { 
    add,
    clear,
    getItems,
    complete
  }
 
}
 
const temp = createModel.getItems;
console.log(temp);