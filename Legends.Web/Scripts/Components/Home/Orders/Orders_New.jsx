/*
	-----------------------------------
	Orders_New
	-----------------------------------
*/
class Orders_New extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {        
        var durationOptions = {
            '2': '2 Hours',
            '4': '4 Hours',
            '8': '8 Hours',
            '24': '24 Hours',
            '48': '2 Days',
            '72': '3 Days',
            '168': '1 Week'
        };

        return (
            <div className='orders_new'>
                <h1>New Contract</h1>

                <form id='new-order'>

                    <_Field name='TierId'
                        label='Minimum Required Tier'
                        options={orderStore.enums.Tiers} />

                    <_Field name='SkillId'
                        label='Skill'
                        options={orderStore.enums.Skills} />

                    <_Field name='Duration'
                        label='Duration'
                        options={durationOptions} />
                    
                    <_Field name='Description'
                        label='Description'
                        type='textarea'
                        placeholder='Describe the contract you wish to have fulfilled...' />

                    <button className='button'>Submit</button>

                </form>

            </div>
        );
    }
    
    // --------------------------------
    componentWillMount(){
        var self = this;
        orderStore.getEnums().done(enums => {
            //Update store values and forceUpdate.
            orderStore.enums = enums;
            self.forceUpdate();
        });
    }
    
}