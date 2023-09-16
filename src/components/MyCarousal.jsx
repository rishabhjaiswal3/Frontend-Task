import React,{useRef} from 'react'
import {Divider, Grid} from '@mui/material';
import '../style/MyCarousal.css';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Carousel from './Carousel';
import '../style/MyCarousal.css';
const MyCarousal = () => {

    const productTypes = [{
      title:'Apparel',
      selected:false
    },{
      title:'Accessories',
      selected:true,
    },{
      title:'Best sellers',
      selected:false,
    },{
      title:'50% off',
      selected:false
    }]
    const sliderRef = useRef(null);
    const nextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Go to the next slide
      }
    };

    const prevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev(); // Go to the previous slide
      }
    };

  return (
    <div>
        <Grid container>
            <Grid  sm={12} md={6} lg={6} className="product-heading-text" >
                New products
                <Divider className='divider'/>
            </Grid>
            {/* <Grid md={6} lg={6} className='showOnlyInMobile' >
                    <WestIcon style={{padding:'10px',cursor:'pointer'}} onClick={prevSlide}/>
                    <EastIcon style={{padding:'10px',cursor:'pointer'}} onClick={nextSlide}/>
            </Grid> */}

        </Grid>

        <Grid container>
            <Grid container sm={12} md={3} className="productItems" >
              {
                productTypes.map((product,index)=>{
                  return(<Grid className={product?.selected==true?`selectedproductItem`:`productItem`} key={index}> {product.title}</Grid>)
                })
              }
            </Grid>
            <Grid sm={12} md={9}>
              <Carousel sliderRef={sliderRef} nextSlide={nextSlide} prevSlide={prevSlide}/>
            </Grid>
        </Grid>
        <Grid container>
            {/* <Grid sm={12} md={0} lg={0} className="arrows">
               <WestIcon style={{padding:'10px',cursor:'pointer'}} onClick={prevSlide}/>
               <EastIcon style={{padding:'10px',cursor:'pointer'}} onClick={nextSlide}/>
            </Grid> */}
        </Grid>

    </div>
  )
}

export default MyCarousal