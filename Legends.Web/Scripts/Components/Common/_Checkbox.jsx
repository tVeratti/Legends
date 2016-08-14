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
        return (
            <div className='checkbox'> 
                <input className='checkbox__input' id={this.props.id} type='checkbox' onChange={this.props.onChange} />           
                <label className='checkbox__label' htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}