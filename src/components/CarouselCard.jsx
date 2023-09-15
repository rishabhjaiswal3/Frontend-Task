import React from 'react'
import '../style/CarouselCard.css';
const CarouselCard = ({image,title,details}) => {
  return (
    <div style={{width:'300px',margin:'auto'}}>   
        <img src={image} />
        <div style={{height:'180px'}}>
            <div className='heading'>{title}</div>
            <p className='normal'>{details}</p>
            <div className='heading'>$100</div>
        </div>

    </div>
  )
}

export default CarouselCard