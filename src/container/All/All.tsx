import { queries } from '@testing-library/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import QuotesList from '../../components/QuotesList/QuotesList';
interface Props {
  id: string;
}

const All: React.FC<Props> = ({ id }) => {
  let categories = null
  if (id === '/') {
    categories = (
      <QuotesList />
    )
  } else if (id === 'star-wars') {
    categories = (
      <div>{id}</div>
    )
  } else if (id === 'saying') {
    categories = (
      <div>{id}</div>
    )
  } else if (id === 'humour') {
    categories = (
      <div>{id}</div>
    )
  } else if (id === 'motivational') {
    categories = (
      <div>{id}</div>
    )
  }
  return (
    <div>
      {categories}
    </div>
  )
}

export default All
