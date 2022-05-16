import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LinkComponent from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../content/logo-black.png';

const Footer = () => {
    return (
        <Box className="footer">
            <Divider/>
            <Container sx={{ marginTop: '1em', marginBottom: '1em' }}>
                <Grid container justifyContent='center' alignItems='center' spacing={3}>
                    <Grid item sx={{ textAlign: { xs: 'center', md: 'left' } }} xs={12} md={4}>
                        <Link to="/" style={{ textDecoration: 'none' , color: "white"}} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth'})}}>
                            <img src={logo} alt='logo'></img>
                        </Link>
                        <Typography variant='body2'>Copyright 2022, all right reserved.</Typography>
                    </Grid>
                    <Grid item textAlign='center' xs={4} md={1}>
                        <Box className='icon-box'>
                            <LinkComponent href="https://www.fesb.unist.hr/" sx={{ color: 'black'}} underline='none' target='_blank' rel='noopoener'>
                                <SchoolIcon sx={{ marginTop: '14px' }}/>
                            </LinkComponent>
                        </Box>
                    </Grid>
                    <Grid item textAlign='center' xs={4} md={1}>
                        <Box className='icon-box'>
                            <LinkComponent href="https://www.facebook.com/fesb.hr/" sx={{ color: 'black'}} underline='none' target='_blank' rel='noopoener'>
                                <FacebookIcon sx={{ marginTop: '14px' }}/>
                            </LinkComponent>
                        </Box>
                    </Grid>
                    <Grid item textAlign='center' xs={4} md={1}>
                        <Box className='icon-box'>
                            <LinkComponent href="https://www.facebook.com/fesb.hr/" sx={{ color: 'black'}} underline='none' target='_blank' rel='noopoener'>
                                <InstagramIcon sx={{ marginTop: '14px' }}/>
                            </LinkComponent>
                        </Box>
                    </Grid>
                    <Grid item sx={{ textAlign: { xs: 'center', md: 'right' } }} xs={12} md={4}>
                        <Typography variant='body2'>Sveučilište u Splitu</Typography>
                        <Typography variant='body2'>Fakultet elektrotehnike, strojarstva i brodogradnje</Typography>
                        <Typography variant='body2'>Ruđera Boškovića 32, 21000 Split, Hrvatska</Typography>
                    </Grid>
                </Grid>     
            </Container>
            <Divider/>
        </Box>
    )
}

export default Footer;