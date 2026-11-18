import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useFavouritesContext } from '../context/FavouritesContext.jsx'

//active link style
const activeStyle = { '&.active': { fontWeight: 'bold' } };

export default function NavBar() {
    //favourites from context
    const { favourites } = useFavouritesContext();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* app title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Rick and Morty
                    </Typography>

                    {/* nav links */}
                    <Button color="inherit" component={NavLink} to="/" sx={activeStyle}>Home</Button>
                    <Button color="inherit" component={NavLink} to="/search" sx={activeStyle}>Search</Button>
                    <Button color="inherit" component={NavLink} to="/favourites" sx={activeStyle}>
                        Favourites ({favourites.length})
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}