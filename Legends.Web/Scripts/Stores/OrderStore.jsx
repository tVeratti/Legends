var orderStore = new OrderStore();

function OrderStore(){
	var self = this;

	var _api = {
		get: 		'/Orders/Get',
		find: 		'/Orders/Find',
		getEnums: 	'/Orders/GetEnums'
	};

	self.filters = {

	};
	
	// Source Enums
	self.enums = {
		Categories: {},
		Skills: {},
		Tiers: {}
	};

	// --------------------------------
	self.getOrders = function() {
		return $.get(_api.get);
	};

	// --------------------------------
	self.findOrder = function(id) {
		return $.get(_api.find, { id });
	};
	
	// --------------------------------
	self.getEnums = function(){
		return $.get(_api.getEnums);
	};
	
	// --------------------------------
	self.mapSelectOptions = function(arr){
		var keys = Object.keys(arr);
		return keys.map(k => {
			return {value: k, label: arr[k] };
		});	
	};

	return self;
}