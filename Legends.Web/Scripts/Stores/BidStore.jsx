var bidStore = new BidStore();

function BidStore(){
	var self = this;

	var _api = {
		read: 		'/Bids/Read',
		create: 	'/Bids/Create',
		status: 	'/Bids/UpdateStatus'
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
	self.updateStatus = function(ids, status){
		var params = {
			Ids: ids,
			StatusId: getStatusId(status)
		};

		return $.ajax({
			url: _api.status,
			type: 'POST',
			data: JSON.stringify(params),
			contentType: 'application/json; charset=utf-8',
			success: function(bids){
				PubSub.publish(self.events.bids, bids);
			}
		});
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