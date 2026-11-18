import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useFavouritesContext } from '../context/FavouritesContext.jsx'

//card for one character
export default function CharacterCard({ character }) {
    // navigate function
    const navigate = useNavigate();

    //favourites from context
    const { isFavourite, handleAddFavourite, handleRemoveFavourite } = useFavouritesContext();
    const favourite = isFavourite(character.id);

    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* click to open profile */}
            <CardActionArea onClick={() => navigate('/character/' + character.id)}>
                <CardMedia component="img" height="200" alt={character.name}
                    image={character.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {character.status} - {character.species}
                    </Typography>
                </CardContent>
            </CardActionArea>

            {/* favourite button */}
            <CardActions>
                <Button size="small" color="secondary"
                    startIcon={favourite ? <StarIcon /> : <StarBorderIcon />}
                    onClick={() => favourite ?
                        handleRemoveFavourite(character.id) : handleAddFavourite(character)}>
                    {favourite ? 'Remove Favourite' : 'Add Favourite'}
                </Button>
            </CardActions>
        </Card>
    );
}