/*
	-----------------------------------
	_Contracts
	-----------------------------------
*/
class _Contracts_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { 
            contracts: props.contracts || [],
            filters: {
                pageNumber: 1,
                pageSize: 10,
                sortBy: 'CreatedDateTime',
                sortOrder: 1,
                tiers: [],
                categories: [],
                skills: []
            }
        };
    }

    // --------------------------------
    render() {
        var rowNodes = this.renderGrid();
        var paginator = this.renderPaginator();
        return (
            <div className='contracts'>
                <div className='grid'>
                    {rowNodes}
                </div>
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        // Subscribe to any events that update the contracts list.
        this.token = PubSub.subscribe(workStore.events.contracts, this.update);
    }

    // --------------------------------
    renderGrid(){
        var contracts = this.state.contracts || [];
        return contracts.map(contract => <_Contracts_Row {...contract} />);
    }

    // --------------------------------
    renderPaginator(){
        var pageNumber = this.state.filters.pageNumber;
        var pageSize = this.state.filters.pageSize;
        return (
            <div className='paginator'>
                <span className='previous'></span>
                <span className='next'></span>
            </div>
        )
    }
    
    // --------------------------------
    update = (message, contracts) => {
        this.setState({ contracts });
    }
}