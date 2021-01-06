import Button from 'components/Button/Button'

import * as S from './Banner.styles'

export type BannerProps = {
  /**
   * Required image url
   */
  img: string
  /**
   * Required title
   */
  title: string
  /**
   * Required subtitle
   */
  subtitle: string
  /**
   * Required buttonLabel
   */
  buttonLabel: string
  /**
   * Required buttonLink
   */
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <S.Image source={img} role="img" aria-label={title}></S.Image>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
