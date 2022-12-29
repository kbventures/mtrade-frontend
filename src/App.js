import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/index';
import Login from './routes/Login';
import Signup from './routes/Signup/index';
import Navbar from './components/Navbar/index';

function App() {
        return (
                <div className="App">
                        <BrowserRouter>
                                <Navbar />
                                <div className="pages">
                                        <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="login" element={<Login />} />
                                                <Route path="signup" element={<Signup />} />
                                        </Routes>
                                </div>
                        </BrowserRouter>
                </div>
        );
}

export default App;
