import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-bootstrap";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <NavLink to="/accounts">Accounts</NavLink>
      <NavLink to="/transfers">Transfers</NavLink>
      <NavLink to="/deposits">Deposits</NavLink>
      <NavLink to="/withdrawals">Withdrawals</NavLink>
      <div>
        <h1>Accounts</h1>
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>{account.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
