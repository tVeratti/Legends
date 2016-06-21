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
                        <p className='subtitle'>New Order</p>
                    </a>
	        		<a href='#/Orders/Browse' className='button'>
                        WORK
                        <p className='subtitle'>Browse Orders</p>
                    </a>
        		</div>

        		<div className='orders'>
                    <h2>Popular Orders</h2>
                    {/* Popular Orders Grid */}
                    <_OrderGrid compact={true} />
        		</div>
        	</div>
    	);
    } 
    
    // --------------------------------
    componentWillMount(){
        var self = this;
        orderStore.getEnums().done(enums => {
            //Update store values and forceUpdate.
            orderStore.enums = enums;
            self.forceUpdate();
        });
    }   
}