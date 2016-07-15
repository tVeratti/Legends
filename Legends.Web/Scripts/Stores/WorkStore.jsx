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
		lookups: 		'lookups',
		contracts: 		'contracts.get',
		activate: 		'contracts.activate'
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

	self.updateWorkSummary = function(event){
		var value = event.target.value;
		self.workSummary = value;
	};

	// --------------------------------
	self.create = function(forms) {
		// Extract associative array into a simple array.
        var formKeys = Object.keys(formStore.forms);
        var contracts = formKeys.map(key => formStore.forms[key].fields);
		var model = { Description: self.workSummary || '' };

		$.ajax({
			url: _api.create,
			type: 'POST',
			data: JSON.stringify({model, contracts}),
			contentType: 'application/json; charset=utf-8',
			success: function (result) {
				window.location = '/';
			}
		});
	};

	// --------------------------------
	self.newContract = function(){
		PubSub.publish(self.events.activate, -1);
	};

	// --------------------------------
	self.activateContract = function(seed){
		PubSub.publish(self.events.activate, seed);
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