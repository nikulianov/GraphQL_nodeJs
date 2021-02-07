const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Users {
    name: String!,
    age: Int!,
    email: String!,
  }

  type TestType {
    count: Int!,
    users: [Users!]!  
  }
  
  type Todo {
    id: ID!,
    title: String!,
    done: Boolean!,
    updatedAt: String,
    createdAt: String
    
  }

  type Query{
    test: TestType,
    random(min:Int!,max:Int!,count:Int!): [Float!],
    getTodos: [Todo!]!
  }
  
  input inputUser{
    name: String!,
    email: String!,
  }
  
  input TodoInput{
   title:String!
  }
  
  type Mutation{
    addTestUser(user: inputUser!): Users!
    createTodo(todo: TodoInput!): Todo!
    completeTodo(id: ID!): Todo!
    removeTodo(id: ID!): Boolean!
  }
`)