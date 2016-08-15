/*
	-----------------------------------
	_Grid_Contracts
	-----------------------------------
*/
class _Grid_Contracts extends React.Component {
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
            <div className='contract-grid'>
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
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }

    // --------------------------------
    renderGrid(){
        var contracts = this.state.contracts || [];
        return contracts.map(contract => <_Row_Contract {...contract} />);
    }

    // --------------------------------
    renderPaginator(){
        var pageNumber = this.state.filters.pageNumber;
        var pageSize = this.state.filters.pageSize;
        return (
            <div className='paginator'>
                <span className='paginator__previous'></span>
                <span className='paginator__next'></span>
            </div>
        )
    }
    
    // --------------------------------
    update = (message, contracts) => {
        this.setState({ contracts });
    }
}