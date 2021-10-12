import axios from "axios";

export const saveTodo = async (todo) => {
  return new Promise((resolve, reject) => {
    axios.post("http://localhost:3030/api/todos", todo)
      .then(({data}) => resolve(data))
        .catch(e => reject("Failed to save Todo!"))
  })
}

export const loadTodos = () => new Promise((resolve, reject) => {
  axios.get("http://localhost:3030/api/todos")
    .then(({data}) => resolve(data))
      .catch(e => reject("Failed to load Todos"))
});

export const destroyTodo = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:3030/api/todos/${id}`).then(({data}) => {
          resolve(data);
        }).catch(e => reject("Failed to delete Todo!"))
    })
}

export const updateTodo = (todo) => {
    return new Promise((resolve, reject) => {
    axios.put(`http://localhost:3030/api/todos/${todo.id}`, todo).then(({data}) => {
      resolve(data);
    }).catch(e => {
      reject("Failed to update Todo !")
    })
  })
}