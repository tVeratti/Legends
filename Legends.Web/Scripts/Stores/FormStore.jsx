var formStore = new FormStore();
formStore.initialize();

function FormStore(){
	var self = this;

	var _keys = {
		fields: 'f_'
	};

	self.fields = {};

	// --------------------------------
	self.initialize = function(){
	}

	self.trackField = function(name, value){
		// Update the tracked value for this field.
		self.fields[name] = value;

		// Store the field value in browser session.
		var jsonValue = JSON.stringify(value || '');
		sessionStorage.setItem(_keys.fields + name, jsonValue);
	}

	return self;
}