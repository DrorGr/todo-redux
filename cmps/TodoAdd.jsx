const { connect } = ReactRedux

export class TodoAdd extends React.Component {
    state = {
        isAdding: false,
        todoTitle: '',
        todoImportance: 3
    }
    onOpenAddModal = () => {
        const { isAdding } = this.state
        this.setState({ isAdding: !isAdding })
    }
    handleChange = (ev) => {
        const field = ev.target.name
        let value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }
    onAdd = () => {
        const { todoTitle, todoImportance } = this.state
        this.onOpenAddModal()
        this.props.addTodo(todoTitle, todoImportance )
    }
    render() {
        const { isAdding, todoTitle, todoImportance } = this.state
        // console.log ('TodoAdd props =',this.props)
        return (
            <div className="mt-1">
                <div className="container">

                {!isAdding &&
                    <button onClick={this.onOpenAddModal}>Add todo</button>
                }
                {isAdding &&
                    <form onSubmit={(ev) => this.onAdd(ev.preventDefault())}>

                        <label htmlFor="todoTitle">Title:</label>
                        <input autoComplete="off" type="text" name="todoTitle" id="todoTitle" value={todoTitle}
                            onChange={this.handleChange} />

                        <label htmlFor="todoImportance">Importance:</label>
                        <input type="number" name="todoImportance" id="todoImportance" min="1"
                            max="5" value={todoImportance} onChange={this.handleChange} />

                        <button>Add</button>
                        <button type="button" onClick={this.onOpenAddModal}>Cancel</button>
                    </form>
                }
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddToDo: (todoTitle, todoImportance) => {
//             dispatch({ type: `ADD`, todoTitle, todoImportance })
//         },

//     }
// }
// export const TodoAdd = connect(null, mapDispatchToProps)(_TodoAdd)