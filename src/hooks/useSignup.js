import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(null);
        const { dispatch } = useAuthContext();

        const signup = async (email, password) => {
                setIsLoading(true);
                setError(null);
                const temp = process.env.REACT_APP_BACKEND_URL;
                // eslint-disable-next-line no-console
                console.log(temp);
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
                });
                const json = await response.json();

                if (!response.ok) {
                        setIsLoading(false);
                        setError(json.error);
                }

                if (response.ok) {
                        // save the user to local storage
                        localStorage.setItem('user', JSON.stringify(json));

                        // update the auth context
                        dispatch({ type: 'LOGIN', payload: json });

                        setIsLoading(false);
                }
        };

        return { signup, isLoading, error };
};
