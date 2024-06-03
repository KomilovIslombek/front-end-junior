import { SlUser } from 'react-icons/sl'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button>
				<SlUser fill='#fff' size={25} />
			</button>

			<Hamburger />
		</header>
	)
}

export default Header
