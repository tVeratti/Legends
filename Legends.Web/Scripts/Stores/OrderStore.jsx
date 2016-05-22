var orderStore = new OrderStore();

function OrderStore(){
	var self = this;

	var _api = {
		get: 'Orders/Get'
	};

	self.filters = {

	};

	self.get = function() {
		return $.get(_api.get);
	}

	return self;
}