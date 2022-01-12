import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import BottomNavigation from 'src/components/shared/BottomNavigation';
// import { selectCurrentUser, selectIsAuth } from '../app/slices/authSlice';
import { NAV_ICONS } from '../home/NavIcons';
import Link, { NextLinkComposed } from '../mui/Link';
import { theme as themeOptions } from '@/styles/theme';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.nlarkin.us">
        nlarkin.us
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// import { StyledAppBarSearch } from './StyledSearch';

export const DRAWER_WIDTH = 240;
export const footerHeightPhone = 56;

export function getDrawerWidth(isAuthenticated: boolean) {
  return isAuthenticated ? DRAWER_WIDTH : 0;
}

type HomeLayoutProps = {
  children: React.ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  const [drawerOpen, setDrawer] = React.useState(false);

  const drawerWidth = 0;

  const handleDrawerToggle = () => {
    console.log('toggled drawer');
    setDrawer(!drawerOpen);
  };

  const drawer = (
    <>
      <Toolbar
        sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}
      />
      <Divider />
      <List>
        <ListItem
          button
          key={NAV_ICONS.Home.label}
          component={NextLinkComposed}
          to={{ pathname: NAV_ICONS.Home.value }}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>{NAV_ICONS.Home.icon}</ListItemIcon>
          <ListItemText primary={NAV_ICONS.Home.label} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          NAV_ICONS.Inventory,
          NAV_ICONS.NYT,
          NAV_ICONS.Story,
          NAV_ICONS.Registration,
          NAV_ICONS.Academic,
        ].map(({ icon, value, label }) => (
          <ListItem
            button
            key={label}
            component={NextLinkComposed}
            to={{ pathname: value }}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </>
  );

  const container = undefined;

  return (
    <ThemeProvider theme={themeOptions}>
      <ScopedCssBaseline>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <AppBar
            position="fixed"
            sx={{
              width: '100%',
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: 'block' }}
                // sx={{ mr: 2, display: { sm: 'block' } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: 'block',
                }}
              >
                <Link
                  color="inherit"
                  href="/"
                  sx={{ textDecorationLine: 'none' }}
                >
                  NLarkin
                </Link>
              </Typography>
              {/* {isAuth && <StyledAppBarSearch />} */}
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="home items profile"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: 'block',
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: (theme) => theme.spacing(30),
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: '100%',
              // minHeight: '100%',
              // overflow: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              // paddingBottom: {
              //   // 7 = nav footer, 3 = bottom gutter
              //   xs: 7 + 3,
              //   // 3 = bottom gutter
              //   sm: 3,
              // },
              paddingTop: {
                // 7 = mobile app bar header, 3 = top gutter
                xs: 7 + 3,
                // 8 = desktop app bar header, 3 = top gutter
                sm: 8 + 3,
              },
            }}
          >
            {/* <Toolbar /> */}

            {children}
            {/* <BottomNavigation /> */}
          </Box>
          {/* Footer */}
          <Box
            sx={{
              pt: 6,
              pb: 4,
              backgroundColor: (theme) => theme.palette.grey[100],
            }}
            component="footer"
            id="footer"
          >
            <Typography variant="h6" align="center" gutterBottom>
              Contact Info
            </Typography>
            <Box component="address">
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                component="p"
              >
                Nathan Larkin
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                component="p"
              >
                <Link
                  color="inherit"
                  href="mailto:nlarkin.us@gmail.com"
                  sx={{ textDecorationLine: 'none' }}
                >
                  nlarkin.us@gmail.com
                </Link>
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                component="p"
              >
                <Link
                  color="inherit"
                  href="tel:7045334302"
                  sx={{ textDecorationLine: 'none' }}
                >
                  (704) 533-4302
                </Link>
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                component="p"
                gutterBottom
              >
                <Link
                  color="inherit"
                  href="https://github.com/nalarkin"
                  sx={{ textDecorationLine: 'none' }}
                >
                  Link to my GitHub
                </Link>
              </Typography>
            </Box>
            <Copyright />
          </Box>
          {/* End footer */}
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
