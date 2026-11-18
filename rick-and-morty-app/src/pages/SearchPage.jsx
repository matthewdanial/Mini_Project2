import { useSearchParams } from 'react-router-dom'
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useData } from '../hooks/useData.jsx'
import { useFormInput } from '../hooks/useFormInput.jsx'
import CharacterCard from '../components/CharacterCard.jsx'

export default function SearchPage() {
    //search values from url
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') ? searchParams.get('name') : '';
    const status = searchParams.get('status') ? searchParams.get('status') : '';
    const gender = searchParams.get('gender') ? searchParams.get('gender') : '';

    // form inputs
    const [nameInputProps, resetName] = useFormInput(name);
    const [statusInputProps, resetStatus] = useFormInput(status);
    const [genderInputProps, resetGender] = useFormInput(gender);

    //fetch results
    const data = useData(`https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}`);

    //search submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({
            name: nameInputProps.value,
            status: statusInputProps.value,
            gender: genderInputProps.value
        });
    }

    //clear form
    const handleClear = () => {
        resetName(); resetStatus(); resetGender();
        setSearchParams({});
    }

    //result message
    let message = 'Loading ...';
    if (data && data.error) message = 'No characters found';
    else if (data) message = `Found ${data.info.count} characters (showing up to 20)`;

    // character cards
    const characters = data && data.results ? data.results : [];
    const characterList = characters.map(character => (
        <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CharacterCard character={character} />
        </Grid>
    ));

    return (
        <div className="SearchPage">
            <h1>Search Characters</h1>

            {/* search form */}
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                    <TextField label="Name" {...nameInputProps} />

                    <FormControl sx={{ minWidth: 140 }}>
                        <InputLabel>Status</InputLabel>
                        <Select label="Status" {...statusInputProps}>
                            <MenuItem value=""><em>Any</em></MenuItem>
                            <MenuItem value="alive">Alive</MenuItem>
                            <MenuItem value="dead">Dead</MenuItem>
                            <MenuItem value="unknown">Unknown</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: 140 }}>
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender" {...genderInputProps}>
                            <MenuItem value=""><em>Any</em></MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="genderless">Genderless</MenuItem>
                            <MenuItem value="unknown">Unknown</MenuItem>
                        </Select>
                    </FormControl>

                    {/* buttons */}
                    <Button variant="contained" type="submit">Search</Button>
                    <Button variant="outlined" onClick={handleClear}>Clear</Button>
                </Box>
            </form>

            {/* results */}
            <p>{message}</p>
            <Grid container spacing={2}>{characterList}</Grid>
        </div>
    )
}