/*
	-----------------------------------
	Work_View_Contract
	-----------------------------------
*/
class Work_View_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { 
            model: {}, 
            timeLeft: 0, 
            showBidForm: false,
            showBidDetails: false
        };
    }

    // --------------------------------
    render() {
        var model = this.state.model;
        var duration = this.getRemainingDuration();
        var createdDateTime = userStore.getLocalTime(model.CreatedDateTime);
        var dialogNode = this.renderDialog();

        return (
            <div className='contract-view'>

                {/* Summary */}
                <div className='contract-view__summary'>
                    <_Contract_Summary model={model} modifier='--header' />
                </div>

                <div className='separator small' />

                {/* Details */}
                <div className='contract-view__details'>
                    <p>{model.Description}</p>
                    <div className='separator small' />

                    <p>Created {createdDateTime}</p>
                    <div className='separator small' />

                    <p>Time Left: {duration}</p>
                    <div className='separator small' />
                </div>

                {/* Parent */}
                <p className='contract-view__parent'>
                    <a href={'/#' + routes.work_view + model.WorkId}>View Parent</a>
                </p>

                <div className='contract-view__content'>

                    {/* Activity Log */}
                    <div className='contract-view__log'>
                    </div>

                    {/* Bids */}
                    <div className='contract-view__bids'>
                        <h3>Bids</h3>
                        <_Grid_Bids contract={model} />
                    </div>
                </div>

                {/* Dialog Bid Form */}
                {dialogNode}
            </div>
        );
    }


    // --------------------------------
    componentWillMount(){
        // Request contract data from workStore based on the
        // Contract Id in the route parameters.
        var contractId = this.props.params.Id;
        workStore.findContract(contractId)
            .success(model =>  this.setState({ model }) );

        // Update the page every minute (mainly for timers).
        setInterval(() => { this.forceUpdate(); }, 60000);

        workStore.ContractId = contractId;
        workStore.openBidDetails = this.openBidDetails;
        workStore.openBidForm = this.openBidForm;
    }

    // --------------------------------
    renderDialog(){
        switch(true){
            case this.state.showBidForm: 
                return <_BidForm_Dialog close={this.closeDialog} contract={this.state.model} />; 
            case this.state.showBidDetails: 
                return <_BidDetails_Dialog close={this.closeDialog} bid={this.state.activeBid} />;
        }
    }

    // --------------------------------
    getRemainingDuration(){
        var model = this.state.model;
        var remainingHours = workStore.getRemainingDuration(model);

        var splitArr = remainingHours.toString().split('.');
        var remainingMinutes = Math.round(60 * ((splitArr[1] || 0) / 100));

        return splitArr[0] + 'h ' + remainingMinutes + 'm';
    }

    // --------------------------------
    openBidForm = (event) => {
        this.setState({ showBidForm: true });
    }

    // --------------------------------
    openBidDetails = (bid, event) => {
        this.setState({ showBidDetails: true, activeBid: bid });
    }

    // --------------------------------
    closeDialog = (event) => {
        this.setState({ 
            showBidForm: false,
            showBidDetails: false
        });
    }
}