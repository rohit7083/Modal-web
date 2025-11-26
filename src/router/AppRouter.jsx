// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/home/Home"
import ProfilePage from "../pages/Profile/Profile"
import NavbarRJ from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
// import Login from "../pages/login/Login"

const NotFound = () => <div>404 - Page not found</div>

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavbarRJ/>
      <Routes>
        {/* Public routes */}
        
        <Route path="/" element={<Home />} />
       

          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/profile" element={<ProfilePage />} />
       

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
