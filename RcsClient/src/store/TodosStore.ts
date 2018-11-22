import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub'

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: string[] = []

    addTodo(todo: string) {
        // Don't use .push here, we need a new array since the old _todos array was passed to the component by reference value
        this._todos = this._todos.concat(todo)
        this.trigger()
    }

    @autoSubscribe
    getTodos() {
        return this._todos
    }
}

const todoStore = new TodosStore()

setInterval(() => {
  console.log('Adding a TODO...')
  todoStore.addTodo('This is a TODO!!!' + Date.now())
}, 2000)

export default todoStore