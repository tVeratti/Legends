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
                    --------------------- */}
                <Work_New_Tabs />
                
                {/* Work Info
                    --------------------- */}
                <div className='work__info'>
                </div>

                {/* Contract(s)
                    --------------------- */}
                <Work_New_Contract key={formStore.activeForm.seed} />

                {/* Buttons
                    --------------------- */}
                <div className='buttons'>
                    <button className='button' onClick={this.submitForm.bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
    
    // --------------------------------
    componentDidMount(){
        this.tokens = [ 
            PubSub.subscribe(workStore.events.lookups, this.update),
            PubSub.subscribe(workStore.events.activate, this.activateTab),
            PubSub.subscribe(formStore.events.formChange, this.update)
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