// React-Router object aliases
var { Router, Route, Link, hashHistory } = ReactRouter;
var routes = workStore.routes;

// Configure Routing
var routerNode = (
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        
        <Route path='Work' component={Work}>
            <Route path={routes.work_new} component={Work_New} />
            <Route path={routes.work_browse} component={Work_Browse} />
            <Route path={routes.work_view + ':Id'} component={Work_View} />

            <Route path={routes.contract_view + ':Id'} component={Contract_View} />
        </Route>
        
    </Router>
);

// Render
ReactDOM.render(routerNode, document.getElementById('main'));