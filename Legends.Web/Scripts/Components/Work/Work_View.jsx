/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_View extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { order: {} };
    }

    // --------------------------------
    render() {
        var model = this.state.order;
        return (
            <div>
                View Work
                <p>{model.Description}</p>
                Submit Bid
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        var orderId = this.props.params.Id;
        workStore.find(orderId).success(order => {
            this.setState({ order });
        });
    }
}