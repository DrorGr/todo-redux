const Router = ReactRouterDOM.HashRouter
const { Switch, Route } = ReactRouterDOM
const { Provider } = ReactRedux;

const history = History.createBrowserHistory()
import {routes} from './routes.js'
import {store} from "./store/store.js";


import {Header} from './cmps/Header.jsx'
import {Footer} from './cmps/Footer.jsx'

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <div className="main-app">
                <Header/>
                <main>
                    <Switch>
                        {routes.map(route=> <Route key={route.path} exact component={route.component} path={route.path} /> )}
                    </Switch>
                </main>
            <Footer/>
            </div>
            </Provider>
        )
    }
}


ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
)