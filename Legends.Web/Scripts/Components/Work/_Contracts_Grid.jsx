/*
	-----------------------------------
	_Contracts
	-----------------------------------
*/
class _Contracts_Grid extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { contracts: [] };
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
        return contracts.map(c => <_Contracts_Row model={c} />);
    }
}