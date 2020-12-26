import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { renderWithTheme } from 'utils/tests/helpers'

import Button from './Button'

describe('<Button />', () => {
  it('should render a medium-sized button by default', () => {
    const { container } = renderWithTheme(<Button>Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      'font-size': '1.4rem',
      height: '4rem',
      padding: '0.8rem 3.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a small-sized button when size is passed', () => {
    renderWithTheme(<Button size="small">Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a large-sized button when size is passed', () => {
    renderWithTheme(<Button size="large">Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      'font-size': '1.6rem',
      height: '5rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a full width button when fullWidth is passed', () => {
    renderWithTheme(<Button fullWidth>Buy</Button>)

    expect(screen.getByRole('button', { name: /Buy/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a button with an icon when icon is passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy</Button>
    )

    expect(screen.getByText(/Buy/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
