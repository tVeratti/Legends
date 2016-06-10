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

        		<div className='quote'>
                    <p>“Heroes get remembered, but legends never die.”</p>
                    <p>- Babe Ruth</p>
                </div>

        		<div className='actions'>
	        		<a href='#/Orders/New' className='button'>HIRE</a>
	        		<a href='#/Orders/Browse' className='button'>WORK</a>
        		</div>

        		<div className='orders'>
                    <h2>Popular Orders</h2>
                    {/* Popular Orders Grid */}
                    <_OrderGrid compact={true} />
        		</div>
        	</div>
    	);
    }    
}