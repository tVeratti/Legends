/*
	-----------------------------------
	_Analytics
	-----------------------------------
*/
class _Analytics extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { };
    }

    // --------------------------------
    render() { 
        return <span />;
    }

    componentDidMount(){
        var hash = location.hash || '';
        hash = hash.split('?')[0];

        ga('create', 'UA-80933991-1', 'auto');
     	ga('send', 'pageview', hash);
    }
}