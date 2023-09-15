import React,{useRef} from 'react'
import {Divider, Grid} from '@mui/material';
import '../style/MyCarousal.css';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Carousel from './Carousel';
const MyCarousal = () => {

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
            <Grid  sm={12} md={6} lg={6} className="product-heading-text" style={{padding:"0px 60px"}}>
                New products
                <Divider className='divider'/>
            </Grid>
            <Grid md={6} lg={6} className='showOnlyInMobile buttonIcons' style={{display:'flex'}}>
                  <div style={{width:"100%",display:'flex'}}>
                    <WestIcon style={{padding:'10px',cursor:'pointer'}} onClick={prevSlide}/>
                    <EastIcon style={{padding:'10px',cursor:'pointer'}} onClick={nextSlide}/>
                  </div>
            </Grid>

        </Grid>

        <Grid container>
            <Grid sm={12} md={3}>
                optinos lists will be here
            </Grid>
            <Grid sm={12} md={9}>
            <Carousel sliderRef={sliderRef} nextSlide={nextSlide} prevSlide={prevSlide}/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid sm={12} md={0} lg={0} className="arrows">
               <WestIcon style={{padding:'10px',cursor:'pointer'}} onClick={prevSlide}/>
               <EastIcon style={{padding:'10px',cursor:'pointer'}} onClick={nextSlide}/>
            </Grid>
        </Grid>

    </div>
  )
}

export default MyCarousal