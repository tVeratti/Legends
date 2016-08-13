/*
	-----------------------------------
	_Bids
	-----------------------------------
*/
class _Bid_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        // Determine if the current user is the owner of the contract.
        // This is used to render ownerActions (Accept, Reject).
        this.userOwnsContract = userStore.getUser().Id === props.contract.CreatedById;

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
            selectedBids: [],
            filters: this.defaultFilters
        };
    }

    // --------------------------------
    render() {
        var filters = this.renderFilters();
        var grid = this.renderGrid();

        var actionButtons = this.renderActions();

        return (
            <div className='bid-grid'>
                {/* Bid Filters */}
                <div className='bid-grid__filters'>
                    {filters}
                </div>

                {/* Bid Grid */}
                <div className='bid-grid__grid'>
                    <div className='bid-grid__actions'>{actionButtons}</div>

                    {grid}
                </div>
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        // Subscribe to any events that update the contracts list.
        this.tokens = [
            PubSub.subscribe(bidStore.events.bids, this.update),
            PubSub.subscribe(workStore.events.resetGrid, this.update)
        ];

        // Get an initial list of bids.
        bidStore.read(this.state.filters);
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
        var bidRowNodes = bids.map(bid => {
            return (
                <_Bid_Row {...bid} 
                    contract={this.props.contract} 
                    selectRow={this.selectRow}
                    userOwnsContract={this.userOwnsContract} />
            );
        });

        return (bidRowNodes.length) ?
            <div className='grid'>{bidRowNodes}</div> :
            <div className='no-results'>No Bid Results</div>;
    }

    // --------------------------------
    renderActions(){
        if (this.userOwnsContract){
            // These are the actions available when the owner of the contract
            // is viewing the bids (Accept, Reject).
            var selectedRowCount = this.state.selectedBids.length;
            var acceptDisabled = selectedRowCount !== 1;
            var rejectDisabled = selectedRowCount < 1;
            return ([
                <button className='button button--simple' disabled={acceptDisabled}>Accept</button>,
                <button className='button button--simple' disabled={rejectDisabled}>Reject</button>
            ]);

        } else {
            // As a user that does not own the contract, this is the action available.
            return <button className='button button--simple' onClick={workStore.openBidForm}>Create Bid</button>;
        }
    }

    // --------------------------------
    filterChange = (value, fieldName) =>{
        // The _Field component will return a model for
        // the Select onChange, and since this function is used
        // for both Select and text input, check which type
        // of data is being reported and reduce down to the Id
        // for models (Select).
        if (typeof value === 'object') value = value.Id;

        var {...filters} = this.state.filters;
        filters[fieldName] = value;
        this.setState({ filters });

        bids.read(filters);
    }

    // --------------------------------
    update = (message, bids) => {
        var filters = message === workStore.events.resetGrid ?
            this.defaultFilters:
            this.state.filters;

        this.setState({ bids, filters });
    }

    // --------------------------------
    selectRow = (event) => {
        var selectedBids = this.state.selectedBids;
        var selectedId = +event.target.id;
        var checked = event.target.checked;

        if (checked){
            // Add the Bid Id to the state's Id array.
            selectedBids.push(selectedId);
        } else {
            // Remove the Id from the state's Id array.
            var existingIndex = selectedBids.indexOf(selectedId);
            if (existingIndex > -1){
                selectedBids.slice(existingIndex, 1);
            }
        }

        bidStore.selectedBids = selectedBids;
        this.setState({ selectedBids });
    }

    // --------------------------------
    accept = () => {

    }

    // --------------------------------
    reject = () => {
        
    }

}