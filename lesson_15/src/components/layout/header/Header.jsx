import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' ? (
						// && isAuth
						<button onClick={() => navigate('/profile')}>
							<SlUser fill='#fff' size={25} />
						</button>
					) : (
						// isAuth ? backLink : '/auth'
						<button onClick={() => navigate(backLink)}>
							<IoMdArrowBack fill='#fff' size={29} />
						</button>
					)}

					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
