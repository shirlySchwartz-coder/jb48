import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { MainPage } from '../../MainPage/MainPage'
import AddToList from '../../Pages/AddToList/AddToList'
import Page404 from '../../Pages/Page404/Page404'

function MainRoute() {
  return (
    <div className='MainRoute'>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/addToList' element={<AddToList/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
      
    </div>
  )
}

export default MainRoute

