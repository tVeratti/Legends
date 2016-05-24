// React-Router object aliases
var { Router, Route, Link, hashHistory } = ReactRouter;

// Configure Routing
var routerNode = (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        
        <Route path='Orders' component={Orders}>
            <Route path='New' component={Orders_New} />
            <Route path='Browse' component={Orders_Browse} />
            <Route path='View/:Id' component={Orders_View} />
        </Route>
        
    </Router>
);

// Render
ReactDOM.render(routerNode, document.getElementById('main'));