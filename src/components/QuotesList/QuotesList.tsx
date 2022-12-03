import React, { useEffect, useState } from 'react'
import axiosApi from '../../AxiosApi'
import { QuoteType } from '../../types'
import Quote from '../Quote/Quote'

const QuotesList = () => {
  const [quotes, setQuotes] = useState<QuoteType[] | null>(null)
  const requestQuotes = async () => {
    const request = await axiosApi.get('/quotes.json')
    const quotesList: QuoteType[] = []
    const postsKey = Object.keys(request.data).map(key => {
      const quote = request.data
      quotesList.push(quote.postType)
    })
    setQuotes(quotesList)
  }

  requestQuotes()

  return (
    <div>
      {quotes?.map(quote => (
        <Quote/>
      ))}
    </div>
  )
}

export default QuotesList
