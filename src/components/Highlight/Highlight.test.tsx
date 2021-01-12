import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from './Highlight'
import * as S from './Highlight.styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/buy',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.jpg'
}

describe('<Highlight />', () => {
  it('should render the Highlight', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Highlight with a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render the Highlight with a floating background image', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.floatImage
    )
  })

  it('should render the Highlight with the text right-aligned by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'floatImage content'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render the Highlight with the text left-aligned when alignment is passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content floatImage'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
