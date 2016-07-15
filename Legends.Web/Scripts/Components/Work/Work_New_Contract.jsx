/*
	-----------------------------------
	Work_New_Contract
	-----------------------------------
*/
class Work_New_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        var model = formStore.activeForm.fields;
        var category = workStore.lookups.Categories
            .filter(c => c.Id == model.CategoryId)[0];

        this.state = { model, category };
    }

    // --------------------------------
    render() {
        // Update the formStore with current field values.
        formStore.trackForm(formStore.activeForm.seed, this.state.model);

        var model = this.state.model;
        var lookups = workStore.lookups;
        
        var tier = model.Tier || '[Tier]';
        var type = model.Skill || model.Category || '[Skill]';

        var skills = (this.state.category || {}).Skills || [];
        
        // Determine if a delete node should be rendered.
        // Do not render if only 1 form exists.
        var formKeys = Object.keys(formStore.forms);
        var deleteNode = formKeys.length > 1 ?
            <span className='contract__delete delete' onClick={this.deleteContract} /> :
            undefined;
        
        return (
            <div className='form'>  

                <div className='contract contract--header'>

                    {/* Contract Title (Tier/Skill) */}
                    <h2>New Contract:
                        <div className='contract__identifiers'>
                            <span className='contract__tier'>{tier}</span>
                            <span className='contract__type '>{type}</span>
                        </div>
                    </h2>

                    {/* Delete Contract */}
                    {deleteNode}
                </div>
                
                
                <_Field name='Tier'
                    label='Minimum Required Tier'
                    info='This is the minimum skill tier required to fulfill the contract. It is assumed that higher proficiencies are acceptable.'
                    options={lookups.Tiers}
                    value={model.TierId}
                    onChange={this.changeTier} />
                    
                <_Field name='Category'
                    label='Category'
                    info='Choose the category of skill required to fulfill the contract.'
                    options={lookups.Categories}
                    value={model.CategoryId}
                    onChange={this.changeCategory} />

                <_Field name='Skill'
                    label='Skill'
                    info='You may specify a skill within the category.'
                    clearable={true}
                    noResultsText='Select a Category...'
                    placeholder='(Optional)'
                    options={skills}
                    value={model.SkillId}
                    onChange={this.changeSkill} />

                <_Field name='Duration'
                    label='Duration'
                    info='Amount of time that bids will be accepted on this contract.'
                    options={lookups.Durations}
                    value={model.DurationId}
                    onChange={this.changeDuration} />
                
                <_Field name='Description'
                    label='Description'
                    type='textarea'
                    placeholder='Describe the contract you wish to have fulfilled...'
                    value={model.Description}
                    onInput={this.changeDescription} />

            </div>
        );
    }

    // --------------------------------
    deleteContract = (event) => {
        formStore.deleteForm(formStore.activeForm.seed);
    } 
    
    // --------------------------------
    changeCategory = (option) => {
        var model = this.state.model;

        model.CategoryId = option.Id;
        model.Category = option.Name;

        this.setState({ model, category: option });
    } 
    
    // --------------------------------
    changeSkill = (option) => {
        var model = this.state.model;

        option = option || {};
        model.SkillId = option.Id;
        model.Skill = option.Name;


        this.setState({ model });
    }  
    
    // --------------------------------
    changeTier = (option) => {
        var model = this.state.model;

        model.TierId = option.Id;
        model.Tier = option.Name;

        this.setState({ model });
    } 

    // --------------------------------
    changeDuration = (option) => {
        var model = this.state.model;

        model.DurationId = option.Id;
        model.Duration = option.Hours;

        this.setState({ model  });
    }

    // --------------------------------
    changeDescription = (description) => {
        var model = this.state.model;

        model.Description = description;

        this.setState({ model });
    }    
}