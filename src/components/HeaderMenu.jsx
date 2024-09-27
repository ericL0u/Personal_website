import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const pages = ['Menu'];

  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [finalMove, setFinalMove] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname !== '/Personal_website/') {
      setIsTransitioning(true);

      setTimeout(() => {
        setFinalMove(true);
      }, 1000);

      setTimeout(() => {
        navigate('/Personal_website/');
      }, 1200);
    }
  };

  return (
    <>
      <div
        className={`animatedScreen ${isTransitioning ? 'active' : ''} ${
          finalMove ? 'colorChange' : ''
        }`}
      ></div>


      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: '250px',
          backgroundColor: 'transparent',
          alignItems: 'flex-start',
          left: '1.75%',
          zIndex: 1,
          marginTop: '1.5%',
          marginLeft: '1%'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Button
              onClick={handleLogoClick}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Bitter, serif',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                fontSize: '1.75rem',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              HOME
            </Button>


            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontFamily: 'Bitter, serif',
                    fontSize: '1.3rem',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ pt: 15 }}>
        <Typography variant="body1">{/* Content */}</Typography>
      </Box>
    </>
  );
}

export default ResponsiveAppBar;
