/*
* I like to distinguish Component local state from Redux global state,
* so I tend to use 'storage' instead of commonly used 'state',
* when referring to data stored in Redux
	*/

const initialStorage = {
	logged: false,
	token: null,
	name: ""
};

function authReducer(storage = initialStorage, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				logged: true,
				name: action.name,
				token: action.token
			};
		case "LOGOUT":
			return {
				logged: false,
				name: null,
				token: null
			};
		default:
			return storage;
	}
}

export default authReducer;