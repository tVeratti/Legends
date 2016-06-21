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
	
	self.enums = {
		Categories: {},
		Skills: {},
		Tiers: {}
	};

	self.get = function() {
		return $.get(_api.get);
	};

	self.find = function(id) {
		return $.get(_api.find, { id });
	};
	
	self.getEnums = function(){
		return $.get(_api.getEnums);
	};
	
	self.renderOptions = function(arr){
		var keys = Object.keys(arr);
		return keys.map(k => <option value={k}>{arr[k]}</option>);	
	};

	return self;
}