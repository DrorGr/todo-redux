const { connect } = ReactRedux


class _About extends React.Component {
    render() {
        return (
            <section>
                <h2>About Us</h2>
                <h4>Our Value:  {this.props.val}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>
            </section>
        )
    }
}


function func1(state) {
    return {
        val: state.val,
    }
}


export const About = connect(func1)(_About)