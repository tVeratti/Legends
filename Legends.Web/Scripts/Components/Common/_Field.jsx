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
        // Track this field's value in the formStore
        // and browser session every time it renders.
        formStore.trackField(this.props.name, this.state.value);

        var inputNode = this.renderInput();
        var labelClassName = 'label';
        if (this.props.required) labelClassName += ' required';

        return (
            <div className='field'>                
                <label className={labelClassName}>{this.props.label}</label>
                <p className='info'>{this.props.info}</p>
                {inputNode}
            </div>
        );
    }
    
    // --------------------------------
    componentWillReceiveProps(nextProps){
        if (nextProps.value !== this.props.value){
            this.setState({ value: nextProps.value });
            
        } else {
            var nextOptions = nextProps.options;
            var thisOptions = this.props.options;
            
            if (nextOptions && thisOptions){
                // Compare options arrays.
                if (nextOptions.length === thisOptions.length){
                    var nextMap = nextOptions.map(o => o.value).join('');
                    var thisMap = thisOptions.map(o => o.value).join('');
                    if (nextMap === thisMap) return;
                }
                
                // Options changed; reset value.
                this.setState({ value: null });
            }
        }
    }
    
    // --------------------------------
    renderInput(){
        var type = this.props.type;
        var options = this.props.options;
        
        var fieldProps = {...this.props};
        fieldProps.value = this.state.value,
        fieldProps.className = 'input';
        fieldProps.clearable = fieldProps.clearable || false;

        if (options){
            // Input Type: Select
            var options = workStore.mapSelectOptions(options);
            return <Select {...fieldProps} options={options} onChange={this.selecthandler} searchable={false} />;

        } else {
            // Input Type: Other
            switch(type){
                case 'textarea': return <textarea {...fieldProps} onInput={this.inputHandler} />;
                default: return <input {...fieldProps} onInput={this.inputHandler} />;
            }
        }
    }

    // --------------------------------
    inputHandler = (event) => {
        var value = event.target.value;
        this.setState({ value });
        this.reportChange(value);
    }

    // --------------------------------
    selecthandler = (value) => {
        this.setState({ value });
        this.reportChange(value);
    }
    
    reportChange(value){
        if (typeof this.props.onChange === 'function'){
            this.props.onChange(value);
        }
    }
}