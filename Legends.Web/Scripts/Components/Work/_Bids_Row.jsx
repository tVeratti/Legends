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
            <div className='grid__row'>

                <div className='grid__cell'>{model.Description}</div>
                <div className='grid__cell'>{model.Status}</div>
                <div className='grid__cell'>{createdDateTime}</div>

            </div>
        );
    }
}