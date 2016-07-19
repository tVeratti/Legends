/*
	-----------------------------------
	_Bids
	-----------------------------------
*/
class _Bids_Grid extends React.Component {
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
            <div className='bids'>
                <div className='grid'>
                    {rowNodes}
                </div>
            </div>
        );
    }

    // --------------------------------
    renderGrid(){
        var bids = this.props.bids || [];
        return bids.map(bid => <_Bids_Row {...bid} />);
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