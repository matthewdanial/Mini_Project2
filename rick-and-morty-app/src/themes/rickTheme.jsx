import { createTheme } from "@mui/material/styles";

//custom app theme
export const rickTheme = createTheme({
    //colours
    palette: {
        primary: { main: '#97CE4C', contrastText: '#1B1B1B' },
        secondary: { main: '#44B4C8', contrastText: '#ffffff' }
    },
    //font
    typography: {
        fontFamily: 'Arial, sans-serif'
    },
    //rounded corners
    shape: { borderRadius: 12 },
    components: {
        //page background
        MuiCssBaseline: {
            styleOverrides: `body { background-color: #F4F8EF; }`,
        }
    }
});