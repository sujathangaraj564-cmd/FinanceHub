import Sidebar from "../components/Sidebar";

function Investments() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Investments</h1>
        <p>
          Add and manage investment plans, customer portfolios,
          and financial products.
        </p>

        <div className="card">
          <h3>Investment Management</h3>

          <ul>
            <li>Create new investment plans</li>
            <li>Track customer investments</li>
            <li>Monitor returns and growth</li>
            <li>Generate investment reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Investments;