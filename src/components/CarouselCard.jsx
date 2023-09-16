import '../style/CarouselCard.css';
const CarouselCard = ({image,title,details}) => {
  return (
    <div style={{margin:'auto',width:'190px'}}>   
        <img src={image} style={{height:'200px'}} />
        <div style={{height:'190px'}}>
            <div className='heading'>{title}</div>
            <p className='normal'>{details}</p>
            <div className='heading'>$100</div>
        </div>

    </div>
  )
}

export default CarouselCard