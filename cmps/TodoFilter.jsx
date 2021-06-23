const { connect } = ReactRedux

class _TodoFilter extends React.Component {

    state = {
        filterBy: '',
        searchBy: ''
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ ...this.state, [field]: value },
            this.props.onSetFilter(field, value)
        )
    }


    render() {
        const { filterBy, searchBy } = this.state
        return (
            <div className="mt-1">
                <div className="container">

                    <label htmlFor="searchBy">Search tasks:</label>
                    <input type="text" id="searchBy" name="searchBy" value={searchBy} onChange={this.handleChange} />

                    <label htmlFor="filterBy">Search tasks:</label>
                    <select name="filterBy" id="filterBy" name="filterBy" value={filterBy} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="completed">Completed</option>
                        <option value="not-completed">Active</option>
                        <option value="importance">Important</option>

                    </select>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('state.todoModule =', state.todoModule)

    return {
        filterBy: state.todoModule.filterBy,
        searchBy: state.todoModule.searchBy
    }
}
const mapDispatchToProps = {

}
export const TodoFilter = connect(mapStateToProps, mapDispatchToProps)(_TodoFilter)