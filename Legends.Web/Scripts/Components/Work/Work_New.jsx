/*
	-----------------------------------
	Work_New
	-----------------------------------
*/
class Work_New extends React.Component {
	// --------------------------------
    constructor(props, context) {
        super(props, context);
        this.state = { skills: [] };
    }

    // --------------------------------
    render() {     
        var lookups = workStore.lookups;   

        return (
            <div>
                <h1>New Work Work</h1>

                <form id='new-order' onSubmit={this.submitForm}>
                
                    <div className='skill-info'>
                    
                        <_Field name='CategoryId'
                            label='Category'
                            required={true}
                            options={lookups.Categories}
                            onChange={this.changeCategory} />

                        <_Field name='SkillId'
                            label={'Skill (Optional)'}
                            clearable={true}
                            noResultsText='Select a Category...'
                            options={this.state.skills} />
                    </div>
                    
                    <_Field name='TierId'
                        label='Minimum Required Tier'
                        required={true}
                        options={lookups.Tiers} />

                    <_Field name='DurationId'
                        label='Duration'
                        required={true}
                        options={lookups.Durations} />
                    
                    <_Field name='Description'
                        label='Description'
                        required={true}
                        type='textarea'
                        placeholder='Describe the contract you wish to have fulfilled...' />

                    <button className='button'>Submit</button>

                </form>

            </div>
        );
    }

    // --------------------------------
    changeCategory = (option) => {
        var skills = option.Skills || [];
        this.setState({ skills });
    }

    // --------------------------------
    submitForm = (event) => {
        event.preventDefault();
        var model = formStore.fields;
        workStore.create(model);
    }
    
}