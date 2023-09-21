import React from 'react'
import Transactions from '../data'


  
const Transaction = ({ transaction }) => (
    <div>
      <span>{transaction.date}</span> -{' '}
      <span>
        {transaction.type === 'deposit' ? 'Deposited' : 'Withdrew'} ${transaction.amount}
      </span>
    </div>
  );

  

export default Transaction