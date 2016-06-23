/*
	-----------------------------------
	_Field
	-----------------------------------
*/
class _Field extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.value
        };
    }

    // --------------------------------
    render() {

        var inputNode = this.renderInput();

        return (
            <div className='field'>                
                <label>{this.props.label}</label>
                {inputNode}
            </div>
        );
    }

    // --------------------------------
    renderInput(){
        var type = this.props.type;
        var options = this.props.options;
        var fieldProps = {
            name: this.props.name,
            value: this.state.value,
            placeholder: this.props.placeholder,
            className: 'input'
        };

        if (options){
            // Input Type: Select
            var options = orderStore.mapSelectOptions(options);
            return <Select {...fieldProps} options={options} onChange={this.selecthandler} searchable={false} clearable={false} />;

        } else {
            // Input Type: Other
            switch(type){
                case 'textarea': return <textarea {...fieldProps} />;
                default: return <input {...fieldProps} onInput={this.inputHandler} />;
            }
        }
    }

    // --------------------------------
    inputHandler = (event) => {
        var value = event.target.value;
        this.setState({ value });
    }

    // --------------------------------
    selecthandler = (value) => {
        this.setState({ value });
    }
}