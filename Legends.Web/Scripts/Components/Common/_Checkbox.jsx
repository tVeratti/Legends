/*
	-----------------------------------
	_Checkbox
	-----------------------------------
*/
class _Checkbox extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
    }

    // --------------------------------
    render() {
        var id = 'checkbox-' + this.props.id;

        return (
            <div className='checkbox'> 
                <input className='checkbox__input' id={id} type='checkbox' />           
                <label className='checkbox__label' htmlFor={id}>{this.props.label}</label>
            </div>
        );
    }
}