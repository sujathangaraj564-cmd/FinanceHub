import Sidebar from "../components/Sidebar";

function Analytics() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Analytics</h1>

        <div className="card">
          <h3>Business Insights</h3>

          <p>
            Charts and reports will be displayed here based on
            your business data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;