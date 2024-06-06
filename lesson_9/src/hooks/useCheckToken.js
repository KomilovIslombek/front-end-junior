import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { TOKEN } from '../constants/auth.constants'

import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) {
			setIsAuth(false)
			navigate('/auth')
		}
	}, [pathname, isAuth])
}
