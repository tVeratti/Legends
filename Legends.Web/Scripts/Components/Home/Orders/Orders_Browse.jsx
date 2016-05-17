/*
	-----------------------------------
	Orders_Browse
	-----------------------------------
*/
class Orders_Browse extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        var orderNodes = this.renderOrders();

        return (
            <div className='orders_browse'>
                Browse Orders
            </div>
        );
    }

    renderOrders = () => {
        var orders = this.props.Orders || [];
        return orders.map(o => <_Order {...o} />);
    }
}