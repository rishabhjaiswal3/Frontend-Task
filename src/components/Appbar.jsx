import { Divider, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../style/Appbar.css';
const Appbar = ({isDrawerOpen,setIsDrawerOpen}) => {
  return (
    <div className={isDrawerOpen?"topnav responsive":"topnav"} id='myTopnav' >
        <Grid container  style={{padding:'0px 2%',background:'black'}}>
            <Grid xs={6}>
                <p className="top-heading" >ShopKart</p>
            </Grid>
           
            <Grid xs={6} >
                <a className="icon" onClick={()=>{setIsDrawerOpen(!isDrawerOpen)}}>
                    {(isDrawerOpen !== true) ? <MenuIcon/>:<CloseIcon/> }
                </a>
                <p className="top-text NotMobileScreen" >WISHLIST(0) LIST(0)</p>
            </Grid>
        </Grid>
        <Divider style={{background:'white',width:'96%',margin:'3px auto'}}/>
            <span className="showPhoneItems">
                <a href="#home">Home</a>
                <a href="#news">About</a>
                <a href="#contact">Our Products</a>
                <a href="#about">Contact us</a>
            </span>
        <Grid container className="showNotPhoneItems" style={{width:'70%'}} >
            <Grid xs={3}>
                <span className="center white-text">Home</span>
            </Grid>
            <Grid xs={3}>
                <span className="center white-text">About</span>
            </Grid>
            <Grid xs={3} className="dropdown">
                <span className="center white-text dropbtn">Our Products</span>
                <div className="dropdown-content" >
                    <a style={{color:'white'}} href="#">Product 1</a>
                    <a style={{color:'white'}} href="#">Product 2</a>
                    <a style={{color:'white'}} href="#">Product 3</a>
                    <a style={{color:'white'}} href="#">Product 4</a>
                </div>
            </Grid>
            <Grid xs={3}>
                <span className="center white-text" >Contact Us</span>
            </Grid>
        </Grid>
    </div>
  );
};

export default Appbar;
