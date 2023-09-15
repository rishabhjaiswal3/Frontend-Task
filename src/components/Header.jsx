import linkedinIcon from '../assets/linkedinIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import facebookIcon from '../assets/facebookIcon.png'
import carIcon from '../assets/carIcon.png';
import {Grid} from '@mui/material';
import '../style/Header.css';


const Header = () => {
  return (
    <Grid container style={{background:'black',height:'42px',position:'fixed',zIndex:100}}>
      <Grid xs={8} md={9} style={{display:'flex',flexDirection:'col'}}>
          <span className='center' style={{marginLeft:'10px'}}>
           <img  src={carIcon} style={{height:'16px'}}/>
         </span>
         <span className='center text' style={{marginLeft:'5px',fontSize:'12px'}}>Free Delivery</span>
         <span className='center text' style={{width:'20px', display:'flex',justifyContent:'center',alignItems:'center'}}>|</span>
         <span className='center text' style={{fontSize:'12px'}}>Return Policy</span>
      </Grid>
      <Grid xs={4} md={3}>
       <span className='center' style={{display:'flex',height:'100%'}}>
        <span className='text' style={{color:'#626262',fontWeight:'400',marginRight:'20px'}}>Login</span>
        <span className='center' style={{maxWidth:'60%',width:'280px',height:'100%',justifyContent:'space-evenly'}}>
        <span className="NotMobileScreen text" style={{color:'#626262',fontWeight:'400'}}>Follow US</span>
          <img src={facebookIcon} style={{height:'10px'}}/>
          <img src={linkedinIcon} style={{height:'10px'}}/>
          <img src={twitterIcon} style={{height:'10px'}}/>
          <img src={instagramIcon} style={{height:'10px'}}/>
        </span>
       </span>
      </Grid>
    </Grid>
  )
}

export default Header