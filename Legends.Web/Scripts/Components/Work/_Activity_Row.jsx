/*
    -----------------------------------
    _Activity_Row
    -----------------------------------
*/
class _Activity_Row extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        // Model: Activity
        var model = this.props;
        var offset = new Date().getTimezoneOffset();
        var createdDateTime = moment(model.CreatedDateTime)
            .subtract(offset, 'm')
            .format('ddd, h:mmA');

        return (
            <div className='grid__row activity'>

                <div className='grid__cell'>
                
                </div>
                
                <div className='grid__cell'>{createdDateTime}</div>

            </div>
        );
    }
}