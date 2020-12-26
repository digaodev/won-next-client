import * as S from './Button.styles'

export interface ButtonProps {
  /**
   * Optional children.
   */
  children?: React.ReactNode

  /**
   * Optional size.
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Optional fullWidth. Sets the button to 100% width of its parent.
   */
  fullWidth?: boolean

  /**
   * Optional icon. An actual React component <Icon />.
   */
  icon?: React.ReactNode

  /**
   * Optional onClick. Click handler function.
   */
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
