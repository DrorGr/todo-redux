const { connect } = ReactRedux


class _Home extends React.Component {

    render() {
        return (
            <section className="flex mt-2">
                <div className="container">
                    <h1>Welcome!</h1>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        val: state.val,
        carsToShow: JSON.stringify(state.cars, null, 2),
        cart: JSON.stringify(state.shoppingCart, null, 2)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => {
            dispatch({ type: `INCREMENT` })
            dispatch({ type: `UPDATE_SCORE`, diff: 5 })
        },
        dec: () => {
            dispatch({ type: `DECREMENT` })
            dispatch({ type: `UPDATE_SCORE`, diff: -5 })
        },
        onAddCar: () => {
            const _id = 'c' + Date.now() % 100;
            const car = { _id, vendor: `Ferami-${_id}`, price: +(Math.random() * 10000).toFixed(2) }
            dispatch({ type: `ADD_CAR`, car })
        },
        onRemoveCar: () => {
            const carId = prompt('Car Id?');
            dispatch({ type: `REMOVE_CAR`, carId })
        },
        onAddToCart: () => {
            const _id = 'i' + Date.now() % 100;
            const item = { _id, name: `Ferami-${_id}`, price: +(Math.random() * 10000).toFixed(2) }
            dispatch({ type: `ADD_TO_CART`, item })
        },
    }
}


export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)