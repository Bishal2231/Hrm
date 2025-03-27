
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Holiday from './Page/Holiday'
import Designation from './Page/deignation'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/holiday" element={<Holiday />}/>
       <Route path="/designation" element={<Designation />} />
       


      </Routes>

    </>
  )
}

export default App
