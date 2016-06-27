/*
	-----------------------------------
	_OrderGrid
	-----------------------------------
*/
class _OrderGrid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { orders: [] };
    }

    // --------------------------------
    render() {
        var rowNodes = this.renderGrid();
        var headerNode = this.renderHeader();

        return (
            <div className='orders grid'>
                {headerNode}
                {rowNodes}
            </div>
        );
    }

    // --------------------------------
    componentWillMount() {
        // Get list of orders from database.
        // orderStore.getOrders().success(orders => {
        //     this.setState({ orders });
        // });
        console.log('x')
    }

    // --------------------------------
    renderGrid(){
        var orders = this.state.orders || [];
        return orders.map(o => <_OrderGrid_Row model={o} />);
    }

    // --------------------------------
    renderHeader(){
        if (!this.props.compact){
            return (
                <div className='row header'>
                    <div className='cell'>Description</div>
                    <div className='cell'>Time Left</div>
                    <div className='cell'>Bids</div>
                </div>
            );
        }
    }
}