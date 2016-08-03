/*
	-----------------------------------
	_BidDetails_Dialog_BidDetails_Dialog
	-----------------------------------
*/
class _BidDetails_Dialog extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { };
    }

    // --------------------------------
    render() { 
        var model = this.props.bid;

        var buttons = [
            <button className='button' onClick={this.props.close}>Close</button>
        ];

        return (
            <_Dialog title='Bid Details' buttons={buttons}>
                <p className='bid__tier'>{model.Tier}</p>
            </_Dialog>
        );  
    }
}