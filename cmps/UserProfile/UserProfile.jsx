const { connect } = ReactRedux

import { onUserLogin } from '../../store/actions/user.actions.js'

class _UserProfile extends React.Component {

    state = {
        userName: '',
        fontClr: '#d2d9de',
        bcgClr: '#989898'
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }

    onLogin = (ev) => {
        const { userName, fontClr, bcgClr } = this.state
        ev.preventDefault()
        this.props.onUserLogin(userName, fontClr, bcgClr)

    }
    render() {
        const { userName, fontClr, bcgClr } = this.state
        return (
            <section className=" mt-2">

                <div className="container">
                    <h1>Your profile </h1>
                    <form onSubmit={this.onLogin}>

                        <label htmlFor="userName">Your name:</label>
                        <input type="text" id="userName" name="userName" value={userName} onChange={this.handleChange} />

                        <label htmlFor="fontClr">Font color:</label>
                        <input type="color" id="fontClr" name="fontClr" value={fontClr} onChange={this.handleChange} />

                        <label htmlFor="bcgClr">Background color:</label>
                        <input type="color" id="bcgClr" name="bcgClr" value={bcgClr} onChange={this.handleChange} />

                        <button>Save changes</button>
                    </form>

                </div>
            </section>
        )
    }
}


function mapStateToProps(state) {
    // console.log('state.todoModule =', state.userModule)

    return {
        userName: state.userModule.userName,
        fontClr: state.userModule.fontClr,
        bcgClr: state.userModule.bcgClr,
        activities: state.userModule.activities,
    }
}
const mapDispatchToProps = {
    onUserLogin

}
export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)