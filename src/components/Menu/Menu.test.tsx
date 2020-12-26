import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Menu from './Menu'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument()
  })

  it('should handle opening/closing the mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/Open Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/Close Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should hide the account and wishlist links and show the register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/My Account/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/)).not.toBeInTheDocument()

    expect(screen.getByText(/Log in Now/)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/)).toBeInTheDocument()
  })

  it('should show the account and wishlist links and hide the register box when logged in', () => {
    renderWithTheme(<Menu username="Test user" />)

    expect(screen.getByText(/My Account/)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/)).toBeInTheDocument()

    expect(screen.queryByText(/Log in Now/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/)).not.toBeInTheDocument()
  })
})
