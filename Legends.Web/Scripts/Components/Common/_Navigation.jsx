/*
	-----------------------------------
	_Navigation
	-----------------------------------
*/
class _Navigation extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {user: props.User, open: false};
    }

    // --------------------------------
    render() {
        var modifier = this.state.open ?
            ' navigation__menu--open' : '';

        return (
            <div className='navigation'>
                <div className='navigation__wrapper'>
                    <div className={'navigation__menu' + modifier}>
                        <a className='navigation__title' href='#/'>Legends for Hire</a>

                        <button className='navigation__toggle' onClick={this.toggleMenu}>Menu</button>

                        <div className='navigation__links'>
                            <a className='navigation__link' href='#/Work/New'>New Contract</a>
                            <a className='navigation__link' href='#/Work/Browse'>Browse</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --------------------------------
    componentDidMount(){
        // Set the User data from the application.
        userStore.setUser(this.props.User);
    }

    // --------------------------------
    toggleMenu = (e) => {
        if (e) e.stopPropagation();
        
        var open = !this.state.open;
        if (open) document.addEventListener('click', this.toggleMenu);
        else document.removeEventListener('click', this.toggleMenu);

        this.setState({ open });
    }
}