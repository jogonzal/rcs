import * as React from 'react'
import { ComponentBase } from 'resub'

import TodosStore from '../store/TodosStore'

interface TodoListState {
    todos: string[]
}

export class TodoList extends ComponentBase<{}, TodoListState> {
    protected _buildState(props: {}, initialBuild: boolean): TodoListState {
        return {
            todos: TodosStore.getTodos()
        }
    }

    render() {
        return (
            <ul className='todos'>
                { this.state.todos.map(todo => <li>{ todo }</li> ) }
            </ul>
        )
    }
}