import { TodoEdit } from 'TodoEdit.jsx'

const { Link } = ReactRouterDOM

export function TodoPreview({ todo, removeTodo, toggleCompleted }) {


    function getTime(timestamp) {
        const date = new Date(timestamp).toLocaleDateString("en-UK")
        let time = new Date(timestamp).toLocaleTimeString("en-UK")
        time = time.slice(0, 5)
        return date + ', ' + time

    }

    // console.log('todo =', todo)
    return (
        <div className={todo.isCompleted? "todo-preview todo-completed" : "todo-preview"}>
            <h1>{todo.title}</h1>
            <h2> Importance: {todo.importance}</h2>
            <p>Created at: <span>{getTime(todo.createdAt)}</span></p>
            {todo.isCompleted &&
                <p>Completed at: <span>{getTime(todo.completedAt)}</span></p>
            }
            <i title="" onClick={() => removeTodo(todo._id)}>Delete</i>
            <i onClick={() => toggleCompleted(todo)}>Mark as completed</i>
            <Link to={`/todo/${todo._id}/edit`}>Edit</Link>
        </div >
    )

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onDelete: (id) => {
//             console.log('delete =')
//             console.log('id =', id)
//             dispatch({ type: `DELETE`, id })
//         },
//         onMarkComplete: (id) => {
//             console.log('will mark complete =')
//             console.log('id =', id)
//             dispatch({ type: `MARK_COMPLETE`, id })
//         },
//     }
// }
// export const TodoPreview = connect(null, mapDispatchToProps)(_TodoPreview)