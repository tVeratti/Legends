var workStore = new WorkStore();
workStore.initialize();

function WorkStore(){
	var self = this;

	var _api = {
		read: 		'/Work/Read',
		find: 		'/Work/Find',
		create: 	'/Work/Create',
		getLookups: '/Work/Lookup_Skills'
	};
	
	var _keys = {
		lookups: 'lookups_skills'
	};

	self.events = {
		lookups: 'lookups',
		contracts: 'contracts'
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
		$.get(_api.getLookups).success(lookups => {
			self.lookups = lookups;
			// Publish the event to trigger new renders with
			// the retrieved data lookups.
			PubSub.publish(self.events.lookups, lookups);
		});
	}

	// --------------------------------
	self.read = function() {
		$.get(_api.read).success(function(contracts){
			PubSub.publish(self.events.contracts, contracts);
		});
	};

	// --------------------------------
	self.find = function(id) {
		return $.get(_api.find, { id });
	};

	// --------------------------------
	self.create = function(forms) {
		var contracts = forms.map(f => f.fields);
		var model = JSON.stringify(contracts);

		$.ajax({
			url: _api.create,
			type: 'POST',
			data: model,
			contentType: 'application/json; charset=utf-8',
			success: function (result) {
				window.location = '/';
			}
		});
	};

	// --------------------------------
	self.mapSelectOptions = function(lookup){
		return lookup.map(item => {
			// Add the required Select props
			// but maintain the entire object too.
			item.value = item.Id;
			item.label = item.Name;
			return item;
		});	
	};

	return self;
}