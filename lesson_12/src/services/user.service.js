import { $axios } from '../api'

const USERS = '/users'

class UserService {
	getProfile() {
		return $axios.get(`${USERS}/profile`)
	}
}

export default new UserService()
