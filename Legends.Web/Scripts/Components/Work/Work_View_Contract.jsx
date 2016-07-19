/*
	-----------------------------------
	Work_View_Contract
	-----------------------------------
*/
class Work_View_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { model: {}, timeLeft: 0, showBidForm: false };
    }

    // --------------------------------
    render() {
        var model = this.state.model;
        var duration = this.getRemainingDuration();

        var offset = new Date().getTimezoneOffset();
        var createdDateTime = moment(model.CreatedDateTime)
            .subtract(offset, 'm')
            .format('dddd, MMMM Do YYYY, h:mmA');

        var bidForm = this.state.showBidForm ?
            <_BidForm_Dialog close={this.closeBidForm} contractId={model.Id} /> :
            undefined;

        return (
            <div className='work work--view'>
                <div className='contract contact--header'>
                    <h2>Contract
                        <div className='contract__identifiers'>
                            <span className='contract__tier'>{model.Tier}</span>
                            <span className='contract__type'>{model.Skill || model.Category}</span>
                        </div>
                    </h2>
                </div>

                <p>{model.Description}</p>
                <p>Created {createdDateTime}</p>
                <p>Time Left: {duration}</p>

                <p>
                    <a href={'/#/Work/View/' + model.WorkId}>View Parent</a>
                </p>

                {/* Bids */}
                <h3>Bids</h3>
                <_Bids_Grid bids={model.Bids} />
                
                {/* Buttons */}
                <div className='buttons'>
                    <button className='button' onClick={this.openBidForm}>Bid</button>
                </div>

                {/* Dialog Bid Form */}
                {bidForm}
            </div>
        );
    }

    // --------------------------------
    componentWillMount(){
        var contractId = this.props.params.Id;
        workStore.findContract(contractId).success(model => {
            // Update the view's model.
            this.setState({ model });
        });

        setInterval(() => {
            // Update the contract every set time.
            this.forceUpdate();
        }, 60000);
    }

    // --------------------------------
    componentDidMount(){
        this.token = PubSub.subscribe(workStore.events.bids, this.updateBids);
    }

    // --------------------------------
    getRemainingDuration(){
        var model = this.state.model;
        var remainingHours = workStore.getRemainingDuration(model);

        var splitArr = remainingHours.toString().split('.');
        var remainingMinutes = Math.round(60 * ((splitArr[1] || 0) / 100));

        return splitArr[0] + 'h ' + remainingMinutes + 'm';
    }

    updateBids = (message, bids) => {
        var model = this.state.model;
        model.Bids = bids;
        this.setState({ bids });
    }

    // --------------------------------
    openBidForm = (event) => {
        this.setState({ showBidForm: true });
    }

    closeBidForm = (event) => {
        this.setState({ showBidForm: false });
    }
}