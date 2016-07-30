/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_New extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        // Required field names.
        formStore.requiredFields = [
            'Tier',
            'Category',
            'Duration',
            'Description'
        ];

        var initialForm = formStore.getForm();
        this.state = { };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;

        return (
            <div className='work work--new'>
            
                {/* Tabs
                 ------------------------- */}
                <Work_New_Tabs />
                
                {/* Contract(s)
                 ------------------------- */}
                <Work_New_Contract key={formStore.activeForm.seed} />

                {/* Work Info
                 ------------------------- */}
                <div className='work-info'>
                    <div className='field'>
                        <label className='field__label'>Work Summary</label>
                        <p className='field__info'>Describe the overall goal for the contract(s). This field can help you remember the context of the above contract(s).</p>
                        <textarea className='field__input' placeholder='(Optional)' onInput={workStore.updateWorkSummary} />
                    </div>
                </div>

                {/* Buttons
                 ------------------------- */}
                <div className='buttons'>
                    <button className='button secondary' onClick={this.cancel}>Cancel</button>
                    <button className='button' onClick={this.submitForm.bind(this)}>Create</button>
                </div>

                <_Analytics />
            </div>
        );
    }
    
    // --------------------------------
    componentDidMount(){
        this.tokens = [ 
            PubSub.subscribe(workStore.events.lookups, this.update),
            PubSub.subscribe(workStore.events.activate, this.activateTab),
            PubSub.subscribe(formStore.events.formValidated, this.update),
            PubSub.subscribe(formStore.events.formDeleted, this.update)
        ]; 
    }

    // --------------------------------
    componentWillUnmount(){
        formStore.reset();
        PubSub.unsubscribe(this.tokens);
    }
    
    // --------------------------------
    activateTab = (message, seed) =>{
        formStore.getForm(seed);
        this.update(message);
    }
    
    // --------------------------------
    update = (message) => {
        this.forceUpdate();
    }

    // --------------------------------
    cancel(){
        window.location = '/';
    }

    // --------------------------------
    submitForm(){

        if (formStore.isValid()){
            // Commit to database.
            workStore.create();
        } else {
            // Re-render, this will force fields
            // that are invalid to show their errors.
            this.forceUpdate();
        }
    }
    
}