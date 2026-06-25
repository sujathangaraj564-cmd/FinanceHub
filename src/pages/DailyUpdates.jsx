import Sidebar from "../components/Sidebar";

function DailyUpdates() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Daily Updates</h1>

        <div className="card">
          <h3>Updates and Notifications</h3>

          <p>
            Financial news, announcements, and important
            updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DailyUpdates;