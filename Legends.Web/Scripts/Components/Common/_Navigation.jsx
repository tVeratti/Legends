/*
	-----------------------------------
	_Navigation
	-----------------------------------
*/
class _Navigation extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {user: props.User};
    }

    // --------------------------------
    render() {
        return (
            <div className='navigation'>
                <div className='navigation__menu'>
                    <a className='navigation__link' href='#/'>Home</a>
                    <a className='navigation__link' href='#/Work/New'>New Contract</a>
                    <a className='navigation__link' href='#/Work/Browse'>Browse</a>
                </div>
            </div>
        );
    }

    componentDidMount(){
        // Set the User data from the application.
        userStore.setUser(this.props.User);
    }
}