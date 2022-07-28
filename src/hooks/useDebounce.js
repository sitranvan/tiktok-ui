import { useEffect, useState } from 'react';

function useDebounce(value, deplay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timerID = setTimeout(() => setDebounceValue(value), deplay);
        return () => clearTimeout(timerID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
