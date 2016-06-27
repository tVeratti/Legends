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
	        		<a href='#/Orders/New' className='button'>
                        HIRE
                        <p className='subtitle'>New Contract</p>
                    </a>
	        		<a href='#/Orders/Browse' className='button'>
                        WORK
                        <p className='subtitle'>Browse Contracts</p>
                    </a>
        		</div>

        		<div className='orders'>
                    <p>Popular Contracts</p>
                    {/* Popular Orders Grid */}
                    <_OrderGrid compact={true} />
        		</div>
        	</div>
    	);
    }   
}