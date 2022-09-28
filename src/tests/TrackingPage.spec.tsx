import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

describe('Testa pagina Tracking da Aplicação', () => {
  test('Testa se a pagina tem um card', async () => {
    const { getAllByTestId, getByTestId } = render(<App />)
      const buttonHeader = getByTestId('button_header')
      userEvent.click(buttonHeader)
      await waitFor(async () => {
        const card = getAllByTestId('card_tracking')
        expect(card).toBeInTheDocument
      })
  })

  test('Testa se a pagina tem um button nova consulta', async () => {
    const { getAllByText } = render(<App />)
    await waitFor(async () => {
        const cardButton = getAllByText('Nova Consulta')
        expect(cardButton).toBeInTheDocument
      })
  })

  test('Testa se a pagina tem um button ver rastreios', async () => {
    const { getAllByText } = render(<App />)
    await waitFor(async () => {
        const cardButton = getAllByText('Ver Rastreios')
        expect(cardButton).toBeInTheDocument
      })
  })

  test('Testa se o card tem um prefixo', async () => {
    const { getAllByTestId } = render(<App />)
    await waitFor(async () => {
        const cardPrefix = getAllByTestId('card_prefix')
        expect(cardPrefix).toBeInTheDocument
      })
  })

  test('Testa se o card tem um número', async () => {
    const { getAllByTestId } = render(<App />)
    await waitFor(async () => {
        const cardNumber = getAllByTestId('card_number')
        expect(cardNumber).toBeInTheDocument
      })
  })
})
