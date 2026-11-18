import { useState } from "react";

//custom hook for form inputs
export function useFormInput(initialValue) {
    //input state
    const [value, setValue] = useState(initialValue);

    //update on change
    function handleChange(e) {
        setValue(e.target.value);
    }

    //reset input
    const reset = () => setValue('');

    //props for input
    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return [inputProps, reset];
}