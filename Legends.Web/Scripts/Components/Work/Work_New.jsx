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

        var contracts = [formStore.getForm()];
        this.state = { 
            contracts,
            activeContract: contracts[0] 
        };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;
        var activeContract = this.state.activeContract;

        var submitHandler = this.submitForm.bind(this, this.state.contracts);
        
        return (
            <div>
                {/* Tabs
                    --------------------- */}
                <Work_New_Tabs activeContract={activeContract} 
                    contracts={this.state.contracts}
                    activateTab={this.activateTab}
                    newContract={this.newContract} />
                
                {/* Work Info
                    --------------------- */}
                <div className='work-info'>
                </div>

                {/* Contract(s)
                    --------------------- */}
                <Work_New_Contract key={activeContract.seed} form={activeContract} />

                {/* Buttons
                    --------------------- */}
                <div className='buttons'>
                    <button className='button' onClick={submitHandler}>Submit</button>
                </div>
            </div>
        );
    }
    
    // --------------------------------
    componentDidMount(){
        this.token = PubSub.subscribe(workStore.events.lookups, this.update);
    }

    // --------------------------------
    componentWillUnmount(){
        formStore.reset();
        PubSub.unsubscribe(this.token);
    }
    
    // --------------------------------
    activateTab = (form) =>{
        this.setState({ activeContract: form });
    }

    // --------------------------------
    newContract(){
        var contracts = this.state.contracts;
        var newContract = formStore.getForm();
        contracts.push(newContract);

        this.setState({ contracts, activeContract: newContract });
    }
    
    // --------------------------------
    update = (message) => {
        this.forceUpdate();
    }

    // --------------------------------
    submitForm(contracts){
        if (formStore.isValid()){
            // Commit to database.
            workStore.create(contracts);
        } else {
            // Re-render, this will force fields
            // that are invalid to show their errors.
            this.forceUpdate();
        }
    }
    
}