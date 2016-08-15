/*
	-----------------------------------
	_Grid_Activity
	-----------------------------------
*/
class _Grid_Activity extends React.Component {
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
        return activity.map(activity => <_Row_Activity {...activity} />);
    }
}