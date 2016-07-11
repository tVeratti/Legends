/*
	-----------------------------------
	_Field
	-----------------------------------
*/
class _Field extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        var required = formStore.requiredFields.indexOf(props.name) > -1;
        this.state = {
            value: props.value,
            required,
            isValid: true
        };
    }

    // --------------------------------
    render() {
        var inputNode = this.renderInput();
        var wrapperClassName = 'field';
        var labelClassName = 'label';
        if (this.state.required) labelClassName += ' required';
        if (!this.state.isValid) wrapperClassName += ' invalid';

        return (
            <div className={wrapperClassName}>                
                <label className={labelClassName}>{this.props.label}</label>
                <p className='info'>{this.props.info}</p>
                {inputNode}
                <p className='warning'>This field is required.</p>
            </div>
        );
    }

    // --------------------------------
    componentDidMount(){
        var subHandler = this.validate.bind(this, true);
        this.token = PubSub.subscribe(formStore.events.validate, subHandler);
    }
    
    // --------------------------------
    componentWillReceiveProps(nextProps){
        if (nextProps.value !== this.props.value){
            var isValid = this.isValid(nextProps.value);
            this.setState({ value: nextProps.value, isValid });
            
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
                this.setState({ value: null, isValid: !this.state.required });
            }
        }
    }

    // --------------------------------
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
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
        var isValid = this.isValid(value);
        this.setState({ value, isValid });
        this.reportChange(value);
    }

    // --------------------------------
    selecthandler = (value) => {
        var isValid = this.isValid(value);
        this.setState({ value, isValid });
        this.reportChange(value);
    }

    // --------------------------------
    isValid(value, isExternal){
        var isValid = true;
        if (this.state.required){
            // The field is required, its validity depends
            // on if the value is defined.
            isValid = formStore.isDefined(value);
        }

        if (!isExternal){
            // If the validation was not triggered by an external
            // component, trigger the form to revalidate and then
            // publish the event (mainly for tabs/errors).
            formStore.validateForm(formStore.activeForm);
            PubSub.publish(formStore.events.formChange);
        }

        return isValid;
    }

    // --------------------------------
    validate = (isExternal) => {
        var isValid = this.isValid(this.state.value, isExternal);
        this.setState({ isValid })
    }

    // --------------------------------
    reportChange(value){
        var reportHandler = 
            this.props.onChange ||
            this.props.onInput;

        if (typeof reportHandler  === 'function'){
            reportHandler(value);
        }
    }
}