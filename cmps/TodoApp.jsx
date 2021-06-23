import { TodoList } from 'TodoList.jsx'
import { TodoFilter } from 'TodoFilter.jsx'
import { TodoAdd } from 'TodoAdd.jsx'

import { loadTodos, removeTodo, addTodo, update } from '../store/actions/todo.actions.js'

const { connect } = ReactRedux

class _TodoApp extends React.Component {

    componentDidMount() {
        this.props.loadTodos()
    }

    toggleCompleted = (todo) => {
        console.log('todo =', todo)
        const { isCompleted } = todo
        this.props.update({ ...todo, isCompleted: !isCompleted, completedAt: Date.now() })
    }

    onSetFilter = (field, value) => {
        const filterBy = { [field]: value }
        console.log('filterBy =', filterBy)
        this.props.loadTodos(filterBy)

    }

    render() {
        const { todos, removeTodo, } = this.props
        return (
            <section className="flex mt-2">
                <div className="container">
                    <TodoAdd addTodo={this.props.addTodo} />
                    <TodoFilter onSetFilter={this.onSetFilter} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={this.toggleCompleted} />
                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    console.log('state.todoModule =', state.todoModule)
    return {
        todos: state.todoModule.todos,
        isLoading: state.todoModule.isLoading
    }
}
const mapDispatchToProps = {
    loadTodos,
    addTodo,
    removeTodo,
    update,
}

export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(_TodoApp)