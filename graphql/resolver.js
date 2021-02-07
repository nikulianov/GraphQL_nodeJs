let Todo = require('./../models/todo')

const users = [
  { name: 'Igor', age: '30', email: 'igor@mail.ru' },
  { name: 'Elena', age: '23', email: 'elena@gmail.com' }
]

module.exports = {
  test() {
    return {
      count: Math.trunc(Math.random() * 10),
      users
    }
  },
  random({ min, max, count }) {
    let arr = []
    for (let i = 0; i < count; i++) {
      let random = Math.random() * (max - min) + min
      arr.push(random)
    }
    return arr
  },
  addTestUser({ user: { name, email } }) {
    let user = {
      name, email,
      age: Math.ceil(Math.random() * 30)
    }
    users.push(user)
    return user
  },
  async getTodos() {
    try {
      return Todo.findAll()
    } catch (e) {
      throw new Error(e)
    }
  },
  async createTodo({todo}){
    try {
      return await Todo.create({
        title: todo.title,
        done:false
      })

    } catch (e) {
      throw new Error('Title is required')
    }
  },
  async completeTodo({id}){
    try{
    let todo = await Todo.findByPk(id)
    todo.done = true
    await todo.save()
    return todo
    }catch (e) {
      throw new Error('id is required')
    }
  },
  async removeTodo({id}){
    try{
      let todos = await Todo.findAll({
        where:{id}
      })
      await todos[0].destroy()
      return true
    }catch (e) {
      throw new Error('id is required')
      return false
    }

  }
}