import Sidebar from "../components/Sidebar";

function Transactions() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Transactions</h1>

        <div className="card">
          <h3>Transaction Records</h3>

          <p>
            Deposits, withdrawals, and payment records will
            appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transactions;