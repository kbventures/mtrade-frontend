import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const { login, error, isLoading } = useLogin();

        const handleSubmit = async (e) => {
                e.preventDefault();

                await login(email, password);
        };

        return (
                <form className="login" onSubmit={handleSubmit}>
                        <h3>Login</h3>

                        <label>
                                Email:
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </label>
                        <label>
                                Password:
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </label>
                        <button type="submit" disabled={isLoading}>
                                Log in
                        </button>
                        {error && <div className="error">{error}</div>}
                </form>
        );
};

export default Login;
