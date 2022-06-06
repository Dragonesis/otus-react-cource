import React, { FC, useCallback, useState, ChangeEvent } from 'react'
import { Field, FieldWrap, Button } from '@/ui'
import { User } from '@/services/models'
import styled from '@emotion/styled'
import { useStore } from '@/services/adapters/store'
import { deckOfCardList } from '@/services/mocks'
import { getDeckOfCard } from '@/application'

export interface FormProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
  setUser: (arg: User) => void
}

export type FormErrors<Type> = {
  [Property in keyof Type]: boolean
}

export const Form: FC<FormProps> = ({ onMouseEnter, onMouseLeave, setUser }) => {
  const { setDeckOfCard, setCardsInHand } = useStore()
  const [values, setValues] = useState<User>({
    name: '',
    email: '',
    birthday: '',
  })
  const [errors, setErrors] = useState<FormErrors<User>>({
    name: false,
    email: false,
    birthday: false,
  })
  const [isBirthdayCalendar, setIsBirthdayCalendar] = useState<boolean>(false)

  const handlingOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValues((preState) => {
      preState[e.target.name] = e.target.value
      return preState
    })
  }, [])

  const handlingOnSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = [
      'name',
      'email',
      'birthday',
    ].reduce((acc: { [key: string]: boolean }, val) => {
      const el = e.target.elements.namedItem(val) as HTMLInputElement
      acc[val] = !el.validity.valid
      return acc
    }, {})

    setErrors(errors)
    if (!Object.values(errors).find(item => item) && values.name) {
      setUser(values)
      setDeckOfCard(getDeckOfCard(deckOfCardList))
      setCardsInHand([])
    }
  }, [])

  return (
    <Core onSubmit={handlingOnSubmit} noValidate>
      <FieldWrap isOffset>
        <Field
          isError={errors.name}
          required name='name' onChange={handlingOnChange} placeholder='Имя'/>
      </FieldWrap>
      <FieldWrap isOffset>
        <Field
          isError={errors.email}
          required name='email' type='email' onChange={handlingOnChange} placeholder='Email' />
      </FieldWrap>
      <FieldWrap>
        <Field
          isError={errors.birthday}
          required
          name='birthday'
          type={isBirthdayCalendar ? 'date' : 'text'}
          onFocus={() => setIsBirthdayCalendar(true)}
          onBlur={(e) => !e.target.value && setIsBirthdayCalendar(false)}
          onChange={handlingOnChange}
          placeholder='День рождения'
        />
      </FieldWrap>

      <Action
        size='l'
        fixSize='m'
        type='submit'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-testid='action-in-games'
      >
        В игру
      </Action>
    </Core>
  )
}


const Core = styled.form`
  display: block;
  margin-top: 20px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Action = styled(Button)`
  margin-top: 20px;
`