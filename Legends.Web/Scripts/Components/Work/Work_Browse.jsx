/*
	-----------------------------------
	Works_Browse
	-----------------------------------
*/
class Work_Browse extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        return (
            <div>
                <_Contracts_Grid />
                <_Analytics />
            </div>
        );
    }
    
    // --------------------------------
    componentWillMount(){
        workStore.read();
    }
}