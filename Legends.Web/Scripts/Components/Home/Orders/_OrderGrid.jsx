class _OrderGrid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { orders: [] };
    }

    // --------------------------------
    render() {
        var rowNodes = this.renderGrid();
        var headerNode = !this.props.compact ?
            this.renderHeader() :
            undefined;

        return (
            <div className='orders grid'>
                {headerNode}
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
        return orders.map(o => <_Order model={o} compact={this.props.compact} />);
    }

    // --------------------------------
    renderHeader(){
        return (
            <div className='row header'>
                <div className='cell'>Description</div>
                <div className='cell'>Time Left</div>
                <div className='cell'>Bids</div>
            </div>
        );
    }

    // --------------------------------
    updateOrders = (orders) => {
        this.setState({ orders });
    }
}