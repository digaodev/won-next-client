import * as S from './Heading.styles'

export type LineColors = 'primary' | 'secondary'

export interface HeadingProps {
  /**
   * Required children.
   */
  children: React.ReactNode

  /**
   * Optional color.
   */
  color?: 'white' | 'black'

  /**
   * Optional lineLeft. Shows a line by the left side.
   */
  lineLeft?: boolean

  /**
   * Optional lineBottom. Shows a line at the bottom.
   */
  lineBottom?: boolean

  /**
   * Optional line color.
   */
  lineColor?: LineColors

  /**
   * Optional size.
   */
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
