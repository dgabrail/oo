import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../AxiosApi';
interface Props {
  category: string;
  author: string;
  quoteText: string;
  id: string;
  del: () => void
}

const Quote: React.FC<Props> = ({ author, category, quoteText, id , del}) => {
  const navigate = useNavigate()
  const params = useParams()
  const deleteQuote = async() => {
    await axiosApi.delete('/quotes/' + params.id + '.json')
    del()
  }
  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <span>{category}</span>
        <h4>{author}</h4>
        <div>
          <p>{quoteText}</p>
        </div>
        <Link to={'/quotes/' + id} className='btn btn-primary'>Edit</Link>
        <button className='btn btn-success' onClick={deleteQuote}>delete</button>
      </div>
    </div>
  )
}

export default Quote
