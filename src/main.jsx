import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter} from "react-router-dom"
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Events from './components/Events/Events.jsx'
import Community from './components/Community/Community.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/community" element={<Community/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
