import { BrowserRouter, Route, Routes } from "react-router"
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Layout from "./pages/layout";
import './App.css'

const Home = lazy(() => import("./pages/home"))
const LogIn = lazy(() => import("./pages/logIn"))
const SignUp = lazy(() => import("./pages/signUp"))
const Cars = lazy(() => import("./pages/carsPage"))
const Info = lazy(() => import("./pages/info"))
const Contacts = lazy(() => import("./pages/contacts"))
const About = lazy(() => import("./pages/about"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress size={200} className="m-[35vh_43%]" />}>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/info/:id" element={<Info />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
            </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App