/*
	-----------------------------------
	Work_View
	-----------------------------------
*/
class Work_View extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        var initialForm = formStore.getForm();
        this.state = { model: {} };
    }

    // --------------------------------
    render() {
        var model = this.state.model;
        return (
            <div className='work work--view'>
                <h2>Work</h2>
                <p>{model.Description}</p>
                
                <h2>Contracts</h2>
                <_Contract_Grid />
                
                <_Analytics />
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