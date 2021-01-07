import Button from 'components/Button/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon/Ribbon'

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
  /**
   * Optional ribbon text
   */
  ribbon?: string
  /**
   * Optional ribbon background color
   */
  ribbonColor?: RibbonColors
  /**
   * Optional ribbon size
   */
  ribbonSize?: RibbonSizes
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    <S.Image source={img} role="img" aria-label={title}></S.Image>

    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

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
