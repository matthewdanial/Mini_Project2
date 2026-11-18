import { useSearchParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useData } from '../hooks/useData.jsx'
import CharacterCard from '../components/CharacterCard.jsx'

export default function Homepage() {
    //page number from url
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    //fetch characters
    const data = useData('https://rickandmortyapi.com/api/character?page=' + page);

    //characters and page info
    const characters = data && data.results ? data.results : [];
    const info = data && data.info ? data.info : {};

    //character cards
    const characterList = characters.map(character => (
        <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CharacterCard character={character} />
        </Grid>
    ));

    return (
        <div className="Homepage">
            <h1>All Characters</h1>

            {/* grid or loading */}
            {data ? <Grid container spacing={2}>{characterList}</Grid> : 'Loading ...'}

            {/* page buttons */}
            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button variant="contained" disabled={!info.prev}
                    onClick={() => setSearchParams({ page: page - 1 })}>Previous</Button>
                <span> Page {page} of {info.pages} </span>
                <Button variant="contained" disabled={!info.next}
                    onClick={() => setSearchParams({ page: page + 1 })}>Next</Button>
            </Box>
        </div>
    )
}