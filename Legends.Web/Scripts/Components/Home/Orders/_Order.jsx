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
        return (
            <div>
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