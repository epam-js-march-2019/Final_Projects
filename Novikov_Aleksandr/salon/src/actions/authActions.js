export function login(name, token) {
	return {
		type: "LOGIN",
		token: token,
		name: name
	}
}

export function logout() {
	return {
		type: "LOGOUT"
	}
}