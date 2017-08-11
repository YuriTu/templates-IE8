const React = require("react");

const ReactDom = require("react-dom");

const ReactRouter = require("react-router");

const Router = ReactRouter.Router;

const Route = ReactRouter.Route;

const Link = ReactRouter.Link;

const IndexLink = ReactRouter.IndexLink;

const IndexRoute = ReactRouter.IndexRoute;

const hashHistory = ReactRouter.hashHistory;
class App extends React.Component{
    render(){
        return(
            <div>nice</div>
        )
    }
}

module.exports = App;

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
    </Router>
,document.getElementById("content"));