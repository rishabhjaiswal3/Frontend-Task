import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import CarouselCard from './CarouselCard';

const Carousel = ({sliderRef}) => {
  const [currentValue, setCurrentValue] = useState(3.6);
  const mobileMode = window.matchMedia('(max-width: 768px)');

  useEffect(()=>{
    console.log('mobile mode is',mobileMode)
    if(mobileMode?.matches){
      setCurrentValue(1);
    }
  },[mobileMode])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: currentValue,
    slidesToScroll: 1,
  };

  let cards = [{
    image : image1,
    title:'florida jacket',
    details:'Suffered alternation in some form, bySufferattion in some forme, binejction humor or randomised',
    price:'100$'
  },{
    image : image2,
    title:'florida jacket',
    details:'Suffered alternation in some form, bySufferattion in some forme, binejction humor or randomised',
    price:'100$'
  },{
    image : image3,
    title:'florida jacket',
    details:'Suffered alternation in some form, bySufferattion in some forme, binejction humor or randomised',
    price:'100$'
  },{
    image : image2,
    title:'florida jacket',
    details:'Suffered alternation in some form, bySufferattion in some forme, binejction humor or randomised',
    price:'100$'
  }]


  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {
          cards.map((card)=>{
            let {image,title,details} = card;
            return(<CarouselCard image={image} title={title} details={details}/>)
          })
        }
        {/* <div style={{border:'1px solid green',height:'400px'}}>
          <img src={image1} alt="Image 1" />
          Hrlo sdfjlsdjd sad;fsal f
          asdfj;as dflsaf;sadfsafd
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image2} alt="Image 4" />
        </div> */}
        {/* Add more slides with images */}
      </Slider>
    </div>
  );
};

export default Carousel;
