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

        var description = model.Description || '';
        var ellipsisString = description.length > 50 ? '...' : null;
        var descriptionSub = description.substr(0, 50);

        return (
            <div className='order'>
                <div className='cell'>
                    {/* Standard Request Identifiers */}
                    <div className='identifiers'>
                        <span className='tier'>Master</span>
                        <span className='skill'>Swordsmith</span>
                    </div>

                    {/* Custom Request Summary */}
                    <div className='description'>{descriptionSub}{ellipsisString}</div>
                </div>

                <div className='cell'>
                    4h 37m
                </div>

                <div className='cell'>
                    13 Bids
                </div>
            </div>
        );
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