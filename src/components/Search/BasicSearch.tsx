import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'src/components/Select'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

// TODO: fetch from API
const places = [
  '中西區',
  '東區',
  '南區',
  '灣仔',
  '九龍城',
  '觀塘',
  '深水埗',
  '黃大仙',
  '油尖旺',
  '離島',
  '葵青',
  '北區',
  '西貢',
  '沙田',
  '大埔',
  '荃灣',
  '屯門',
  '元朗',
]

// TODO: fetch from API
const subjects = [
  '中文',
  'eng',
  'math',
  'ls',
  'phy',
  'chem',
  'bio',
  'econ',
  'bafs',
  'geo',
  'history',
  '中國歷史',
]

const BasicSearch = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const [selectedPlace, setSelectedPlace] = useState(places[0])

  const [selectedSubject, setSelectedSubject] = useState(subjects[0])

  const handleOnSearch = useCallback(() => {
    router.push({
      pathname: PATHNAME.SEARCH_RESULT,
      query: { place: selectedPlace, subject: selectedSubject },
    })
  }, [router, selectedPlace, selectedSubject])

  const handleOnPlaceSelect = useCallback((selected: string) => {
    setSelectedPlace(selected)
  }, [])

  const handleOnSubjectSelect = useCallback((selected: string) => {
    setSelectedSubject(selected)
  }, [])

  return (
    <Wrapper>
      <Title>{t('components.search.basicSearch.title')}</Title>

      <Row>
        <Select
          label={t('components.search.basicSearch.place')}
          options={places}
          value={selectedPlace}
          onSelect={handleOnPlaceSelect}
        />

        <Select
          label={t('components.search.basicSearch.subject')}
          options={subjects}
          value={selectedSubject}
          onSelect={handleOnSubjectSelect}
        />

        <Button onClick={handleOnSearch}>
          <span>{t('buttons.search')}</span>
        </Button>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.h2`
  font-size: 24px;
`

const Row = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 24px;
  }
`

const Button = styled.button`
  background-color: #c00;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default BasicSearch