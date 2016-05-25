/*
	-----------------------------------
	_Navigation
	-----------------------------------
*/
class _Navigation extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        return (
            <div className='navigation'>
                <div className='menu'>
                    <a href='/'>Home</a>
                </div>
            </div>
        );
    }
}