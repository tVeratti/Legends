/*
	-----------------------------------
	_Dialog
	-----------------------------------
*/
class _Dialog extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { };
    }

    // --------------------------------
    render() { 
        return (
            <div className='dialog'>
                <div className='dialog__overlay' />

                <div className='dialog__window'>
                    <div className='dialog__title'>{this.props.title}</div>
                    <div className='dialog__body'>{this.props.children}</div>
                    <div className='dialog__buttons'>{this.props.buttons}</div>
                </div>
            </div>
        );
    }
}