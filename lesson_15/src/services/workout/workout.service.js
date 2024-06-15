import { $axios } from '../../api'

export const WORKOUTS = '/workouts'

class WorkoutService {
	getAll() {
		return $axios.get(WORKOUTS)
	}

	/**
	 * @param {string} name
	 * @param {Array} exerciseIds
	 * @return {promise}
	 */
	create(body) {
		return $axios.post(WORKOUTS, body)
	}

	update(id, body) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
