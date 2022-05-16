import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import logo from '../content/logo-white.png';

const pages = [ 
  { name: 'Home', route: '/'},
  { name: 'Studiji', route: '/info' },
  { name: 'Kalkulator', route: '/calculate'}
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color='primary' position='static'>
      <Container maxWidth="xl">
      <Toolbar>
        <Box noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" style={{ textDecoration: 'none' , color: "white"}}>
            <img src={logo} alt="logo" style={{ width: "30%"}}></img>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
          {pages.map((page) => (
            <Link to={page.route} key={page.name} style={{ textDecoration: 'none' , color: "white"}}>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        <Box
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          <Link to="/" style={{ textDecoration: 'none' , color: "white"}}>
            <img src={logo} alt="logo" style={{ width: "30%" }}/>
          </Link>
        </Box>
        <Box sx={{ justifyContent: 'right', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Link to={page.route} key={page.name} style={{ textDecoration: 'none' , color: "white"}}>
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}
            </Menu>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;