export const getIconPath = iconName => `/uploads/exercises/${iconName}.svg`

export const getIconPathWithUrl = iconPath => {
	return `${import.meta.env.VITE_SERVER_URL}${iconPath}`
}
