/*
    -----------------------------------
    _Contract_Summary
    -----------------------------------
*/
class _Contract_Summary extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
    }

    // --------------------------------
    render() {
        var model = this.props.model;

        // Modifiers:
        //   --header
        //   --row
        var classModifier = this.props.modifier || '';

        var descriptionNode = this.props.showDescription ?
            <div className='contract-summary__description'>{model.Description}</div> :
            undefined;

        return (
            <div className={'contract-summary ' + classModifier}>

                {/* Contract Identifiers */}
                <div className='contract-summary__identifiers'>
                    <span className='contract-summary__tier'>{model.Tier}</span>
                    <span className='contract-summary__type'>{model.Skill || model.Category}</span>
                </div>

                {/* Contract Description */}
                {descriptionNode}

            </div>
        );
    }
}