import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { Main } from './components/Main/Main'

function App() {


  return (
    <>
  <Header/>
  <Navigation/>
  <Main/>
    </>
  )
}

export default App
