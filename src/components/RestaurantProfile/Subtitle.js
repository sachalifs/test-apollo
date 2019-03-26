import React from 'react'
import FormatNumber from 'format-number'

const format = FormatNumber({ integerSeparator: '.' })

const Subtitle = ({ cuisine, zone, numericRating, reviews }) => (
  <div>
    <div className='row'>
      <div className='col-9 h5'>{cuisine} en {zone}</div>
      <div className='col-3'>
        <span className='h4'>{numericRating}</span>
        <span className='text-muted'>/10</span>
      </div>
    </div>
    <div className='row text-muted small'>
      <div className='col-7'>Precio promedio $800</div>
      <div className='col-5 text-right'>
        {format(reviews)} opiniones
      </div>
    </div>
  </div>
  )

export default Subtitle