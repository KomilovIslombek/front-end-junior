import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from '../../../ui/Loader'
import Button from '../../../ui/button/Button'

import WorkoutLogService from '../../../../services/workout/workout-log.service'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const { mutate } = useMutation({
		mutationKey: ['complete workout'],
		mutationFn: () => WorkoutLogService.complete(id),
		onSuccess: () => navigate('/workouts')
	})

	return (
		<>
			<HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />

			<div className='wrapper-inner-page' style={{ paddingInline: 0 }}>
				<div style={{ width: '90%', margin: '0 auto' }}>{/*  */}</div>

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line}></div>
									)}
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</>
	)
}

export default Workout
