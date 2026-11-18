import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useFavouritesContext } from '../context/FavouritesContext.jsx'
import CharacterCard from '../components/CharacterCard.jsx'

export default function FavouritesPage() {
    //favourites from context
    const { favourites, handleClearFavourites } = useFavouritesContext();

    //favourite cards
    const favouriteList = favourites.map(character => (
        <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CharacterCard character={character} />
        </Grid>
    ));

    return (
        <div className="FavouritesPage">
            <h1>Favourites</h1>

            {/* empty message or list */}
            {favourites.length === 0 ?
                <p>No favourites yet. Click ☆ Add Favourite on a character to save one.</p>
                :
                <>
                    <Button variant="outlined" sx={{ mb: 2 }} onClick={handleClearFavourites}>Clear All</Button>
                    <Grid container spacing={2}>{favouriteList}</Grid>
                </>
            }
        </div>
    )
}