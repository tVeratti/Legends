/*
    -----------------------------------
    _Bid_Row
    -----------------------------------
*/
class _Bid_Row extends React.Component {
    // --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {
        // Model: Bid
        var model = this.props;
        var createdDateTime = userStore.getLocalTime(model.CreatedDateTime);

        var mineLabel = userStore.user.Id === model.CreatedById ?
            <p>My offer</p> : undefined;

        return (
            <div className='grid__row bid'>
                {/* Checkbox */}
                <div className='grid__cell grid__cell--checkbox'>
                    <_Checkbox id={model.Id} />
                </div>

                <div className='grid__cell grid__cell--full' onClick={this.openBidDetails}>
                    {/* Bid Tier */}
                    <p className={bidClassName}>{model.Tier}</p>

                    {/* Bid Offer Request */}
                    <p className='bid__offer'>{`${model.Offer} (${model.Quantity})`}</p>

                    {/* Bid Description (Optional) */}
                    <p className='bid__description'>{model.Description || ''}</p>                    
                </div>

                {/* Bid Status */}
                <div className='grid__cell' onClick={this.openBidDetails}>
                    {model.Status}
                </div>

                {/* Created By / Time */}
                <div className='grid__cell bid__created'>
                    <p><a href='#'>Test User</a></p>
                    {createdDateTime}
                </div>

            </div>
        );
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

    openBidDetails = (event) => {
        var model = this.props;
        workStore.openBidDetails(model);
    }
}