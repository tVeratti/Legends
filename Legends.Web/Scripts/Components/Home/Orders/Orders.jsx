/*
	-----------------------------------
	Orders
	-----------------------------------
*/
class Orders extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        return (
            <div className='orders view'>                
                {/* Router View */}
                {this.props.children}
            </div>
        );
    }
}