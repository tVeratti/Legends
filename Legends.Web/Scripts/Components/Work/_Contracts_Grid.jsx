/*
	-----------------------------------
	_Contracts
	-----------------------------------
*/
class _Contracts_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { contracts: props.contracts || [] };
    }

    // --------------------------------
    render() {
        var rowNodes = this.renderGrid();
        return (
            <div className='contracts grid'>
                {rowNodes}
            </div>
        );
    }

    // --------------------------------
    renderGrid(){
        var contracts = this.state.contracts || [];
        return contracts.map(contract => <_Contracts_Row {...contract} />);
    }
    
    // --------------------------------
    componentWillMount(){
        // Subscribe to any events that update the contracts list.
        this.token = PubSub.subscribe(workStore.events.contracts, this.update);
    }
    
    // --------------------------------
    update = (message, contracts) => {
        this.setState({ contracts });
    }
}