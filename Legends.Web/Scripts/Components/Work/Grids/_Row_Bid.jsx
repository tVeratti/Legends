/*
    -----------------------------------
    _Row_Bid
    -----------------------------------
*/
class _Row_Bid extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        // Model: Bid
        var model = this.props;
        var createdDateTime = userStore.getLocalTime(model.CreatedDateTime, 'ddd, hA');

        var mineLabel = userStore.user.Id === model.CreatedById ?
            <p>My offer</p> : undefined;

        var checkboxNode = this.renderCheckbox();

        var rowClassName = `grid__row bid bid--${this.props.Status.toLowerCase()}`;
        return (
            <div key={model.Id} className={rowClassName}>
                {checkboxNode}

                <div className='grid__cell grid__cell--full' onClick={this.openBidDetails}>
                    {/* Bid Tier */}
                    <p className='bid__tier'>{model.Tier}</p>

                    {/* Bid Offer Request */}
                    <p className='bid__offer'>{`${model.Offer} (${model.Quantity})`}</p>

                    {/* Bid Description (Optional) */}
                    <p className='bid__description'>{model.Description || ''}</p>                    
                </div>

                {/* Bid Status */}
                <div className='grid__cell bid__status' onClick={this.openBidDetails}>
                    {model.Status}
                </div>

                {/* Created By / Time */}
                <div className='grid__cell bid__created'>
                    <p>
                        <a href={'/#' + routes.user_view + '/' + model.CreatedById}>
                            {model.Bidder}
                        </a>
                    </p>

                    {createdDateTime}
                </div>

            </div>
        );
    }

    // --------------------------------
    renderCheckbox(){
        var userOwnsBid = this.props.CreatedById === userStore.getUser().Id;
        if (this.props.userOwnsContract || 
            (userOwnsBid)){
            // Render a checkbox that is used for owners to 
            // select, reject/accept bids.
            return (
                <div className='grid__cell grid__cell--checkbox'>
                    <_Checkbox id={this.props.Id} onChange={bidStore.selectBid} checked={this.props.selected} />
                </div>
            );
        }
    }

    // --------------------------------
    getBidTierClassName(){
        var bidClassName = 'bid__tier', bidModifier = ' bid__tier--';

        var bidTierOrder = this.props.TierOrder;
        var contractTierOrder = this.props.contract.TierOrder;

        // Compare Bid Tier Order to determine if the bidder
        // is proposing a relatively higher or lower skill level
        switch (true){
            // Above
            case bidTierOrder > contractTierOrder + 2: bidModifier += 'above-2'; break;
            case bidTierOrder > contractTierOrder: bidModifier += 'above-1'; break;
            // Below
            case bidTierOrder < contractTierOrder - 2: bidModifier += 'below-2'; break;
            case bidTierOrder < contractTierOrder: bidModifier += 'below-1'; break;

            default: bidModifier = '';
        }

        return bidClassName + bidModifier;
    }

    // --------------------------------
    openBidDetails = (event) => {
        var model = this.props;
        workStore.openBidDetails(model);
    }
}