/*
    -----------------------------------
    _Row_Contract
    -----------------------------------
*/
class _Row_Contract extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        // Model: Contract
        var model = this.props;
        
        // Details
        var duration = this.getRemainingDuration();
        var bidsName = 'Bids';
        if (model.BidsCount === 1) bidsName = 'Bid';

        return (
            <div className='grid__row' onClick={this.toContract}>

                {/* Standard Request Identifiers */}
                <div className='grid__cell'>
                    <_Contract_Summary model={model} modifier='--row' showDescription={true} />
                </div>

                {/* Remaining Duration */}
                <div className='grid__cell'>
                    {duration}
                </div>

                {/* Bid Count */}
                <div className='grid__cell'>
                    {model.BidsCount} {bidsName}
                </div>
            </div>
        );
    }

    // --------------------------------
    getRemainingDuration(){
        var model = this.props;
        var remainingHours = Math.round(workStore.getRemainingDuration(model));

        if (remainingHours < 1) remainingHours = '< 1';
        remainingHours += 'h';

        return remainingHours;
    }
    
    // --------------------------------
    toContract = (e) => {
        // View Contract (/Work/View/Contract/Id)
        window.location = '/#' + routes.contract_view + this.props.Id;
    }

    // --------------------------------
    toWork = (e) => {
        if (e) e.stopPropagation();

        // View Work Parent (/Work/View/Id)
        window.location = '/#' + routes.work_view + this.props.WorkId;
    }
}