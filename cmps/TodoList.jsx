import { TodoPreview } from 'TodoPreview.jsx'


export function TodoList({todos, removeTodo, toggleCompleted}) {
    // const { todos } = props
    return (
        // console.log('todos =', todos)
        <div className="todo-list">
            {todos.map(todo => <TodoPreview todo={todo} key={todo._id} removeTodo={removeTodo} toggleCompleted={toggleCompleted}/>)}
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         todos: state.todos,
//     }
// }

// export const TodoList = connect(mapStateToProps)(_TodoList)