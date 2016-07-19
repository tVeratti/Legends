/*
	-----------------------------------
	_BidForm_Dialog
	-----------------------------------
*/
class _BidForm_Dialog extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        // Required field names.
        formStore.requiredFields = [
            'TierId',
            'Offer',
            'Quantity'
        ];

        var initialForm = formStore.getForm();
        this.state = { };
    }

    // --------------------------------
    render() { 
        formStore.trackForm(formStore.activeForm.seed, this.state);

        var lookups = workStore.lookups;
        var model = this.state;

        var buttons = [
            <button className='button secondary' onClick={this.props.close}>Cancel</button>,
            <button className='button' onClick={this.submit}>Create</button>
        ];

        return (
            <_Dialog title='Create Bid' buttons={buttons}>

                <_Field name='TierId'
                    label='Tier'
                    info='Choose the tier at which you can fulfill this contract.'
                    onChange={this.changeTier}
                    options={lookups.Tiers} />

                <_Field name='Offer'
                    label='Offer'
                    info='The object which you request as compensation for your bid.'
                    onChange={this.changeOffer}
                    placeholder='(e.g Wolf Pelts)' />

                <_Field name='Quantity'
                    label='Quantity'
                    info='The quantity of your offer which you request as compensation for your bid.'
                    onChange={this.changeQuantity}
                    type='number'
                    placeholder='(e.g. 12)' />

                <_Field name='Description'
                    label='Description'
                    info='Describe your bid in 255 characters or less.'
                    onChange={this.changeDescription}
                    placeholder='(Optional)' />

            </_Dialog>
        );  
    }

    changeTier = (option) => {
        this.setState({ TierId: option.Id });
    }

    changeOffer = (Offer) => {
        this.setState({ Offer });
    }

    changeQuantity = (Quantity) => {
        this.setState({ Quantity });
    }

    changeDescription = (Description) => {
        this.setState({ Description });
    }

    submit = (event) => {
        if (formStore.isValid()){
            var bidModel = formStore.activeForm.fields;
            bidModel.ContractId = this.props.contractId;
            workStore.createBid(bidModel);
            this.props.close();
        } else {
            this.forceUpdate();
        }
    }

}