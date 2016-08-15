// React-Router object aliases
var { Router, Route, Link, hashHistory } = ReactRouter;

const routes = {
    work_view: 		'/Work/View/',
    work_browse: 	'/Work/Browse',
    work_new: 		'/Work/New',
    contract_view: 	'/Work/View/Contract/',
    user_view: 	    '/Profile/'
};

// Configure Routing
var routerNode = (
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        
        <Route path='Work' component={Work}>
            <Route path={routes.work_new} component={Work_New} />
            <Route path={routes.work_browse} component={Work_Browse} />
            <Route path={routes.work_view + ':Id'} component={Work_View} />

            <Route path={routes.contract_view + ':Id'} component={Work_View_Contract} />
        </Route>

        <Route path='Profile' component={Profile}>
            <Route path={routes.user_view} component={Profile_View} />
        </Route>
        
    </Router>
);

// Render
ReactDOM.render(routerNode, document.getElementById('main'));