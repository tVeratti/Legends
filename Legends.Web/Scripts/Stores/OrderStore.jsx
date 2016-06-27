var orderStore = new OrderStore();
orderStore.initialize();

function OrderStore(){
	var self = this;

	var _api = {
		get: 		'/Work/Get',
		find: 		'/Work/Find',
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
		// Attempt to read lookup from session first.
		var jsonLookups = sessionStorage.getItem(_keys.lookups) || '';
		var sessionLookups;
		try {
		 sessionLookups = JSON.parse(jsonLookups);
		} catch (err) { }
		
		if (sessionLookups && sessionLookups.Categories){
			// Use the values stored in session.
			self.lookups = sessionLookups;
		} else{
			// Request values from the database.
			$.get(_api.getLookups).success(res => {
				// Store the values in session for future requests.
				sessionStorage.setItem(_keys.lookups, JSON.stringify(res));
				self.lookups = res;
			});
		}
	}

	// --------------------------------
	self.getOrders = function() {
		return $.get(_api.get);
	};

	// --------------------------------
	self.findOrder = function(id) {
		return $.get(_api.find, { id });
	};
	
	// --------------------------------
	self.mapSelectOptions = function(lookup){
		return lookup.map(l => {
			return {value: l.Id, label: l.Name };
		});	
	};

	return self;
}