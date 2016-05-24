var orderStore = new OrderStore();

function OrderStore(){
	var self = this;

	var _api = {
		get: 'Orders/Get',
		find: 'Orders/Find'
	};

	self.filters = {

	};

	self.get = function() {
		return $.get(_api.get);
	}

	self.find = function(id) {
		return $.get(_api.find, { id });
	}

	return self;
}