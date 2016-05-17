/*
	-----------------------------------
	Home
	-----------------------------------
*/
class Home extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        return (
        	<div className='home view'>
        		<h1>Header</h1>

        		<div className='actions'>
	        		<a href='#/Orders/New'>Hire</a>
	        		<a href='#/Orders/Browse'>Work</a>
        		</div>

        		<div className='orders'>
        		</div>
        	</div>
    	);
    }
}