/*
    -----------------------------------
    _Bid_Row
    -----------------------------------
*/
class _Bid_Row extends React.Component {
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

        var offer = `${model.Offer} (${model.Quantity})`;

        var nLabel = (/^[aeiou]$/i).test(model.Tier[0]) ? 'n' : '';

        return (
            <div className='grid__row bid'>

                <div className='grid__cell'>
                
                    {/* Bid Tier */}
                    <p className='bid__tier'>
                        <label className='bid__label'>{`I am a${nLabel}:`}</label>
                        <span className='bid__value'>{model.Tier}</span>
                    </p>

                    {/* Bid Offer Request */}
                    <p className='bid__offer'>
                        <label className='bid__label'>I want:</label>
                        <span className='bid__value'>{offer}</span>
                    </p>
                </div>

                <div className='grid__cell'>{model.Status}</div>
                <div className='grid__cell'>{createdDateTime}</div>

            </div>
        );
    }
}