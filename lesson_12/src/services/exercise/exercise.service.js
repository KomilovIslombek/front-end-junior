import { $axios } from '../../api'

const EXERCISES = '/exercises'

class ExerciseService {
	getAll() {
		return $axios.get(EXERCISES)
	}

	/**
	 * @param {string} name
	 * @param {string} times
	 * @param {string} iconPath
	 * @return {promise}
	 */
	create(body) {
		return $axios.post(EXERCISES, body)
	}

	update(id, body) {
		return $axios.put(`${EXERCISES}/${id}`, body)
	}

	delete(id) {
		return $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
