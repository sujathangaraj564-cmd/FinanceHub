import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Dashboard</h1>
        <p>Manage your financial records and monitor your business performance.</p>

        <div className="cards">

          <div className="card">
            <h3>Total Investments</h3>
            <p>Investment data will appear here.</p>
          </div>

          <div className="card">
            <h3>Members</h3>
            <p>Member details will appear here.</p>
          </div>

          <div className="card">
            <h3>Transactions</h3>
            <p>Transaction records will appear here.</p>
          </div>

          <div className="card">
            <h3>Analytics</h3>
            <p>Business analytics will appear here.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;