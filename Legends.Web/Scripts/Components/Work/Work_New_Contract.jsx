/*
	-----------------------------------
	Work_New_Contract
	-----------------------------------
*/
class Work_New_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);

        var model = props.form.fields;
        var category = workStore.lookups.Categories
            .filter(c => c.Id == model.CategoryId)[0];

        this.state = { model, category };
    }

    // --------------------------------
    render() {
        // Update the formStore with current field values.
        formStore.trackForm(this.props.form.seed, this.state.model);

        var model = this.state.model;
        var lookups = workStore.lookups;
        
        var tier = model.Tier || '[Tier]';
        var type = model.Skill || model.Category || '[Skill]';

        var tierClassName = tier === '[Tier]' ? ' fade' : '';
        var typeClassName = type === '[Skill]' ? ' fade' : '';

        var skills = (this.state.category || {}).Skills || [];
        
        return (
            <div className='new-contract'>                
                <div className='contract'>
                    <h2>New Contract:
                        <div className='identifiers'>
                            <span className={'tier ' + tierClassName}>{tier}</span>
                            <span className={typeClassName}>{type}</span>
                        </div>
                    </h2>
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
    changeCategory = (option) => {
        var model = this.state.model;

        model.CategoryId = option.Id;
        model.Category = option.Name;

        this.setState({ model, category: option });
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