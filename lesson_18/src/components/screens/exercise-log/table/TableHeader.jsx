import styles from '../ExerciseLog.module.scss'

const tableHeaders = ['Previous', 'Weight & Repeat', 'Completed']

const TableHeader = () => {
	return (
		<div className={styles.row}>
			{tableHeaders.map((row, index) => (
				<div key={index}>
					<span>{row}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
