import { useState, useEffect } from "react";

//custom hook
export function useData(url) {
    //fetched data
    const [data, setData] = useState(null);

    useEffect(() => {
        if (url) {
            let ignore = false; // ignore flag
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                });

            //cleanup
            return () => {
                ignore = true;
            };
        }
    }, [url]); //dependency

    // return data
    return data;
}