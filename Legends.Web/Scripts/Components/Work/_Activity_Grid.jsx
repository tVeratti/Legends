/*
	-----------------------------------
	_Activity_Grid
	-----------------------------------
*/
class _Activity_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { 
            bids: props.bids || [],
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
            <div className='activity-grid'>
                <div className='grid'>
                    {rowNodes}
                </div>
            </div>
        );
    }

    // --------------------------------
    renderGrid(){
        var activity = this.props.activity || [];
        return bids.map(bid => <_Activity_Row {...bid} />);
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
}