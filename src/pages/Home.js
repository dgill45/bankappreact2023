import React from 'react'
import Savings from '../components/Savings'
import Checking from '../components/Checking'


function Home() {
  
  return (
           <div>
            <h1> Your Accounts</h1>
            <div className='container'>
              <Savings />
            </div>
            <div className='container'>
              <Checking />
            </div>
           </div>
        /*{<div>
        <NavLink to="/accounts">Accounts</NavLink>
        <NavLink to="/transfers">Transfers</NavLink>
        <NavLink to="/deposits">Deposits</NavLink>
        <NavLink to="/withdrawals">Withdrawals</NavLink>
       
      <div>}*/ 
  )
}

export default Home
