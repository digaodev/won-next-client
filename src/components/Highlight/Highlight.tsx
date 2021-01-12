import Button from 'components/Button/Button'
import * as S from './Highlight.styles'

export type HighlightProps = {
  /**
   * Required title
   */
  title: string

  /**
   * Required subtitle
   */
  subtitle: string

  /**
   * Required button label
   */
  buttonLabel: string

  /**
   * Required button link
   */
  buttonLink: string

  /**
   * Required background image url
   */
  backgroundImage: string

  /**
   * Optional float image url
   */
  floatImage?: string

  /**
   * Optional content alignment
   */
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title}></S.FloatImage>}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>

      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
