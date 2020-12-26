import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
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
   * Optional as. Type of the HTML element.
   */
  as?: React.ElementType
} & ButtonTypes

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
