import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import CarouselCard from './CarouselCard';

const Carousel = ({sliderRef}) => {
  const [currentValue, setCurrentValue] = useState(1);


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

  function setCarouselSize(){
    const mobileMode = window.matchMedia('(max-width: 768px)');
    const tabletMode = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    const desktopMode = window.matchMedia('(min-width: 1025px)');
    console.log('mobile mode is',mobileMode)
      if(mobileMode?.matches){
        setCurrentValue(1);
      }
      else if(tabletMode.match){
        setCurrentValue(2);
      }
      else if(desktopMode.match){
        setCurrentValue(3.2);
      }
      else {
        setCurrentValue(3.7);
      }
  }

  useEffect(()=>{
    setCarouselSize();
  },[])
  function handleResize() {
    // Get the current window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    console.log(`Window Width: ${windowWidth}, Window Height: ${windowHeight}`);
    setCarouselSize();
  }
  
  window.addEventListener("resize", handleResize);


  return (
    <div >
      <Slider {...settings} ref={sliderRef} style={{maxWidth:"99vw",width:"100%"}}>
        {
          cards.map((card,index)=>{
            let {image,title,details} = card;
            return(<CarouselCard  key={index} image={image} title={title} details={details}/>)
          })
        }
        
      </Slider>
    </div>
  );
};

export default Carousel;
