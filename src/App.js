import React from 'react';
import TopAppBar from './components/TopAppBar/TopAppBar';
// import BasicDetails from './pages/BasicDetails/BasicDetails';
import ExpensesDetails from './pages/ExpensesDetails/ExpensesDetails';


import './App.css'
const App = () =>{
  return(
    <>
    <TopAppBar/>
    <div className='main-container'>
      <ExpensesDetails/>
    </div>
    </>
    
  )
}

export default App