class FormStore {
	// --------------------------------
    constructor(){
		// Session Storage Keys
		this.keys = {
			form: 'f_form'
		};

		this.events = {
			validate: 'validate',
			formChange: 'formChange'
		};

		// Form Creation Seed
		this.formSeed = 1;
		
		// Active Forms
		this.forms = {};

		this.requiredFields = [];
		this.dirty = false;
	}

	// --------------------------------
	getForm(formSeed){
		var activeForm;
		if (formSeed !== undefined){
			// This is not a new form, use the seed
			// to get it from the store or from session.

			// 1. Check active forms.
			// -------------------------------
			var storeForm = this.forms[formSeed];
			if (storeForm){
				activeForm = storeForm;
			} else {
				// 2. Check session forms.
				// -------------------------------
				var sessionForm = sessionStorage.getItem(this.keys.form + '_' + formSeed);
				if (sessionForm){
					activeForm = JSON.parse(sessionForm);
				}
			}
		} else {
			// 3. Create new form.
			// -------------------------------
			var newSeed = formSeed || this.formSeed++;
			this.forms[newSeed] = {
				seed: newSeed,
				fields: {}
			};
			activeForm = this.forms[newSeed];
		}

		// Set the active form for field reference.
		this.activeForm = activeForm;
		return activeForm;
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
	isValid(){
		var isValid = true;
		var formKeys = Object.keys(this.forms);

		// Loop through all forms and their fields.
		// Apply validation logic and set their validity
		// for the next render if necessary.
		formKeys.forEach(formKey => {
			var form = this.forms[formKey];
			form.showErrors = true;
			
			var formValid = this.validateForm(form);
			if (!formValid){
				isValid = false;
			}
		});

		// Force all fields to validate and show their status.
		PubSub.publish(this.events.validate);

		return isValid;
	}

	// --------------------------------
	validateForm(form){
		var isValid = true;
		form.errors = 0;

		this.requiredFields.forEach(fieldKey =>{
			// Check the required fields to make sure
			// they conain a defined value.
			var value = form.fields[fieldKey];
			if (!this.isDefined(value)){
				
				isValid = false;
				// Track the number of errors on this form,
				// to be used on the tabs for indicators.
				form.errors++;
			}
		});

		return isValid;
	}

	// --------------------------------
	isDefined(value){
		return (value && value !== '0' && value !== 'false');
	}

	// --------------------------------
	reset(){
		this.formSeed = 1;
		this.forms = {};
		this.requiredFields = [];
		this.dirty = false;
	}
}

var formStore = new FormStore();