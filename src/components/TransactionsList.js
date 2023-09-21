const TransactionsList = ({ transactions }) => (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );