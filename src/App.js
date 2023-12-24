import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddSchool from './component/AddSchool';
import ShowSchool from './component/ShowSchool'
import Header from './Header';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path={'/'} element={<ShowSchool />}></Route>
          <Route path={'/student/add'} element={<AddSchool />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App