import styles from '../Profile.module.scss'
import { useProfile } from '../useProfile'

const BeforeAfter = () => {
	const { data } = useProfile()

	return (
		<div className='wrapper-inner-page' style={{ paddingInline: 0 }}>
			<div className={styles.before_after}>
				{data?.images?.map((image, index) => (
					<div key={index}>
						<div className={styles.heading}>
							{index === 0 ? 'Before' : 'After'}
						</div>
						<img src={image} alt='' draggable={false} />
					</div>
				))}
			</div>
		</div>
	)
}

export default BeforeAfter
