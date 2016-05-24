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
            <div className='orders grid'>
                <div className='row header'>
                    <div className='cell'>Description</div>
                    <div className='cell'>Time Left</div>
                    <div className='cell'>Bids</div>
                </div>

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