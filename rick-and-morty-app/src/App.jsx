import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import { rickTheme } from './themes/rickTheme.jsx'
import NavBar from './components/NavBar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { FavouritesProvider } from './context/FavouritesContext.jsx'

function App() {
  return (
    <ThemeProvider theme={rickTheme}>
      <FavouritesProvider>
        {/* MUI base styles */}
        <CssBaseline />
        <NavBar />

        {/* page padding */}
        <Box sx={{ p: 2 }}>
          <AppRoutes />
        </Box>
      </FavouritesProvider>
    </ThemeProvider>
  )
}

export default App