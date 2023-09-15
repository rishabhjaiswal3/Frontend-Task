import footerBackground from '../assets/footerBackground.png';
import { Grid, Typography } from '@mui/material';
import '../style/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-image" >
            <div className='footer-top-image'>
                <Grid container style={{margin:'auto',height:'100%'}} className="center footer-text-first-container">

                    <Grid sm={12} xs={12}  md={12} lg={3} className="container1" >
                           <h6 className='news-letter-heading' style={{fontSize:'26px'}}>
                                Newsletter
                            </h6> 
                            <Typography className="news-letter-text" >
                                Get news about articles and  updates in your inbox.
                            </Typography>
                    </Grid>
                    <Grid sm={12} xs={12} md={12} lg={9} style={{display:'flex',flexDirection:'column'}}>
                        <input className='inputField' placeholder='Name' type="text" id="name" name="name" />
                        <input className='inputField' placeholder='Email' type="text" id="email" name="email" />
                        <input className='inputField' placeholder='Message' type="text" id="message" name="message" />
                    </Grid>
                </Grid>
                <Grid container style={{margin:'auto',minHeight:'100%'}} className='footer-heading-container'>
                    <Grid xs={12} className='footer-heading' style={{textAlign:'left'}}>
                       GET
                    </Grid>
                    <Grid md={2} xs={12} className='footer-heading'  style={{textAlign:'left',marginTop:'-60px'}}>
                       IN
                    </Grid>
                    <Grid md={10} xs={12}  style={{textAlign:'left',marginTop:'-60px'}}>
                        <span className='footer-heading' style={{position:'absolute'}}> 
                         TOUCH
                         <span className="send-button" >SEND</span> 
                        </span>    
                    </Grid>
                </Grid>
            </div>
            <img src={footerBackground} className='footerBackground'/>          
        </div>
        <div className="center text" style={{color:'#fff',background:'black',height:'42px',width:'100%',position:'absolute',bottom:0}}>
            Copyright 2022 All Right Reserved By SG
        </div>
    </div>
  )
}

export default Footer