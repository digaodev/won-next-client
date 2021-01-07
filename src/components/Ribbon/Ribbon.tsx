import * as S from './Ribbon.styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  /**
   * Required children
   */
  children: React.ReactNode

  /**
   * Optional background color
   */
  color?: RibbonColors

  /**
   * Optional size
   */
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
