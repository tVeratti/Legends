/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_New extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        var contracts = [formStore.getForm()];
        this.state = { 
            contracts,
            activeContract: contracts[0] 
        };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;
        var contractTabs = this.renderContractTabs();
        var activeContract = this.state.activeContract;

        var submitHandler = this.submitForm.bind(this, this.state.contracts);
        
        return (
            <div>
                {/* Tabs
                    --------------------- */}
                <div className='tabs'>
                    {contractTabs}
                </div>
                    
                {/* Contract
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
    }
    
    // --------------------------------
    renderContractTabs(){
        var self = this;
        var activeSeed = this.state.activeContract.seed;

        // Create one tab for each active contract.
        var tabNodes = this.state.contracts.map(form => {
            var clickHandler = self.activateTab.bind(self, form);
            var tabClassName = 'tab button';
            var isActive = form.seed === activeSeed;
            if (isActive){
                tabClassName += ' active';
                clickHandler = undefined;
            }

            return <button key={form.seed} className={tabClassName} onClick={clickHandler}>{form.seed}</button>;
        });

        // Add a final tab used to create new contracts.
        var newHandler = this.newContract.bind(this);
        tabNodes.push(<button className='tab button new' onClick={newHandler}>+</button>);
        
        return tabNodes;
    }

    // --------------------------------
    activateTab(form){
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
        workStore.create(contracts);
    }
    
}