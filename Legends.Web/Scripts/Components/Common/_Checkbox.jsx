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
        var key = `${this.props.checked || 'c'}-${this.props.id}`;

        return (
            <div key={key} className='checkbox'> 
                <input className='checkbox__input' id={this.props.id} type='checkbox' onChange={this.props.onChange} checked={this.props.checked} />           
                <label className='checkbox__label' htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}