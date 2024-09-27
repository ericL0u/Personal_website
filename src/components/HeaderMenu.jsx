import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './HeaderMenu.css';
import {useNavigate,Link} from 'react-router-dom';

const pages = ['Menu'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  // const nav = useNavigate();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const onClickHandler = () =>{
  //   navigate('/')
  // }

  return (
    <>
    <AppBar className={"width250"} position="fixed" sx={{ backgroundColor: '#f0f6ff',zIndex: 1 }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Icon */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, sx: {backgroundColor:'#00000'},mr: 3 }} /> */}
            {/* end of Icon */}

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/Personal_website"  
            // href="google.com" 
            // Return to main menu
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'bitter',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              fontSize: '1.75rem'
            }}
          >
            HOME
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' , fontFamily: 'bitter',}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
          <Box sx={{ pt: 15 }}> 
          <Typography variant="body1">

          </Typography>
        </Box>
    </>
  );
}
export default ResponsiveAppBar;