import { BrowserRouter as Router, Route , Routes, Link } from 'react-router-dom'

// import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
// import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
            <nav>
                <div><Link to="/"> Connexion</Link> </div>
                <div><Link to="/register">Create user </Link></div>

                    
                    </nav>
                <Routes>
                    {/* <Route  path="/" Component={ LandingPage } /> */}
                    <Route path="/" Component={ LoginPage } />
                    <Route path="/register" Component={ RegisterPage } />
                    {/* <Route path="/forget-password" component={ ForgetPasswordPage } /> */}
                    <Route path="/home" Component={ HomePage } />
                </Routes>
            </div>
        </Router>
    )
}



const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}