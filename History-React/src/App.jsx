import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { Content } from './components/Content/Content'
import { MainLayout } from './layouts/MainLayout'
import {Date} from './pages/Date/Date'
import {Since} from './pages/Since/Since'
import {Today} from './pages/Today/Today'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainLayout/>}>
        <Route index element={<Today/>}/>
        <Route path={`/since`} element={<Since/>}/>
        <Route path={`/date`} element={<Date/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
