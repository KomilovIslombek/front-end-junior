import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)

	const ref = useRef(null)

	const handleCLickOutside = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleCLickOutside, true)

		return () => {
			document.addEventListener('click', handleCLickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
