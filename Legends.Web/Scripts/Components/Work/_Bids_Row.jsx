/*
    -----------------------------------
    _Bids_Row
    -----------------------------------
*/
class _Bids_Row extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        // Model: Bid
        var model = this.props;
        var offset = new Date().getTimezoneOffset();
        var createdDateTime = moment(model.CreatedDateTime)
            .subtract(offset, 'm')
            .format('ddd, h:mmA');


        return (
            <div className='grid__row bid'>

                <div className='grid__cell'>
                    {/* Bid Identifiers */}
                    <p className='bid__identifiers'>
                        <span className='bid__tier'>{model.Tier}</span>
                        <span className='bid__quantity'>{model.Quantity}</span>
                        <span className='bid__offer'>{model.Offer}</span>
                    </p>

                    {/* Bid Description */}
                    <p className='bid__description'>{model.Description}</p>
                </div>

                <div className='grid__cell'>{model.Status}</div>
                <div className='grid__cell'>{createdDateTime}</div>

            </div>
        );
    }
}