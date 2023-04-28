import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Route Pages
import Home from './routes/Home/index';
import Login from './routes/Login';
import Signup from './routes/Signup/index';
import Language from './routes/Language';
import Demo from './routes/Demo';
import Testing from './routes/Testing';
// Components
// import Navbar from './components/Navbar/index';

function App() {
        return (
                <div className="App">
                        <BrowserRouter>
                                <div className="pages">
                                        <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="login" element={<Login />} />
                                                <Route path="signup" element={<Signup />} />
                                                <Route path="language" element={<Language />} />
                                                <Route path="demo" element={<Demo />} />
                                                <Route path="testing" element={<Testing />} />
                                        </Routes>
                                </div>
                        </BrowserRouter>
                </div>
        );
}

export default App;
