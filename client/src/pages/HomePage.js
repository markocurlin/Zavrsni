import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import image from '../content/image.png'
import Typical from 'react-typical';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LaptopIcon from '@mui/icons-material/Laptop';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Home = () => {
  return (
    <>
      <Container className='container-top'>
        <Grid>
          <Typography variant="h2">
            Promijeni <Typical className='typical'
              steps={['smjer...', 1000, 'fakultet...', 1000, 'navike...', 1000]}
              loop={Infinity}
              wrapper="span"
            />
          </Typography>
          <Typography variant='subtitle1'>FESB Kalkulator vam omogućuje lakše planiranje budućnosti <br />i uštedu vremena.</Typography>
          <Link to='calculate' style={{ textDecoration: 'none' }} onClick={ () => { window.scrollTo(0, 0) }}>
            <Button variant='contained' color='primary'>Kreni</Button>
          </Link>
          <Link to='info' style={{ textDecoration: 'none' }} onClick={ () => { window.scrollTo(0, 0) }}>
            <img src={image} alt='slika'></img>
          </Link>
        </Grid>
      </Container>

      <Container className='container-middle'>
        <Typography sx={{ marginBottom: '0.5rem' }} variant='h4'>Promijeni smjer i razmotri opcije uz FESB Kalkulator</Typography>
        <Typography sx={{ marginBottom: '1.5em' }} variant='body1'>Rješi svoje probleme, ispuni svoje želje i planove već danas, koristeći FESB Kalkulator.</Typography>
        <Grid container justifyContent='center' spacing={5}>
          <Grid item xs={8} md={4}>
            <Box className='icon-box'>
              <LaptopIcon sx={{ marginTop: '14px' }} color='primary' />
            </Box>
            <Typography variant='h5'>Namijenjeno za studente</Typography>
            <Typography sx={{ marginTop: '0.2rem' }} variant='body2'>Namijenjen za studente kako bi im olakšao planiranje daljnjeg studiranja, ali to ne znači da i profesorima ne može biti od koristi.</Typography>
          </Grid>
          <Grid item xs={8} md={4}>
            <Box className='icon-box'>
              <NoAccountsIcon sx={{ marginTop: '14px' }} color='primary' />
            </Box>
            <Typography variant='h5'>Lagan za korištenje</Typography>
            <Typography sx={{ marginTop: '0.2rem' }} variant='body2'>Dizajniran da bude lagan za korištenje, moderan i ne zahtjeva unosne podatke korisnika.</Typography>
          </Grid>
          <Grid item xs={8} md={4}>
            <Box className='icon-box'>
              <PhoneAndroidIcon sx={{ marginTop: '14px' }} color='primary' />
            </Box>
            <Typography variant='h5'>Moderni dizajn</Typography>
            <Typography sx={{ marginTop: '0.2rem' }} variant='body2'>Prati trendove i kombaktibilan je sa svim uređajima.</Typography>
          </Grid>
        </Grid>
      </Container>
    
      <Container sx={{ marginTop: '4em' }}>
        <Grid container justifyContent='center' textAlign='center' spacing={1}>
          <Grid item md={12}>
            <Typography variant='h4'>Brzo i efikasno</Typography>
          </Grid>
          <Grid item md={8}>
            <Typography variant='body1'>Na temelju dosadašnjeg uspjeha provjeri koji bi ti kolegiji bili priznati u slučaju promjene studija.</Typography>
          </Grid>
        </Grid>
        
        <Container className='container-quote' sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper sx={{ backgroundColor: '#21325b', color: 'white', height: '350px', maxWidth: '550px', borderRadius: '9px'}} elevation={0}>
            <Container sx={{ lineHeight: '90px' }}>
              <FormatQuoteIcon/>
              <Typography variant='h5'>Ako promijenimo naše misli, svijet oko nas se mijenja.</Typography>
              <Typography variant='subtitle2'>Richard Bach</Typography>
            </Container>
          </Paper>
        </Container>
      </Container>

      <Container>
        <Grid container justifyContent='center' textAlign='center'>
          <Grid item xs={12} md={12}>
            <Typography variant='h4'>Započni već danas</Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='body1'>Brzo i efikasno razmotri svoje opcije u daljnjem obrazovanju.</Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: '1rem' }}>
            <Link to='calculate' style={{ textDecoration: 'none' }} onClick={ () => { window.scrollTo(0, 0) }}>
              <Button variant='contained' color='primary'>Kreni</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home;