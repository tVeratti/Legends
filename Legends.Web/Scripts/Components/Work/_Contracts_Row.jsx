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

        return (
            <div className='contract row' onClick={this.toWork}>

                {/* Standard Request Identifiers */}
                <div className='cell'>
                    <div className='identifiers'>
                        <span className='tier'>{model.Tier || 'Novice'}</span>
                        <span className='skill'>{model.Skill || model.Category}</span>
                    </div>

                    {/* Custom Request Description */}
                    <div className='description'>{description}</div>
                </div>

                {/* Remaining Duration */}
                <div className='cell'>
                    {duration}
                </div>

                {/* Bid Count */}
                <div className='cell'>
                    13 Bids
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

        // Calculate the time left on the order.
        // Diff: CreatedDateTime, EndDateTime, Duration.
        var createdDateTime = model.CreatedDateTime;
        var endDateTime = moment.utc(createdDateTime).add(model.Duration, 'h');
        var remainingHours = endDateTime.diff(new moment.utc(), 'h');

        if (remainingHours < 1) remainingHours = '< 1';
        remainingHours += 'h';

        return remainingHours;
    }
    
    toWork = (e) => {
        // View Work View (Parent)
        window.location = '/#/Work/View/' + this.props.WorkId;
    }
}