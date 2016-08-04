class UserStore {
	// --------------------------------
    constructor(){
    	this.user = {};
	}

	// --------------------------------
	setUser(user){
		this.user = user;
	}

	// --------------------------------
	getLocalTime(dateTime){
		var offset = new Date().getTimezoneOffset();
        return moment(dateTime)
            .subtract(offset, 'm')
            .format('dddd, MMMM Do YYYY, h:mmA');
	}
}

var userStore = new UserStore();