import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"



export const MainApp = () => {
  return (
    <UserProvider>
   
    {/* <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link> */}
   <Navbar />
    <hr />

    


    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage/>} /> */}
        <Route path="/*" element={ <Navigate to="login" /> } /> 


    </Routes>
    
    </UserProvider>
  )
}
