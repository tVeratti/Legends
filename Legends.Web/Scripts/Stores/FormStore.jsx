class FormStore {
	// --------------------------------
    constructor(){
		// Session Storage Keys
		this.keys = {
			form: 'f_form'
		};

		// Form Creation Seed
		this.formSeed = 1;
		
		// Active Forms
		this.forms = {};
	}

	// --------------------------------
	getForm(formSeed){
		if (formSeed !== undefined){
			// This is not a new form, use the seed
			// to get it from the store or from session.

			// 1. Check active forms.
			// -------------------------------
			var storeForm = this.forms[formSeed];
			if (storeForm){
				return storeForm;
			}

			// 2. Check session forms.
			// -------------------------------
			var sessionForm = sessionStorage.getItem(this.keys.form + '_' + formSeed);
			if (sessionForm){
				return JSON.parse(sessionForm);
			}
		}

		// 3. Create new form.
		// -------------------------------
		var newSeed = formSeed || this.formSeed++;
		this.forms[newSeed] = {
			seed: newSeed,
			fields: {}
		};

		return this.forms[newSeed];
	}

	// --------------------------------
	trackForm(formSeed, fields){
		// Update the tracked value for this form/field.
		this.forms[formSeed].fields = fields;

		// Store the form/fields in browser session.
		var jsonValue = JSON.stringify(this.forms[formSeed]);
		var storageKey = this.keys.form + '_' + formSeed;

		sessionStorage.setItem(storageKey, jsonValue);
	}

	// --------------------------------
	reset(){
		this.formSeed = 1;
		this.forms = {};
	}
}

var formStore = new FormStore();