/*
    -----------------------------------
    _Contracts_Row
    -----------------------------------
    props.Model:
    - long          Id
    - string        Description
    - int           CategoryId
    - int           SkillId
    - int           TierId    
    - long          CreatedById
    - DateTime      CreatedDateTime
    - string        CreatedByName
    - Bid[]         Bids
*/
class _Contracts_Row extends React.Component {
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
        var description = this.getDescription();
        var duration = this.getRemainingDuration();
        var bidsName = 'Bids';
        if (model.BidsCount === 1) bidsName = 'Bid';

        return (
            <div className='grid__row contract contract--row' onClick={this.toContract}>

                {/* Standard Request Identifiers */}
                <div className='grid__cell'>
                    <div className='contract__identifiers'>
                        <span className='contract__tier'>{model.Tier || 'Novice'}</span>
                        <span className='contract__skill'>{model.Skill || model.Category}</span>
                    </div>

                    {/* Custom Request Description */}
                    <div className='contract__description'>{description}</div>
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
    getDescription(){
        var description = this.props.Description || '';

        if (description.length > 50){
            // Remove exceeding characters and add an ellipsis.
            description = description.substr(0, 50) + '...';
        }

        return description;
    }

    // --------------------------------
    getRemainingDuration(){
        var model = this.props;
        var remainingHours = Math.round(workStore.getRemainingDuration(model));

        if (remainingHours < 1) remainingHours = '< 1';
        remainingHours += 'h';

        return remainingHours;
    }
    
    toContract = (e) => {
        // View Work View (Parent)
        window.location = '/#/Work/View/Contract/' + this.props.Id;
    }
}