/*
	-----------------------------------
	Works
	-----------------------------------
*/
class Work extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        // Set the User data from the application.
        userStore.setUser(props.User);
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