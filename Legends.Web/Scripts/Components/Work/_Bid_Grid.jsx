/*
	-----------------------------------
	_Bids
	-----------------------------------
*/
class _Bid_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.defaultFilters = {
            Filter: null,
            MinimumTier: 1,
            MaximumTier: 8,
            Statuses: [],
            SortBy: 'CreatedDateTime',
            SortOrder: 1
        };

        this.state = { 
            bids: [],
            filters: this.defaultFilters
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
                    <div className='bid-grid__actions'>
                        <button className='button button--simple button--disabled'>Accept</button>
                        <button className='button button--simple button--disabled'>Reject</button>
                        <button className='button button--simple' onClick={workStore.openBidForm}>Create Bid</button>
                    </div>
                    {grid}
                </div>
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        // Subscribe to any events that update the contracts list.
        this.tokens = [
            PubSub.subscribe(workStore.events.bids, this.update),
            PubSub.subscribe(workStore.events.resetGrid, this.update)
        ];

        // Get an initial list of bids.
        workStore.readBids(this.state.filters);
    }

    // --------------------------------
    componentWillUnmount(){
        PubSub.unsubscribe(this.tokens);
    }

    // --------------------------------
    renderFilters(){
        var filters = this.state.filters;
        var lookups = workStore.lookups;

        return (
            <div className='filters'>
                <div className='filters__field filters__field--filter'>
                    <_Field name='Filter' 
                        label='Search' 
                        value={filters.Filter}
                        onChange={this.filterChange} />
                </div>

                <div className='filters__field filters__field--tier-min'>
                    <_Field name='MinimumTier' 
                        label='Minimum Tier' 
                        options={lookups.Tiers}
                        onChange={this.filterChange} />
                </div>

                <div className='filters__field filters__field--tier-max'>
                    <_Field name='MaximumTier' 
                        label='Maximum Tier' 
                        options={lookups.Tiers}
                        onChange={this.filterChange} />
                </div>

                <div className='filters__field filters__field--sort-by' />
                <div className='filters__field filters__field--sort-order' />
                <div className='filters__field filters__field--statuses' />
            </div>
        );
    }

    // --------------------------------
    renderGrid(){
        var bids = this.state.bids || [];
        var bidRowNodes = bids.map(bid => <_Bid_Row {...bid} contract={this.props.contract} />);
        if (bidRowNodes.length) return <div className='grid'>{bidRowNodes}</div>;
        else return <div className='no-results'>No Bid Results</div>;
    }

    // --------------------------------
    filterChange = (value, fieldName) =>{
        if (typeof value === 'object') value = value.Id;

        var {...filters} = this.state.filters;
        filters[fieldName] = value;
        this.setState({ filters });

        workStore.readBids(filters);
    }

    // --------------------------------
    update = (message, bids) => {
        var filters = message === workStore.events.resetGrid ?
            this.defaultFilters : this.state.filters;

        this.setState({ bids, filters });
    }

}