/*
	-----------------------------------
	Work_New_Contract
	-----------------------------------
*/
class Work_New_Contract extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { 
            tier: {Name: '[Tier]'},
            skill: {},
            category: {Name: '[Category]'},
            skills: [] 
        };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;
        
        var tier = this.state.tier.Name;
        var type = this.state.skill.Name || this.state.category.Name;
        
        return (
            <div>                
                <div className='contract'>
                    <h2>New Contract:
                        <div className='identifiers'>
                            <span className='tier'>{tier}</span>
                            <span>{type}</span>
                        </div>
                    </h2>
                </div>
                
                <_Field name='Tier'
                    label='Minimum Required Tier'
                    info='This is the minimum skill tier required to fulfill the contract. It is assumed that higher proficiencies are acceptable.'
                    required={true}
                    options={lookups.Tiers}
                    onChange={this.changeTier} />
                    
                <div className='skill-info'>
                
                    <_Field name='Category'
                        label='Category'
                        info='Choose the category of skill required to fulfill the contract.'
                        required={true}
                        options={lookups.Categories}
                        onChange={this.changeCategory} />

                    <_Field name='Skill'
                        label='Skill'
                        info='You may specify a skill within the category.'
                        clearable={true}
                        noResultsText='Select a Category...'
                        placeholder='(Optional)'
                        options={this.state.skills}
                        onChange={this.changeSkill} />
                </div>

                <_Field name='Duration'
                    label='Duration'
                    info='Amount of time that bids will be accepted on this contract.'
                    required={true}
                    options={lookups.Durations} />
                
                <_Field name='Description'
                    label='Description'
                    required={true}
                    type='textarea'
                    placeholder='Describe the contract you wish to have fulfilled...' />

            </div>
        );
    }

    // --------------------------------
    changeCategory = (option) => {
        var skills = option.Skills || [];
        this.setState({ skills, category: option });
    } 
    
    // --------------------------------
    changeSkill = (option) => {
        this.setState({ skill: option || {} });
    }  
    
    // --------------------------------
    changeTier = (option) => {
        this.setState({ tier: option });
    }     
}