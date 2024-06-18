import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useUpdateLogTime } from './useUpdateLogTime'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [times, setTimes] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
	})

	useEffect(() => {
		if (exerciseLog?.times?.length) setTimes(exerciseLog.times)
	}, [isSuccess, exerciseLog])

	const { errorChange, updateTime } = useUpdateLogTime()

	const onChangeState = (timeId, key, value) => {
		// console.log(key, value)
		const newTimes = times.map(time => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = timeId => {
		console.log('times', times)
		return times.find(time => time.id === timeId)
	}

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		// console.log(key, time)
		return time ? time[key] : key === 'isCompleted' ? false : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleTime,
		errorChange,
		onChangeState,
		getState
	}
}
