class UserStore {
	// --------------------------------
    constructor(){
    	this.user = {};
	}

	// --------------------------------
	setUser(user){
		this.user = user;
	}
}

var userStore = new UserStore();