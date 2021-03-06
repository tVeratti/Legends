/*
	-----------------------------------
	Work_New__Tabs
	-----------------------------------
*/
class Work_New__Tabs extends React.Component {
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
    renderContractTabs(){
        var activeSeed = formStore.activeForm.seed;
        var formKeys = Object.keys(formStore.forms);

        // Create one tab for each active contract.
        var tabNodes = formKeys.map((key, index) => {
            var form = formStore.forms[key];
            var clickHandler = workStore.activateContract.bind(this, form.seed);
            var tabClassName = 'button tab ';

            var isActive = form.seed === activeSeed;
            if (isActive){
                tabClassName += 'tab--active';
                clickHandler = undefined;
            }
            var errorsBadgeNode = form.showErrors && form.errors > 0 ?
                <span className='tab__badge tab__badge--error'>{form.errors}</span> :
                undefined;

            return <button key={form.seed} className={tabClassName} onClick={clickHandler}>{index+1}{errorsBadgeNode}</button>;
        });

        if (formKeys.length < formStore.maxForms){
            // Add a final tab used to create new contracts.
            var newHandler = workStore.newContract;
            tabNodes.push(<button className='button tab tab--new' onClick={newHandler}>+</button>);
        }
        
        return tabNodes;
    }
}