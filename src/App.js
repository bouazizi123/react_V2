import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DemandeAdd from './composant/DemandeAdd'
import DemandeList from './composant/DemandeList'
import DemandeShow from './composant/DemandeShow'
import DemandeUpdate from './composant/DemandeUpdate'
export default function App() {
  return (
    <div>
      {/* <h1 className="text-center">Création d'une demande</h1><br/> */}
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< DemandeList/>}/>
        <Route exact path='/add' element={<DemandeAdd />} />
        <Route  path="/show/:id"element={<DemandeShow/>}/>
        <Route   path ="/update/:id" element={<DemandeUpdate/>}/>

      </Routes>
      
      </BrowserRouter>

    </div>
  )
}
