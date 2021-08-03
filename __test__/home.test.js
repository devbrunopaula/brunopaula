import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Home from '../pages/index'

describe('Index page', () => {
	it('should render', () => {
		render(<Home />)
	})
})
