import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Alert from '../../../ui/alert/Alert'
import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'

import styles from '../NewExercise.module.scss'
import { getIconPath } from '../icon-path.util'
import { useNewExercisePage } from '../useNewExercisePage'

const Form = () => {
	const {
		handleSubmit,
		errors,
		isSuccess,
		error,
		isLoading,
		register,
		onSubmit,
		control,
		dataIcons
	} = useNewExercisePage()

	return (
		<div className='wrapper-inner-page'>
			{error && <Alert type='error' text={text} />}
			{isSuccess && <Alert text='Exercise created' />}
			{isLoading && <Loader />}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					error={errors?.name?.message}
					name='name'
					register={register}
					options={{
						required: 'Name is required'
					}}
					type='text'
					placeholder='Enter name'
				/>

				<Field
					error={errors?.times?.message}
					name='times'
					register={register}
					options={{
						valueAsNumber: true,
						validate: value => value > 0 || 'Times must be number',
						required: 'Times is required'
					}}
					placeholder='Enter times'
				/>

				<Controller
					name='iconPath'
					control={control}
					render={({ field: { value, onChange } }) => (
						<div className={styles.images}>
							{dataIcons.map(name => (
								<img
									key={`ex img ${name}`}
									src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
									alt={name}
									className={cn({
										[styles.active]: value === getIconPath(name)
									})}
									onClick={() => onChange(getIconPath(name))}
									draggable={false}
									height='45'
								/>
							))}
						</div>
					)}
				/>

				{errors?.iconPath && (
					<div className='error'>{errors?.iconPath?.message}</div>
				)}

				<Button>Create</Button>
			</form>
		</div>
	)
}

export default Form
