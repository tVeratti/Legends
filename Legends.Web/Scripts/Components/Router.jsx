// React-Router object aliases
var { Router, Route, Link, hashHistory } = ReactRouter;

// Configure Routing
var routerNode = (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        
        <Route path='Work' component={Work}>
            <Route path='New' component={Work_New} />
            <Route path='Browse' component={Work_Browse} />
            <Route path='View/:Id' component={Work_View} />
        </Route>
        
    </Router>
);

// Render
ReactDOM.render(routerNode, document.getElementById('main'));