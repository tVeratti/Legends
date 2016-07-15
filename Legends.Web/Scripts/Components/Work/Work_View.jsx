/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_View extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { model: {} };
    }

    // --------------------------------
    render() {
        var model = this.state.model;
        return (
            <div className='work work--view'>
                <h2>Work</h2>
                
                <_Contracts_Grid />
                
                <div className='buttons'>
                    <button className='button'>Bid</button>
                </div>
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        var workId = this.props.params.Id;
        workStore.find(workId).success(model => {
            // Update the view's model.
            this.setState({ model });
            
            // Publish this Work's contracts for the Grid to render.
            PubSub.publish(workStore.events.contracts, model.Contracts);
        });
    }
}