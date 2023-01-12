import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import styles from './signup.module.scss';

const Signup = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const { signup, error, isLoading } = useSignup();

        const handleSubmit = async (e) => {
                e.preventDefault();

                await signup(email, password);
        };

        return (
                <form className={styles.signup} onSubmit={handleSubmit}>
                        <h3>Sign up</h3>

                        <label>
                                Email:
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </label>
                        <label>
                                Password:
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </label>
                        <button type="submit" disabled={isLoading}>
                                Sign up
                        </button>
                        {error && <div className={styles.error}>{error}</div>}
                </form>
        );
};

export default Signup;
