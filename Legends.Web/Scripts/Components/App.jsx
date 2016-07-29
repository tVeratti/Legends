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
                    <p className='quote__text'>“Heroes get remembered, but legends never die.”</p>
                    <p className='quote__author'>- Babe Ruth</p>
                </div>
				
        		<div className='actions'>
	        		<a href='#/Work/New' className='button actions__button'>
                        <p className='button__title'>HIRE</p>
                        <p className='button__subtitle'>New Contract</p>
                    </a>

	        		<a href='#/Work/Browse' className='button actions__button'>
                        <p className='button__title'>WORK</p>
                        <p className='button__subtitle'>Browse Contracts</p>
                    </a>
        		</div>

        		<div className='orders'>
                    {/* Popular Work Grid */}
                    <_Contract_Grid />
        		</div>
        	</div>
    	);
    }   
    
    // --------------------------------
    componentWillMount(){
        workStore.read();
    }
}