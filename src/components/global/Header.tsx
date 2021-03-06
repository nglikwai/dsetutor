import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <StyledLink href={PATHNAME.HOME_PAGE}>
        <LogoWrapper>{t('common.product_name')}</LogoWrapper>
      </StyledLink>
      <StyledLink href={PATHNAME.FIND_STUDENT}>
        <LinkWrapper>{t('nav.find_student')}</LinkWrapper>
      </StyledLink>
      <StyledLink href={PATHNAME.FIND_TUTOR}>
        <LinkWrapper>{t('nav.find_tutor')}</LinkWrapper>
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  color: #fff;
  padding: 20px 40px;
`

const LogoWrapper = styled.span`
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  padding: 0 20px;
`

const LinkWrapper = styled.span`
  font-size: 18px;
  cursor: pointer;
  padding: 0 20px;
`

const StyledLink = styled(Link)``

export default Header
