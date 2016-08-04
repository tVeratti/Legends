/*
	-----------------------------------
	_Bids
	-----------------------------------
*/
class _Bid_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { 
            bids: [],
            filters: {
                ContractId: props.contract.Id,
                Filter: null,
                MinimumTier: 1,
                MaximumTier: 8,
                SortBy: 'CreatedDateTime',
                SortOrder: 1,
                Statuses: []
            }
        };
    }

    // --------------------------------
    render() {
        var filters = this.renderFilters();
        var grid = this.renderGrid();

        return (
            <div className='bid-grid'>
                {/* Bid Filters */}
                <div className='bid-grid__filters'>
                    {filters}
                </div>

                {/* Bid Grid */}
                <div className='bid-grid__grid'>
                    {grid}
                </div>
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        // Subscribe to any events that update the contracts list.
        this.token = PubSub.subscribe(workStore.events.bids, this.update);

        // Get an initial list of bids.
        workStore.readBids(this.state.filters);
    }

    // --------------------------------
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }

    // --------------------------------
    renderFilters(){
        var filters = this.state.filters;
        return (
            <div className='filters'>
                <input className='filters__field filters__field--filter' />
                <input className='filters__field filters__field--tier-min' />
                <input className='filters__field filters__field--tier-max' />
                <input className='filters__field filters__field--sort-by' />
                <input className='filters__field filters__field--sort-order' />
                <input className='filters__field filters__field--statuses' />
            </div>
        );
    }

    // --------------------------------
    renderGrid(){
        var bids = this.state.bids || [];
        var bidRowNodes = bids.map(bid => <_Bid_Row {...bid} contract={this.props.contract} />);

        return <div className='grid'>{bidRowNodes}</div>;
    }

    // --------------------------------
    update = (message, bids) => {
        this.setState({ bids });
    }

}