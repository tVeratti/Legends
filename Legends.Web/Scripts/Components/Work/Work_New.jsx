/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_New extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { contracts: 1 };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;
        var contractTabs = this.renderContracts();
        
        return (
            <div>
                <form id='new-work' onSubmit={this.submitForm}>
                    {contractTabs}
                    
                    <div className='buttons'>
                        <button className='button'>Submit</button>
                    </div>
                </form>

            </div>
        );
    }
    
    // --------------------------------
    componentDidMount(){
        this.token = PubSub.subscribe(workStore.events.lookups, this.update);
    }
    
    // --------------------------------
    renderContracts(){
        var contractNodes = [];
        for (var i = 0; i < this.state.contracts; i++) {
           contractNodes.push(<Work_New_Contract index={i} />);
        };
        
        return contractNodes;
    }
    
    // --------------------------------
    update = (message) => {
        this.forceUpdate();
    }

    // --------------------------------
    submitForm = (event) => {
        event.preventDefault();
        var model = formStore.fields;
        model.Skill = model.Skill || {};
        workStore.create(model);
    }
    
}