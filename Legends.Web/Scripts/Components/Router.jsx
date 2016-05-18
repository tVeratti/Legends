// React-Router object aliases
var { Router, Route, Link, browserHistory } = ReactRouter;

// Configure Routing
var routerNode = (
    <Router history={browserHistory}>
        <Route path='/' component={Home} />

        {/* Orders */}
        <Route path='Orders' component={Orders}>
            <Route path='New' component={Orders_New}/>
            <Route path='Browse' component={Orders_Browse}/>
        </Route>
        
        <Route path='/#/Profile/:id' component={Profile}/>
    </Router>
);

// Render
ReactDOM.render(routerNode, document.getElementById('main'));