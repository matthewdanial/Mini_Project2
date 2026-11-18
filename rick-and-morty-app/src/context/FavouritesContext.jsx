import React, { useReducer, useContext } from "react";

//create context
const FavouritesContext = React.createContext();

//reducer
const reducer = (favourites, action) => {
    switch (action.type) {
        case "ADD":
            // no duplicates
            if (favourites.some(fav => fav.id === action.payload.id)) return favourites;
            return [...favourites, action.payload];
        case "REMOVE":
            return favourites.filter(fav => fav.id !== action.payload);
        case "CLEAR":
            return [];
        default:
            return favourites;
    }
};

//provider
export const FavouritesProvider = (props) => {
    // favourites list
    const [favourites, dispatch] = useReducer(reducer, []);

    //add favourite
    const handleAddFavourite = (character) => {
        dispatch({ type: "ADD", payload: character });
    }

    //remove favourite
    const handleRemoveFavourite = (id) => {
        dispatch({ type: "REMOVE", payload: id });
    }

    //clear all
    const handleClearFavourites = () => {
        dispatch({ type: "CLEAR" });
    }

    //check if favourite
    const isFavourite = (id) => favourites.some(fav => fav.id === id);

    return (
        <FavouritesContext.Provider value={{ favourites, handleAddFavourite,
            handleRemoveFavourite, handleClearFavourites, isFavourite }}>
            {props.children}
        </FavouritesContext.Provider>
    );
}

//use context
export const useFavouritesContext = () => {
    return useContext(FavouritesContext);
}