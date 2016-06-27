var workStore = new WorkStore();
workStore.initialize();

function WorkStore(){
	var self = this;

	var _api = {
		read: 		'/Work/Read',
		create: 	'/Work/Create',
		getLookups: '/Work/Lookup_Skills'
	};
	
	var _keys = {
		lookups: 'lookups_skills'
	};

	self.filters = {

	};
	
	// Source Lookups
	self.lookups = {
		Categories: [],
		Skills: [],
		Tiers: [],
		Durations: []
	};

	// --------------------------------
	self.initialize = function(){
		// Request values from the database.
		// Values are cached for 24 hours.
		$.get(_api.getLookups)
			.success(res => self.lookups = res);
	}

	// --------------------------------
	self.read = function() {
		$.get(_api.read);
	};

	// --------------------------------
	self.find = function(id) {
		$.get(_api.read, { id });
	};

	// --------------------------------
	self.create = function(model) {
		$.post(_api.create, { model });
	};

	// --------------------------------
	self.mapSelectOptions = function(lookup){
		return lookup.map(item => {
			// Add the required Select props
			// but maintain the entire object too.
			item.value = l.Id;
			item.label = l.Name;
			return item;
		});	
	};

	return self;
}