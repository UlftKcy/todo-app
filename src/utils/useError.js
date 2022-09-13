import { useState } from 'react';

const useError = () => {
    const [errorShow, setErrorShow] = useState(false);
    return [errorShow, setErrorShow]
}

export default useError;