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
                <_Grid_Contract />
                <_Analytics />
            </div>
        );
    }
    
    // --------------------------------
    componentWillMount(){
        workStore.read();
    }
}