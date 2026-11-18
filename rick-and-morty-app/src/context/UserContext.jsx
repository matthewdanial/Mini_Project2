import React, { useState, useContext } from "react";

// create context
const UserContext = React.createContext();

//provider
export const UserProvider = (props) => {
    // current user
    const [currentUser, setCurrentUser] = useState({});

    //update user
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value={{currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    );
}

//use context
export const useUserContext = () => {
    return useContext(UserContext);
}