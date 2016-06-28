/*
	-----------------------------------
	App
	-----------------------------------
*/
class App extends React.Component {
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
	        		<a href='#/Work/New' className='button'>
                        HIRE
                        <p className='subtitle'>New Contract</p>
                    </a>
	        		<a href='#/Work/Browse' className='button'>
                        WORK
                        <p className='subtitle'>Browse Contracts</p>
                    </a>
        		</div>

        		<div className='orders'>
                    {/* Popular Work Grid */}
                    <_Contracts_Grid />
        		</div>
        	</div>
    	);
    }   
    
    componentWillMount(){
        workStore.read();
    }
}