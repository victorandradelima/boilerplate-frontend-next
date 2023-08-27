import { render, screen } from '@testing-library/react'
import Home from './page'

// Um teste apenas para cobrir o teste coverage 100% do boilerplate
describe('<Home />', () => {
  it('should be a main role', () => {
    render(<Home />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })
})
