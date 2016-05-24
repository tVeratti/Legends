/*
	-----------------------------------
	_Order
    -----------------------------------
    Model:
    - long          Id
    - string        Description
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

        var description = this.getDescription();
        var duration = this.getDuration();

        return (
            <div className='row order' onClick={this.navigateToOrder}>
                <div className='cell'>
                    {/* Standard Request Identifiers */}
                    <div className='identifiers'>
                        <span className='tier'>Master</span>
                        <span className='skill'>Swordsmith</span>
                    </div>

                    {/* Custom Request Description */}
                    <div className='description'>{description}</div>
                </div>

                <div className='cell'>
                    {duration}h
                </div>

                <div className='cell'>
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
        if (remainingHours < 1) return '< 1';
        else return remainingHours;
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