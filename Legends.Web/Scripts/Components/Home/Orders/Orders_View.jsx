/*
	-----------------------------------
	Orders_New
	-----------------------------------
*/
class Orders_View extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { order: {} };
    }

    // --------------------------------
    render() {
        var model = this.state.order;
        return (
            <div className='orders_view'>
                View Order
                <p>{model.Description}</p>
                Submit Bid
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        var orderId = this.props.params.Id;
        orderStore.find(orderId).success(order => {
            this.setState({ order });
        });
    }
}