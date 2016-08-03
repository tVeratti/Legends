/*
	-----------------------------------
	Works
	-----------------------------------
*/
class Work extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
    }

    // --------------------------------
    render() {
        return (
            <div className='view'>                
                {/* Router View */}
                {this.props.children}
            </div>
        );
    }
}