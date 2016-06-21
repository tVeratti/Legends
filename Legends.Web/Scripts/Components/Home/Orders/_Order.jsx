/*
	-----------------------------------
	_Order
    -----------------------------------
    Model:
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
class _Order extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        var model = this.props.model;

        // Identifiers
        var category =  orderStore.enums.Categories[model.CategoryId]
        var tier =      orderStore.enums.Tiers[model.TierId];
        var skill =     orderStore.enums.Skills[model.SkillId];
        
        var minimumTier = orderStore.enums.Tiers[1];
        
        // Details
        var description = this.getDescription();
        var duration = this.getDuration();

        return (
            <div className='row order' onClick={this.navigateToOrder}>

                <div className='cell'>
                    {/* Standard Request Identifiers */}
                    <div className='identifiers'>
                        <span className='tier'>{tier || 'Novice'}</span>
                        <span className='skill'>{skill || minimumTier}</span>
                    </div>

                    {/* Custom Request Description */}
                    <div className='description'>{description}</div>
                </div>

                <div className='cell'>
                    {/* Duration */}
                    {duration}
                </div>

                <div className='cell'>
                    {/* Bid Count */}
                    13 Bids
                </div>
            </div>
        );
    }

    // --------------------------------
    getDescription(){
        var description = this.props.model.Description || '';
        var ellipsisString = description.length > 50 ? '...' : '';
        var descriptionSub = description.substr(0, 50);

        return descriptionSub + ellipsisString;
    }

    // --------------------------------
    getDuration(){
        var model = this.props.model;

        var createdDateTime = model.CreatedDateTime;
        var endDateTime = moment(createdDateTime).add(model.Duration, 'h');

        var remainingHours = endDateTime.diff(new Date(), 'h');
        if (remainingHours < 1) remainingHours = '< 1';
        remainingHours += 'h';

        if (this.props.compact) remainingHours += ' left';

        return remainingHours;
    }

    navigateToOrder = (event) => {
        window.location = '/#/Orders/View/' + this.props.model.Id;
    }
}


//     public class CommentBidModel
//     {
//         // Table Data
//         public long Id { get; set; }
//         public string Offer { get; set; }
//         public string Description { get; set; }
//         public long CreatedById { get; set; }
//         public DateTime CreatedDateTime { get; set; }

//         // Joined Data
//         public string CreatedByName { get; set; }
//     }