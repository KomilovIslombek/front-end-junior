import cn from 'clsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'
import { getIconPathWithUrl } from '../new-exercise/icon-path.util'

import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ exerciseLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workout/${exerciseLog.workoutLogId}` : '/workouts'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={getIconPathWithUrl(exerciseLog.exercise.iconPath)}
						alt=''
						height='34'
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
