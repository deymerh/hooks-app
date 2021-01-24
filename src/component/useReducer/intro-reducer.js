const initialState = [{
  id: 1,
  task: 'Buy bread',
  done: false
}];

const taskReducer = (state = initialState, action) => {
  if (action?.type === 'AddTask') {
    return [...state, action.payload]
  }
  return state
};

let tasks = taskReducer();

//Nuevo objeto a agregar
const newTask = {
  id: 2,
  task: 'Run',
  done: false
}
//Accion a ejecutar
const AddTaskReducer = {
  type: 'AddTask',
  payload: newTask
}

tasks = taskReducer(tasks, AddTaskReducer)
console.log(tasks);