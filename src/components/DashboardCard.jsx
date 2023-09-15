import star from '../assets/star.png';
import human from '../assets/human.png';
import { Grid } from '@mui/material';
import '../style/DashboardCard.css';
const DashboardCard = () => {
  return (
    <div>
        <Grid container style={{background:'black'}}>
            <Grid className="text-container" xs={12} md={8}>
                <div className="heading-text" >
                  Fresh
                </div>
                <div className="heading-text2" style={{textAlign:'right'}}>
                  <span className="outlined-text">2</span>
                  <span className="outlined-text">0</span>
                  <span className="outlined-text">2</span>
                  <span className="outlined-text">2</span>
                </div>
                <div className="heading-text" >
                  Look
                </div>
                <div style={{color:'white',marginTop:'80px',marginLeft:'100px',textDecoration:'underline'}}>
                  See More 
                </div>
            </Grid>
            <Grid className='image-container' xs={12} md={4}>
                    <img src={star} className='star-image'/>
                    <img src={human} className='human-image' />
            </Grid>
            <div className="color-box" ></div>
        </Grid>
    </div>
  )
}

export default DashboardCard