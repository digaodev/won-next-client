import * as S from './Main.styles'

export interface MainProps {
  /**
   * Optional title
   */
  title?: string

  /**
   * Optional description
   */
  description?: string
}

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do React com o título React Avançado ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
