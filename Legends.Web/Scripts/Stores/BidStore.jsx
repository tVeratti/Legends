var bidStore = new BidStore();

function BidStore(){
	var self = this;

	var _api = {
		read: 		'/Bids/Read',
		create: 	'/Bids/Create',
		update: 	'/Bids/Update'
	};

	self.events = {
		bids: 'bids',
	};

	// --------------------------------
	self.read = function(filters) {
		filters.ContractId = workStore.ContractId;

		$.get(_api.read, filters).success(function(bids){
			PubSub.publish(self.events.bids, bids);
		});
	};

	// --------------------------------
	self.create = function(model){
		model.ContractId = workStore.ContractId;

		return $.ajax({
			url: _api.create,
			type: 'POST',
			data: JSON.stringify({model}),
			contentType: 'application/json; charset=utf-8',
			success: function(bids){
				PubSub.publish(self.events.bids, bids);
			}
		});
	};

	// --------------------------------
	self.update = function(model){
		return $.ajax({
			url: _api.update,
			type: 'POST',
			data: JSON.stringify({model}),
			contentType: 'application/json; charset=utf-8',
			success: function(bids){
				PubSub.publish(self.events.bids, bids);
			}
		});
	}

	// --------------------------------
	// Only one Bid can be accepted at a time.
	self.accept = function(model) {
		model.StatusId = getStatusId('ACCEPTED');
		self.update(model);
	};

	// --------------------------------
	// Multiple bids can be rejected at a time.
	self.reject = function(bids) {
		bids.forEach(b => b.StatusId = getStatusId('REJECTED'));;
		self.update(bids);
	};

	// --------------------------------
	self.cancel = function(model) {
		model.StatusId = getStatusId('CANCELED');
		self.update(model);
	};

	// -------------------------------- 
	getStatusId = function(Name){
		var status = workStore.lookups.Statuses.filter(s => {
			return s.Name.toUpperCase() === Name;
		})[0];

		return status.Id;
	};

	return self;
}