import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()

	return (
		<>
			<Layout bgImage='/images/home-bg-ik.jpg'>
				<Button clickHandler={() => navigate('/new-workout')}>New</Button>
				<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			</Layout>
		</>
	)
}

export default Home
