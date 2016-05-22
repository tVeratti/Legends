class _OrderGrid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { orders: [] };
    }

    // --------------------------------
    render() {
        var rowNodes = this.renderGrid();

        return (
            <div className='grid'>
                {rowNodes}
            </div>
        );
    }

    // --------------------------------
    componentWillMount() {
        orderStore.get().success(this.updateOrders)
    }

    // --------------------------------
    renderGrid(){
        var orders = this.state.orders || [];
        return orders.map(o => <_Order model={o} />);
    }

    // --------------------------------
    updateOrders = (orders) => {
        this.setState({ orders });
    }
}