import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Settings</h1>

        <div className="card">
          <h3>Application Settings</h3>

          <ul>
            <li>Profile Settings</li>
            <li>Security Settings</li>
            <li>Password Management</li>
            <li>Notification Preferences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Settings;