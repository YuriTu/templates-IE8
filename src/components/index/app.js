const React = require("react");

const ReactDom = require("react-dom");

const ReactRouter = require("react-router");

const Router = ReactRouter.Router;

const Route = ReactRouter.Route;

const Link = ReactRouter.Link;

const hashHistory = ReactRouter.hashHistory;

const Example = require("./routeExample");

require("./app.scss");

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div>congratulation！</div>
                <div>Now you can create your React APP In IE8</div>
                <div>
                    <Link to="/example">You can click here to test React-route</Link>
                </div>
            </div>
        );
    }
}

module.exports = App;

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/example" component={Example}></Route>

    </Router>
    , document.getElementById("content"));

