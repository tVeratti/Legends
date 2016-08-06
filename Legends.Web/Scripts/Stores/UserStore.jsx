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
	getLocalTime(dateTime, format){
		var offset = new Date().getTimezoneOffset();
        return moment(dateTime)
            .subtract(offset, 'm')
            .format(format || 'dddd, MMMM Do YYYY, h:mmA');
	}
}

var userStore = new UserStore();