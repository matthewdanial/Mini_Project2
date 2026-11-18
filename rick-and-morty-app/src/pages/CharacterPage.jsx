import { useParams, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useData } from '../hooks/useData.jsx'

//status colours
const statusColours = { Alive: 'success', Dead: 'error', unknown: 'default' };

export default function CharacterPage() {
    //id from url
    const { id } = useParams();

    //navigate function
    const navigate = useNavigate();

    //character
    const character = useData('https://rickandmortyapi.com/api/character/' + id);

    //loading
    if (!character) return <p>Loading ...</p>;

    //not found
    if (character.error) return <p>{character.error}</p>;

    return (
        <div className="CharacterPage">
            {/* back button */}
            <Button onClick={() => navigate(-1)}>Back</Button>

            <Card sx={{ maxWidth: 500, mt: 2 }}>
                <CardMedia component="img" image={character.image} alt={character.name} />
                <CardContent>
                    <Typography variant="h4" gutterBottom>{character.name}</Typography>

                    {/* status badge */}
                    <Chip label={character.status} color={statusColours[character.status]} />

                    {/* details */}
                    <Typography sx={{ mt: 2 }}><strong>Species:</strong> {character.species}</Typography>
                    {character.type && <Typography><strong>Type:</strong> {character.type}</Typography>}
                    <Typography><strong>Gender:</strong> {character.gender}</Typography>
                    <Typography><strong>Origin:</strong> {character.origin.name}</Typography>
                    <Typography><strong>Last seen:</strong> {character.location.name}</Typography>
                    <Typography><strong>Episodes:</strong> {character.episode.length}</Typography>
                </CardContent>
            </Card>

            {/* previous / next */}
            <Box sx={{ mt: 3 }}>
                <Button variant="contained" disabled={Number(id) <= 1}
                    onClick={() => navigate('/character/' + (Number(id) - 1))}>Previous</Button>
                <Button variant="contained" sx={{ ml: 1 }}
                    onClick={() => navigate('/character/' + (Number(id) + 1))}>Next</Button>
            </Box>
        </div>
    )
}