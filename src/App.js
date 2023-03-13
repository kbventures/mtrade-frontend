import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Route Pages
import Home from './routes/Home/index';
import Login from './routes/Login';
import Signup from './routes/Signup/index';
import Language from './routes/Language';

// Components
import Navbar from './components/Navbar/index';

console.log('test');
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
                                                <Route path="language" element={<Language />} />
                                        </Routes>
                                </div>
                        </BrowserRouter>
                </div>
        );
}

export default App;
