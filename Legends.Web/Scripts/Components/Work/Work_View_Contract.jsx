/*
	-----------------------------------
	Work_View_Contract
	-----------------------------------
*/
class Work_View_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { model: {}, timeLeft: 0 };
    }

    // --------------------------------
    render() {
        var model = this.state.model;
        var duration = this.getRemainingDuration();

        var offset = new Date().getTimezoneOffset();
        var createdDateTime = moment(model.CreatedDateTime)
            .subtract(offset, 'm')
            .format('dddd, MMMM Do YYYY, h:mmA');

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

                <h3>Bids</h3>
                <_Bids_Grid bids={model.Bids} />
                
                <div className='buttons'>
                    <button className='button' onClick={this.toBid}>Bid</button>
                </div>
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
    renderBids(){
        
        var bids = this.state.model.Bids || [];
        console.log('render', bids)
        return bids.map( bid =>{
            return <div className='contract__bid'>{bid.Status}</div>;
        });
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
    toBid = (event) => {
        workStore.createBid(this.state.model.Id).done(bids =>{
            console.log(bids)
            var model = this.state.model;
            model.Bids = bids;
            this.setState({ model });
        });
    }
}