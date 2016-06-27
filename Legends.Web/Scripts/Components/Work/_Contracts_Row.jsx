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
        var model = this.props.model;
        
        // Details
        var description = this.getDescription();
        var duration = this.getRemainingDuration();

        // View URL
        var workURL = '/#/Work/View/' + this.props.model.Id;

        return (
            <a className='contract row' href={workURL}>

                {/* Standard Request Identifiers */}
                <div className='cell'>
                    <div className='identifiers'>
                        <span className='tier'>{model.Tier}</span>
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
            </a>
        );
    }

    // --------------------------------
    getDescription(){
        var description = this.props.model.Description || '';

        if (description.length > 50){
            // Remove exceeding characters and add an ellipsis.
            description = description.substr(0, 50) + '...';
        }

        return description;
    }

    // --------------------------------
    getRemainingDuration(){
        var model = this.props.model;

        // Calculate the time left on the order.
        // Diff: CreatedDateTime, EndDateTime, Duration.
        var createdDateTime = model.CreatedDateTime;
        var endDateTime = moment(createdDateTime).add(model.Duration, 'h');
        var remainingHours = endDateTime.diff(new Date(), 'h');

        if (remainingHours < 1) remainingHours = '< 1';
        remainingHours += 'h';

        return remainingHours;
    }
}