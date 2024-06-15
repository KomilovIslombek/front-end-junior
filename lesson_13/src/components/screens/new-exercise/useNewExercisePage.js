import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import ExerciseService from '../../../services/exercise/exercise.service'

export const useNewExercisePage = () => {
	const dataIcons = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isSuccess, error, isLoading } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			handleSubmit,
			errors,
			isSuccess,
			error,
			isLoading,
			register,
			onSubmit,
			control,
			dataIcons
		}),
		[errors, isSuccess, error, isLoading]
	)
}
