import Layout from '../../layout/Layout'

import Form from './form/Form'

/*
	TODO: 
	[1] - need create service for exercise
	[2] - controller with images
	[3] - Watch video from site
*/

const NewExercise = () => {
	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>

			<Form />
		</>
	)
}

export default NewExercise
