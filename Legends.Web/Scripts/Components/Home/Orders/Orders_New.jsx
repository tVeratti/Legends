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
        var skillOptions = orderStore.renderOptions(orderStore.enums.Skills);
        var tierOptions = orderStore.renderOptions(orderStore.enums.Tiers);
        
        return (
            <div className='orders_new'>
                New Order
                
                <select id='select-skill'>
                    {skillOptions}
                </select>
                
                <select id='select-tier'>
                    {tierOptions}
                </select>
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