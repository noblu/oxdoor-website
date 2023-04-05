import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface UseBooleanOutput {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}

const useBoolean = (defaultValue?: Boolean): UseBooleanOutput => {

    const [value, setValue] = useState(!!defaultValue)

    const setTrue = useCallback(() => setValue(true), [])
    const setFalse = useCallback(() => setValue(false), [])
    const toggle = useCallback(() => setValue(x => !x), [])

    return { value, setValue, setFalse, setTrue, toggle }
}

export default useBoolean