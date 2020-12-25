import * as S from './Heading.styles'

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
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
