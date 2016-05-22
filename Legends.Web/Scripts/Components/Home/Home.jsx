/*
	-----------------------------------
	Home
	-----------------------------------
*/
class Home extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        this.state = { };
    }

    // --------------------------------
    render() {

        return (
        	<div className='home view'>

        		<div>Something lore-ish about legendary people for hire...</div>

        		<div className='actions'>
	        		<a href='#/Orders/New' className='button'>Hire</a>
	        		<a href='#/Orders/Browse' className='button'>Work</a>
        		</div>

        		<div className='orders'>
                    <h2>Popular Orders</h2>
                    {/* Popular Orders Grid */}
                    <_OrderGrid />
        		</div>
        	</div>
    	);
    }    
}