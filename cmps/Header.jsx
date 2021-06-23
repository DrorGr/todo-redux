const { connect } = ReactRedux
const { NavLink } = ReactRouterDOM


class _Header extends React.Component {

    componentDidMount() {

    }


    render() {
        return (
            <header className="flex">
                <div className="container flex space-btw">

                    <section className="logo">
                        <h1>
                            Your Todos
                        </h1>
                    </section>
                    <nav>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/todos">Your Todo's</NavLink>
                        <NavLink to="/user">Your profile</NavLink>
                    </nav>
                    <div>
                        <p>Total todo's: <span>{this.props.todos.length} </span></p>
                        {this.props.userName &&
                            <p>
                                Hello {this.props.userName}
                            </p>}

                    </div>


                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state.todoModule =', state.userModule)

    return {
        userName: state.userModule.userName,
        todos: state.todoModule.todos,
    }
}


export const Header = connect(mapStateToProps)(_Header)