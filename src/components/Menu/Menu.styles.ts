import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.small};
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`

export const MenuFull = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    height: 100vh;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;

    > svg {
      position: absolute;
      top: 0;
      right: 0;

      cursor: pointer;
      margin: ${theme.spacings.xsmall};
      height: 2.4rem;
      width: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
    }

    &[aria-hidden='false'] {
      opacity: 1;
      pointer-events: all;

      ${MenuLink}, ${RegisterBox} {
        transform: translateY(0);
      }
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small}
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-align: center;
    text-decoration: none;
    transform: translateY(3rem);
    transition: transform 0.3s ease-in-out;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;

        background-color: ${theme.colors.primary};
        height: 0.3rem;

        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0;
          width: 100%;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    transform: translateY(3rem);
    transition: transform 0.3s ease-in-out;

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`
