import Sidebar from "../components/Sidebar";

function Members() {
  return (
    <div className="dashboard-page">
      <Sidebar />

      <div className="main-content">
        <h1>Members</h1>
        <p>
          Manage customer information and membership details.
        </p>

        <div className="card">
          <h3>Member Management</h3>

          <ul>
            <li>Add new members</li>
            <li>View customer profiles</li>
            <li>Edit member information</li>
            <li>Manage account status</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Members;