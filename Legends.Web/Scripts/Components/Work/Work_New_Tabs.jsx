/*
	-----------------------------------
	Work_New_Tabs
	-----------------------------------
*/
class Work_New_Tabs extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    // --------------------------------
    render() {     
        var contractTabs = this.renderContractTabs();
        
        return (
            <div className='tabs'>
                {contractTabs}
            </div>
        );
    }
    
    // --------------------------------
    componentDidMount(){
        this.token = PubSub.subscribe(formStore.events.formChange, this.update);
    }

    // --------------------------------
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }
    
    // --------------------------------
    renderContractTabs(){
        var activeSeed = this.props.activeContract.seed;

        // Create one tab for each active contract.
        var tabNodes = this.props.contracts.map(form => {
            var clickHandler = this.activateTab.bind(this, form);
            var tabClassName = 'tab button';

            var isActive = form.seed === activeSeed;
            if (isActive){
                tabClassName += ' active';
                clickHandler = undefined;
            }
            var errorsBadgeNode = form.showErrors && form.errors > 0 ?
                <span className='errors-badge'>{form.errors}</span> :
                undefined;

            return <button key={form.seed} className={tabClassName} onClick={clickHandler}>{form.seed}{errorsBadgeNode}</button>;
        });

        // Add a final tab used to create new contracts.
        var newHandler = this.newContract.bind(this);
        tabNodes.push(<button className='tab button new' onClick={newHandler}>+</button>);
        
        return tabNodes;
    }

    activateTab(form){
        this.props.activateTab(form);
    }

    newContract(){
        this.props.newContract();
    }
    
    // --------------------------------
    update = (message) => {
        this.forceUpdate();
    }    
}