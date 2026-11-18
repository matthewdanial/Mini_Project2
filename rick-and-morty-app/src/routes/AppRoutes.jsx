import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx'
import SearchPage from '../pages/SearchPage.jsx'
import CharacterPage from '../pages/CharacterPage.jsx'
import FavouritesPage from '../pages/FavouritesPage.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'

function AppRoutes(props) {
    return (
        <Routes>
            {/* home */}
            <Route index element={<Homepage {...props} />} />

            {/* search */}
            <Route path="/search" element={<SearchPage {...props} />} />

            {/* character profile */}
            <Route path="/character/:id" element={<CharacterPage {...props} />} />

            {/* favourites */}
            <Route path="/favourites" element={<FavouritesPage {...props} />} />

            {/* no match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;