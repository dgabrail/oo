import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosApi from '../../AxiosApi'
import { QuoteRequest, QuoteType } from '../../types'

const Edit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [quote, setQuote] = useState<QuoteType>({
    author: '',
    category: '',
    quoteText: '',
    id: ''
  })

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setQuote(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const quoteRequest: QuoteRequest = {
      quoteType: quote
    }
    await axiosApi.put('/quotes/' + params.id + '.json', quoteRequest)
    navigate('/quotes')
  };

  const quoteValue = async() => {
   const quoteReqest = await axiosApi.get('/quotes/' + params.id + '.json')
    setQuote(prev => ({
      ...prev,
      author: prev.author = quoteReqest.data.quoteType.author,
      category: prev.category = quoteReqest.data.quoteType.category,
      quoteText: prev.quoteText = quoteReqest.data.quoteType.quoteText
    }))
  }

  useEffect(() => {
    quoteValue()
  } , [])
  return (
    <div style={{ marginLeft: '20px' }}>
      <form style={{ textAlign: 'left' }} onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <input
            style={{ width: '50%' }}
            id="Category" type="text" name="category"
            className="form-control"
            value={quote.category}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Author">Author</label>
          <input
            style={{ width: '50%' }}
            id="Author" type="text" name="author"
            className="form-control"
            value={quote.author}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Quote-Text">Quote Text</label>
          <input
            style={{ width: '50%' }}
            id="Quote-Text" type="text" name="quoteText"
            className="form-control"
            value={quote.quoteText}
            onChange={change}
          />
        </div>
        <button type='submit' className='btn btn-warning mt-5'>Save</button>
      </form>
    </div>
  )
}

export default Edit
