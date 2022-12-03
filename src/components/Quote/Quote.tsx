import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
interface Props {
  category: string;
  author: string;
  quoteText: string;
  id: string;
}

const Quote: React.FC<Props> = ({ author, category, quoteText, id }) => {

  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <span>{category}</span>
        <h4>{author}</h4>
        <div>
          <p>{quoteText}</p>
        </div>
        <Link to={'/quotes/' + id} className='btn btn-primary'>Edit</Link>
      </div>
    </div>
  )
}

export default Quote
